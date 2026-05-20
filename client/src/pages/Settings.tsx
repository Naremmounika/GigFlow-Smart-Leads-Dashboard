export default function Settings() {
  return (
    <div>
      <h1>⚙️ Settings</h1>

      <div style={card}>
        <p>Profile Settings</p>
        <p>Account Settings</p>
        <p>Notification Settings</p>
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