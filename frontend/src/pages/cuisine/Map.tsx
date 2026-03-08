import './Cuisine.css';

import type {
  CuisineEntry,
  CuisineMap,
} from './CuisineTypes';

import { useIdNav } from './hooks';

import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from 'react-leaflet'
import type { LeafletKeyboardEventHandlerFn } from 'leaflet';
import { divIcon } from 'leaflet';
import { useEffect } from 'react';

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

  if ('latitude' in entry && 'longitude' in entry && entry['latitude'] && entry['longitude']) {
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
  }
}

function AutoRecenter(props: { latitude: number, longitude: number }) {
  const leafletMap = useMap();

  useEffect(() => {
    leafletMap.panTo([props.latitude, props.longitude])
  }, [props.latitude, props.longitude, leafletMap]);

  return null;
}

export default function CuisineMapContainer(props: {
  cuisineData: CuisineMap,
  selected: CuisineEntry | null
}) {
  const { cuisineData, selected } = props;

  const targets = (selected && 'latitude' in selected && 'longitude' in selected && selected['latitude'] && selected['longitude'])
    ? [selected.latitude, selected.longitude] : null;

  return (
    <>
      <MapContainer
        center={[33.8, -118]}
        zoom={10}
        scrollWheelZoom={true}
        className="map-container"
        worldCopyJump={true}
      >
        {Object.entries(cuisineData).map(([key, val]) => <CuisineMarker id={key} key={key} entry={val} />)}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {targets && <AutoRecenter latitude={targets[0]} longitude={targets[1]} />}
      </MapContainer>
    </>
  );
}
