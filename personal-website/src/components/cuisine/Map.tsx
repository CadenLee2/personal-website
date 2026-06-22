import type {
  CuisineEntry,
  CuisineMap,
} from './CuisineTypes';

import { useIdNav } from '~/components/cuisine/hooks';

import 'leaflet/dist/leaflet.css'
import type { LeafletKeyboardEventHandlerFn, LatLngExpression } from 'leaflet';

import { onMount, createEffect } from 'solid-js';

const DEFAULT_CENTER = [33.8, -118];
const DEFAULT_ZOOM = 10;
const TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const MAP_ID = 'cuisine-leaflet-map';

function MapContainer(props: { markers: CuisineMap }) {
  let map;

  const { navigateToId } = useIdNav();

  // onMount is necessary as per readme of <https://github.com/chris31415926535/solid-leaflet-reprex>
  onMount(async () => {
    // TODO: make nicer?
    // TODO: enable markers
    const leaflet = await import('leaflet');
    const L = leaflet.default;
    map = L.map(MAP_ID, {
      worldCopyJump: true,
      scrollWheelZoom: true
    }).setView(DEFAULT_CENTER as LatLngExpression, DEFAULT_ZOOM);
    const tileLayer = L.tileLayer(TILE_URL, { attribution: TILE_ATTR });
    tileLayer.addTo(map);

    // Markers
    let pointClusters = L.layerGroup();
    let mapref = map;

    createEffect(() => {
      mapref.removeLayer(pointClusters);
      pointClusters = L.layerGroup();
      Object.entries(props.markers)
        .map(([id, entry]) => toCuisineMarker(entry, L, () => navigateToId(id)))
        .filter((m) => m !== null)
        .forEach((m) => pointClusters.addLayer(m));
      mapref.addLayer(pointClusters);
    });

  });

  return (
    <div id={MAP_ID} class="map-container" />
  );
}

function toCuisineMarker(entry: CuisineEntry, L: typeof import('leaflet'), nav: () => void) {
  const handleClick = () => {
    nav();
  }

  const handleKeydown: LeafletKeyboardEventHandlerFn = (e) => {
    if (e.originalEvent.key === 'Enter') {
      nav();
    }
  }

  const numericRating = parseInt('' + entry.rating);

  if ('latitude' in entry && 'longitude' in entry && entry['latitude'] && entry['longitude']) {
    const tooltip = L.tooltip({
      direction: 'top',
      offset: [0, -11],
    }).setContent(entry.title);

    const icon = L.divIcon({
      html: `<div class="r${numericRating}">${numericRating}/10</div>`,
      iconSize: [44, 44],
      iconAnchor: [22, 22],
      className: `map-icon`
    });

    return L.marker([entry.latitude, entry.longitude], {
        title: entry.title,
        icon: icon,
    }).on('click', handleClick).on('keydown', handleKeydown).bindTooltip(tooltip);
  } else {
    return null;
  }
}

/*function AutoRecenter(props: { latitude: number, longitude: number }) {
  const leafletMap = useMap();

  useEffect(() => {
    leafletMap.panTo([props.latitude, props.longitude])
  }, [props.latitude, props.longitude, leafletMap]);

  return null;
  }*/

export default function CuisineMapContainer(props: {
  filtered: CuisineMap,
  selected: CuisineEntry | null
}) {
  // TODO: stop destructuring props here
  const selected = props.selected;
  const target = (selected && 'latitude' in selected && 'longitude' in selected && selected['latitude'] && selected['longitude'])
    ? [selected.latitude, selected.longitude] : null;

  // TODO: support AutoRecenter

  // TODO: support markers

  return (
    <>
      <MapContainer markers={props.filtered} />
      {/*Object.entries(cuisineData).map(([key, val]) => <CuisineMarker id={key} key={key} entry={val} />)*/}
      {/*target && <AutoRecenter latitude={targets[0]} longitude={targets[1]} />*/}
    </>
  );
}
