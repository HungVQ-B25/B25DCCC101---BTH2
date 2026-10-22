export function getWeatherInfo(code) {
  if (code === 0) return { icon: "☀️", text: "Trời quang" };
  if (code === 1) return { icon: "🌤️", text: "Ít mây" };
  if (code === 2) return { icon: "⛅", text: "Có mây rải rác" };
  if (code === 3) return { icon: "☁️", text: "Nhiều mây" };
  if (code === 45 || code === 48) return { icon: "🌫️", text: "Sương mù" };
  if (code >= 51 && code <= 57) return { icon: "🌦️", text: "Mưa phùn" };
  if (code >= 61 && code <= 67) return { icon: "🌧️", text: "Mưa" };
  if (code >= 71 && code <= 77) return { icon: "❄️", text: "Tuyết" };
  if (code >= 80 && code <= 82) return { icon: "🌦️", text: "Mưa rào" };
  if (code >= 95) return { icon: "⛈️", text: "Dông" };
  return { icon: "❓", text: "Không xác định" };
}

// YC5: chỉ tính toán, không gọi API
export function formatTemp(celsius, unit) {
  const value = unit === "C" ? celsius : (celsius * 9) / 5 + 32;
  return `${Math.round(value)}°${unit}`;
}

const DAY_NAMES = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

export function getDayName(dateStr) {
  return DAY_NAMES[new Date(dateStr + "T00:00:00").getDay()];
}

export function formatShortDate(dateStr) {
  const [, month, day] = dateStr.split("-"); // "2026-10-22" -> "22/10"
  return `${day}/${month}`;
}

export function formatUpdateTime(timeStr) {
  return new Date(timeStr).toLocaleString("vi-VN");
}