export default function CityDropdown({ cities, selectedCity, onChange }) {
  return (
    <select
      value={selectedCity}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 rounded border shadow-sm focus:ring focus:ring-teal-300"
    >
      {cities.map((city) => (
        <option key={city} value={city}>{city}</option>
      ))}
    </select>
  );
}
