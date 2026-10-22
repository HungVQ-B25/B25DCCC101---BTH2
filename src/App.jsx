import { useState } from "react";
import { CITIES } from "./data/cities";
import { useWeather } from "./hooks/useWeather";
import CityList from "./components/CityList";
import UnitToggle from "./components/UnitToggle";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import StatusMessage from "./components/StatusMessage";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [unit, setUnit] = useState("C");
  const [retryKey, setRetryKey] = useState(0);

  const selectedCity = CITIES.find((c) => c.id === selectedId) ?? null;
  const { data, loading, error } = useWeather(selectedCity, retryKey);

  function renderContent() {
    if (!selectedCity) return <StatusMessage type="empty" />;
    if (loading) return <StatusMessage type="loading" />;
    if (error) {
      return (
        <StatusMessage
          type="error"
          message={error}
          onRetry={() => setRetryKey((k) => k + 1)}
        />
      );
    }
    if (!data) return null;

    return (
      <>
        <CurrentWeather cityName={selectedCity.name} current={data.current} unit={unit} />
        <Forecast daily={data.daily} unit={unit} />
      </>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🌤️ Thời tiết Việt Nam</h1>
        <UnitToggle unit={unit} onChange={setUnit} />
      </header>

      <div className="layout">
        <aside className="sidebar">
          <CityList cities={CITIES} selectedId={selectedId} onSelect={setSelectedId} />
        </aside>
        <main className="content">{renderContent()}</main>
      </div>
    </div>
  );
}