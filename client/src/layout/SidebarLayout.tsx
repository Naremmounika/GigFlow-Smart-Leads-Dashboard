import { NavLink, Outlet } from "react-router-dom";

export default function SidebarLayout() {
  return (
    <div style={styles.wrapper}>

      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>🚀 CRM</h2>

        <NavLink to="/" style={navStyle}>Dashboard</NavLink>
        <NavLink to="/leads" style={navStyle}>Leads</NavLink>
        <NavLink to="/settings" style={navStyle}>Settings</NavLink>
      </aside>

      <main style={styles.main}>
        <Outlet />
      </main>

    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial",
  },
  sidebar: {
    width: "220px",
    background: "#0f172a",
    color: "white",
    padding: "20px",
  },
  logo: {
    marginBottom: "20px",
  },
  main: {
    flex: 1,
    background: "#f4f6fb",
    padding: "20px",
  },
};

const navStyle = ({ isActive }: { isActive: boolean }): React.CSSProperties => ({
  display: "block",
  padding: "12px",
  margin: "8px 0",
  borderRadius: "8px",
  textDecoration: "none",
  color: isActive ? "white" : "#94a3b8",
  background: isActive ? "#2563eb" : "transparent",
});