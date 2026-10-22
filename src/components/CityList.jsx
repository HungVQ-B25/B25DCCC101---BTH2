export default function CityList({ cities, selectedId, onSelect }) {
  return (
    <ul className="city-list">
      {cities.map((c) => (
        <li key={c.id}>
          <button
            className={c.id === selectedId ? "city-btn active" : "city-btn"}
            onClick={() => onSelect(c.id)}
          >
            {c.name}
          </button>
        </li>
      ))}
    </ul>
  );
}