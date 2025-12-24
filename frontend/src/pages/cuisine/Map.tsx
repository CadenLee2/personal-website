import './Cuisine.css';

import type {
  CuisineEntry,
  CuisineMap,
} from './CuisineTypes';

import { useIdNav } from './hooks';

import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import type { LeafletKeyboardEventHandlerFn } from 'leaflet';
import { divIcon } from 'leaflet';

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

  const icon = divIcon({
    html: `<div>${entry.rating}/10</div>`,
    iconSize: [36, 20],
    iconAnchor: [18, 0],
    className: `map-icon r${entry.rating}`
  });

  if ('latitude' in entry && 'longitude' in entry && entry['latitude'] && entry['longitude']) {
    return (
      <Marker
        eventHandlers={{ click: handleClick, keydown: handleKeydown }}
        position={[entry.latitude, entry.longitude]}
        icon={icon}
      >;
        <Tooltip direction="top" offset={[0, 0]}>
          {entry.title}
        </Tooltip>
      </Marker>
    );
  } else {
    return null;
  }
}

export default function CuisineMapContainer(props: { cuisineData: CuisineMap }) {
  const { cuisineData } = props;

  return (
    <>
      <MapContainer
        center={[33.8, -118]}
        zoom={10}
        scrollWheelZoom={true}
        className="map-container"
      >
        {Object.entries(cuisineData).map(([key, val]) => <CuisineMarker id={key} key={key} entry={val} />)}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
}
