export default function Dashboard() {
  return (
    <div>
      <h1>📊 Dashboard</h1>

      <div style={card}>
        <h3>Welcome to CRM System</h3>
        <p>Track, manage and grow your leads efficiently.</p>
      </div>
    </div>
  );
}

const card: React.CSSProperties = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  marginTop: "20px",
};