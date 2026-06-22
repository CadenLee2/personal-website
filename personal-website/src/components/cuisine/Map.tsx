import type {
  CuisineEntry,
  CuisineMap,
} from './CuisineTypes';

import { useIdNav } from '~/components/cuisine/hooks';

import 'leaflet/dist/leaflet.css'
//import { MapContainer, TileLayer, Marker, Tooltip, useMap } from 'react-leaflet'
import type { LeafletKeyboardEventHandlerFn, LatLngExpression } from 'leaflet';
import { divIcon } from 'leaflet';
import { onMount, Resource } from 'solid-js';

// TODO: update react map -> For, etc.

// TODO: pnpm audit fix

// TODO: fix CuisineMarker
const DEFAULT_CENTER: LatLngExpression = [33.8, -118];
const DEFAULT_ZOOM = 10;
const TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const MAP_ID = 'cuisine-leaflet-map';

function MapContainer() {
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
    }).setView(DEFAULT_CENTER, DEFAULT_ZOOM);
    const tileLayer = L.tileLayer(TILE_URL, { attribution: TILE_ATTR });
    tileLayer.addTo(map);
  });

  return (
    <div id={MAP_ID} class="map-container" />
  );
}

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
  cuisineData: Resource<CuisineMap>,
  selected: CuisineEntry | null
}) {
  const selected = props.selected;
  const cuisineData = props.cuisineData;

  const targets = (selected && 'latitude' in selected && 'longitude' in selected && selected['latitude'] && selected['longitude'])
    ? [selected.latitude, selected.longitude] : null;

  // TODO: support AutoRecenter

  return (
    <>
      <MapContainer />
      {/*Object.entries(cuisineData).map(([key, val]) => <CuisineMarker id={key} key={key} entry={val} />)*/}
      {/*targets && <AutoRecenter latitude={targets[0]} longitude={targets[1]} />*/}
    </>
  );
}
