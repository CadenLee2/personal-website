import type {
  CuisineEntry,
  CuisineMap,
} from './CuisineTypes';

import { useIdNav } from '~/components/cuisine/hooks';

import 'leaflet/dist/leaflet.css'
import type { LeafletKeyboardEventHandlerFn, LatLngExpression } from 'leaflet';
import { divIcon } from 'leaflet';
import 'leaflet.markercluster';

import { onMount, Resource, createEffect } from 'solid-js';

// TODO: update react map -> For, etc.

// TODO: fix CuisineMarker
const DEFAULT_CENTER = [33.8, -118];
const DEFAULT_ZOOM = 10;
const TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const MAP_ID = 'cuisine-leaflet-map';

function MapContainer(props: { markers: CuisineMap }) {
  let map;

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
    // TODO: always show markers rather than requiring zoom level
    // TODO: remove markerclustergroup dependency
    let pointClusters = L.layerGroup()//.markerClusterGroup();
    // TODO: bind popup
    Object.entries(props.markers)
      .map(([id, entry]) => toMarker(id, entry, L))
      .filter((m) => m !== null)
      .forEach((m) => pointClusters.addLayer(m));
    map.addLayer(pointClusters);

    let mapref = map;

    createEffect(() => {
      console.log('map cluster logic rerunning');
      mapref.removeLayer(pointClusters);
      // TODO: refactor to a function
      pointClusters = L.markerClusterGroup();
      Object.entries(props.markers)
        .map(([id, entry]) => toMarker(id, entry, L))
        .filter((m) => m !== null)
        .forEach((m) => pointClusters.addLayer(m));
      mapref.addLayer(pointClusters);
    });

  });

  return (
    <div id={MAP_ID} class="map-container" />
  );
}

function toMarker(id: string, entry: CuisineEntry, L: typeof import('leaflet')) {
  //const { navigateToId } = useIdNav();

  const handleClick = () => {
    // TODO: id nav
    //navigateToId(id);
  }

  const handleKeydown: LeafletKeyboardEventHandlerFn = (e) => {
    if (e.originalEvent.key === 'Enter') {
      //navigateToId(id);
    }
  }

  const numericRating = parseInt('' + entry.rating);

  const icon = divIcon({
    html: `<div class="r${numericRating}">${numericRating}/10</div>`,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
    className: `map-icon`
  });

  if ('latitude' in entry && 'longitude' in entry && entry['latitude'] && entry['longitude']) {
    return L.marker(
      [entry.latitude, entry.longitude],
      {
        title: "TEST EXAMPLE",
        icon: icon,
      }
    );
      /*<Marker
        eventHandlers={{ click: handleClick, keydown: handleKeydown }}
        position={[entry.latitude, entry.longitude]}
        icon={icon}
      >;
        <Tooltip direction="top" offset={[0, -11]}>
          {entry.title}
        </Tooltip>
      </Marker>
      );*/
  } else {
    return null;
  }
}

// TODO: remove dead code
function CuisineMarker(props: { id: string, entry: CuisineEntry }) {
  const { id, entry } = props;

  const { navigateToId } = useIdNav();

  const handleClick = () => {
    navigateToId(id);
  }

  const handleKeydown: LeafletKeyboardEventHandlerFn = (e) => {
    if (e.originalEvent.key === 'Enter') {
      navigateToId(id);
    }
  }

  const numericRating = parseInt('' + entry.rating);

  const icon = divIcon({
    html: `<div class="r${numericRating}">${numericRating}/10</div>`,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
    className: `map-icon`
  });

  /*if ('latitude' in entry && 'longitude' in entry && entry['latitude'] && entry['longitude']) {
    return (
      <Marker
        eventHandlers={{ click: handleClick, keydown: handleKeydown }}
        position={[entry.latitude, entry.longitude]}
        icon={icon}
      >;
        <Tooltip direction="top" offset={[0, -11]}>
          {entry.title}
        </Tooltip>
      </Marker>
    );
  } else {
    return null;
    }*/
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
