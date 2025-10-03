import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { HistoricalEvent } from '@/types/events';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const categoryColors: Record<string, string> = {
  battle: '#ef4444',
  treaty: '#3b82f6',
  discovery: '#f59e0b',
  founding: '#8b5cf6',
  cultural: '#ec4899',
  trade: '#10b981'
};

const createCustomIcon = (category: string) => {
  const color = categoryColors[category] || '#6b7280';
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background-color: ${color}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
};

interface MapViewProps {
  events: HistoricalEvent[];
  onEventClick: (event: HistoricalEvent) => void;
}

const MapView = ({ events, onEventClick }: MapViewProps) => {
  return (
    <MapContainer
      center={[40, 20]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {events.map((event) => (
        <Marker
          key={event.id}
          position={event.coordinates}
          icon={createCustomIcon(event.category)}
          eventHandlers={{
            click: () => onEventClick(event)
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-sm mb-1">{event.title}</h3>
              <p className="text-xs text-gray-600 mb-2">{event.date}</p>
              <p className="text-xs">{event.description.substring(0, 100)}...</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
