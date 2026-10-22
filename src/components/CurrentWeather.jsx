import { getWeatherInfo, formatTemp, formatUpdateTime } from "../utils/weather";

export default function CurrentWeather({ cityName, current, unit }) {
  const info = getWeatherInfo(current.weather_code);

  return (
    <div className="card current">
      <h2>{cityName}</h2>
      <div className="current-main">
        <span className="current-icon">{info.icon}</span>
        <span className="current-temp">{formatTemp(current.temperature_2m, unit)}</span>
      </div>
      <p className="current-desc">{info.text}</p>
      <div className="current-details">
        <p>💧 Độ ẩm: <b>{current.relative_humidity_2m}%</b></p>
        <p>💨 Tốc độ gió: <b>{current.wind_speed_10m} km/h</b></p>
      </div>
      <p className="update-time">Cập nhật lúc: {formatUpdateTime(current.time)}</p>
    </div>
  );
}