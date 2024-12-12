interface Location {
  id: string;
  name: string;
  region: string;
}

interface LocationSelectorProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
}

const locations: Location[] = [
  { id: 'us-east', name: 'New York', region: 'US East' },
  { id: 'us-west', name: 'Los Angeles', region: 'US West' },
  { id: 'eu-central', name: 'Frankfurt', region: 'EU Central' },
  { id: 'ap-east', name: 'Singapore', region: 'Asia Pacific' },
];

export default function LocationSelector({ selectedLocation, onLocationChange }: LocationSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {locations.map((location) => (
        <button
          key={location.id}
          onClick={() => onLocationChange(location.id)}
          className={`p-4 rounded-lg border ${
            selectedLocation === location.id
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-200'
          }`}
        >
          <h3 className="font-semibold">{location.name}</h3>
          <p className="text-sm text-gray-600">{location.region}</p>
        </button>
      ))}
    </div>
  );
}