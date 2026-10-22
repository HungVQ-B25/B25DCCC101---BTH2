import {
  getWeatherInfo,
  formatTemp,
  getDayName,
  formatShortDate,
} from "../utils/weather";

export default function Forecast({ daily, unit }) {
  return (
    <div className="card">
      <h3>Dự báo 7 ngày</h3>
      <ul className="forecast-list">
        {daily.time.map((date, i) => {
          const info = getWeatherInfo(daily.weather_code[i]);
          return (
            <li key={date} className="forecast-item">
              <div className="forecast-day">
                <b>{getDayName(date)}</b>
                <small>{formatShortDate(date)}</small>
              </div>
              <span className="forecast-icon" title={info.text}>{info.icon}</span>
              <span className="forecast-temp">
                <span className="max">{formatTemp(daily.temperature_2m_max[i], unit)}</span>
                {" / "}
                <span className="min">{formatTemp(daily.temperature_2m_min[i], unit)}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}