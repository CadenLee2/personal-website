import type {
  CuisineEntry,
  CuisineMap,
} from './CuisineTypes';

import { useIdNav } from '~/components/cuisine/hooks';

import 'leaflet/dist/leaflet.css'
import type { LeafletKeyboardEventHandlerFn, LatLngExpression } from 'leaflet';
import * as L from 'leaflet';

import { onMount, createEffect } from 'solid-js';

const DEFAULT_CENTER = [33.8, -118];
const DEFAULT_ZOOM = 10;
const TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const MAP_ID = 'cuisine-leaflet-map';
const MAP_OPTIONS: L.MapOptions = {
  worldCopyJump: true,
  scrollWheelZoom: true
}

function MapContainer(props: { markers: CuisineMap, autoCenter: LatLngExpression | null }) {
  const { navigateToId } = useIdNav();

  const mountMap = () => {
    const map = L.map(MAP_ID, MAP_OPTIONS);
    map.setView(DEFAULT_CENTER as LatLngExpression, DEFAULT_ZOOM);
    const tileLayer = L.tileLayer(TILE_URL, { attribution: TILE_ATTR });
    map.addLayer(tileLayer);

    let markerLayers = L.layerGroup();

    createEffect(() => {
      map.removeLayer(markerLayers);
      markerLayers = L.layerGroup();
      Object.entries(props.markers)
        .map(([id, entry]) => toCuisineMarker(entry, () => navigateToId(id)))
        .filter((m) => m !== null)
        .forEach((m) => markerLayers.addLayer(m));
      map.addLayer(markerLayers);
    });

    createEffect(() => {
      if (props.autoCenter) {
        map.panTo(props.autoCenter)
      }
    });
  }

  // onMount is necessary as per readme of <https://github.com/chris31415926535/solid-leaflet-reprex>
  onMount(() => {
    try {
      mountMap();
    } catch (err) {
      console.error(`Map mount error: ${err}`);
      location.reload();
    }
  });

  return (
    <div id={MAP_ID} class="map-container" />
  );
}

function toCuisineMarker(entry: CuisineEntry, nav: () => void) {
  const handleClick = nav;

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

export default function CuisineMapContainer(props: {
  filtered: CuisineMap,
  selected: CuisineEntry | null
}) {
  const target = () => {
    const selected = props.selected;
    if (selected && 'latitude' in selected && 'longitude' in selected && selected['latitude'] && selected['longitude']) {
      return [selected.latitude, selected.longitude] as LatLngExpression;
    } else {
      return null;
    }
  }

  return (
    <MapContainer markers={props.filtered} autoCenter={target()} />
  );
}
