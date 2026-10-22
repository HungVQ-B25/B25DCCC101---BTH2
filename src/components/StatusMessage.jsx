export default function StatusMessage({ type, message, onRetry }) {
  if (type === "empty") {
    return <div className="status">👈 Hãy chọn một thành phố để xem thời tiết</div>;
  }

  if (type === "loading") {
    return <div className="status">⏳ Đang tải dữ liệu...</div>;
  }

  return (
    <div className="status error">
      <p>⚠️ {message}</p>
      <button className="retry-btn" onClick={onRetry}>Thử lại</button>
    </div>
  );
}