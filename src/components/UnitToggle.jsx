export default function UnitToggle({ unit, onChange }) {
  return (
    <div className="unit-toggle">
      <button
        className={unit === "C" ? "unit-btn active" : "unit-btn"}
        onClick={() => onChange("C")}
      >
        °C
      </button>
      <button
        className={unit === "F" ? "unit-btn active" : "unit-btn"}
        onClick={() => onChange("F")}
      >
        °F
      </button>
    </div>
  );
}