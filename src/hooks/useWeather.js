import { useState, useEffect } from "react";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

function buildUrl(city) {
  const params = new URLSearchParams({
    latitude: city.lat,
    longitude: city.lon,
    current: "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m",
    daily: "weather_code,temperature_2m_max,temperature_2m_min",
    timezone: "Asia/Ho_Chi_Minh",
    forecast_days: 7,
  });
  return `${BASE_URL}?${params.toString()}`;
}

export function useWeather(city, retryKey) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) {            // chưa chọn thì không gọi API
      setData(null);
      setError(null);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        const res = await fetch(buildUrl(city), { signal: controller.signal });
        if (!res.ok) throw new Error(`Máy chủ trả về lỗi (mã ${res.status})`);
        setData(await res.json());
      } catch (err) {
        if (err.name === "AbortError") return;
        setError("Không tải được dữ liệu thời tiết. " + (err.message || ""));
      }
      setLoading(false);
    }

    load();

    return () => controller.abort(); // cleanup
  }, [city, retryKey]);

  return { data, loading, error };
}