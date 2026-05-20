import { useEffect, useState, useCallback } from "react";
import { fetchLeads } from "../api/leadApi";
import LeadForm from "../components/LeadForm";
import { Link, useLocation } from "react-router-dom";

type Lead = {
  _id?: string;
  name: string;
  email: string;
  status: string;
  source: string;
};

export default function Leads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [source, setSource] = useState("");
  const [page, setPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const loadLeads = useCallback(async () => {
    try {
      const res = await fetchLeads({
        search,
        status,
        source,
        page,
      });

      setLeads(res.data.data || []);
    } catch (err) {
      console.log("Error loading leads", err);
    }
  }, [search, status, source, page]);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadLeads();
    }, 300);

    return () => clearTimeout(timer);
  }, [loadLeads]);

  return (
    <div style={styles.container}>

      {/* MOBILE TOP BAR */}
      <div style={styles.mobileTop}>
        <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <h3>CRM Dashboard</h3>
      </div>

      {/* SIDEBAR */}
      <div style={{
        ...styles.sidebar,
        left: menuOpen ? 0 : "-260px"
      }}>

        <h2 style={styles.logo}>🚀 CRM</h2>

        <Link to="/" style={navStyle(location.pathname === "/")}>
          📊 Dashboard
        </Link>

        <Link to="/leads" style={navStyle(location.pathname === "/leads")}>
          👥 Leads
        </Link>

        <Link to="/settings" style={navStyle(location.pathname === "/settings")}>
          ⚙️ Settings
        </Link>
      </div>

      {/* MAIN CONTENT */}
      <div style={styles.main}>

        <h1 style={styles.title}>Leads Dashboard</h1>

        {/* STATS */}
        <div style={styles.cards}>
          <div style={styles.card}>
            Total Leads
            <h2>{leads.length}</h2>
          </div>

          <div style={styles.card}>
            New
            <h2>{leads.filter(l => l.status === "New").length}</h2>
          </div>

          <div style={styles.card}>
            Contacted
            <h2>{leads.filter(l => l.status === "Contacted").length}</h2>
          </div>
        </div>

        {/* FORM */}
        <div style={styles.box}>
          <LeadForm onSuccess={loadLeads} />
        </div>

        {/* FILTERS */}
        <div style={styles.filters}>
          <input
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.input}
          />

          <select value={status} onChange={(e) => setStatus(e.target.value)} style={styles.input}>
            <option value="">Status</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Qualified">Qualified</option>
            <option value="Lost">Lost</option>
          </select>

          <select value={source} onChange={(e) => setSource(e.target.value)} style={styles.input}>
            <option value="">Source</option>
            <option value="Website">Website</option>
            <option value="Instagram">Instagram</option>
            <option value="Referral">Referral</option>
          </select>
        </div>

        {/* TABLE */}
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={{ ...styles.th, width: "20%" }}>Name</th>
                <th style={{ ...styles.th, width: "45%" }}>Email</th>
                <th style={{ ...styles.th, width: "15%" }}>Status</th>
                <th style={{ ...styles.th, width: "20%" }}>Source</th>
              </tr>
            </thead>

            <tbody>
              {leads.map((lead) => (
                <tr key={lead._id}>
                  <td style={styles.td}>
                    {lead.name}
                  </td>

                  <td style={{ ...styles.td, wordBreak: "break-word" }}>
                    {lead.email}
                  </td>

                  <td style={styles.td}>
                    <span style={badge(lead.status)}>
                      {lead.status}
                    </span>
                  </td>

                  <td style={styles.td}>
                    {lead.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* PAGINATION */}
        <div style={styles.pagination}>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </button>

          <span>Page {page}</span>

          <button onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>

      </div>
    </div>
  );
}
const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    fontFamily: "Arial",
    background: "#f5f7fb",
    minHeight: "100vh",
  },

  mobileTop: {
    display: "none",
  },

  hamburger: {
    fontSize: "22px",
    background: "none",
    border: "none",
  },

  sidebar: {
    width: "220px",
    background: "#111827",
    color: "white",
    padding: "20px",
    minHeight: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    transition: "0.3s",
  },

  logo: {
    marginBottom: "20px",
  },

  main: {
    marginLeft: "220px",
    flex: 1,
    padding: "20px",
  },

  title: {
    marginBottom: "20px",
  },
 
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "10px",
    marginBottom: "20px",
  },

  card: {
    background: "white",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  box: {
    background: "white",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "20px",
  },

  filters: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },

  tableBox: {
    background: "white",
    borderRadius: "12px",
    overflow: "hidden",
  },


  pagination: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  tableWrapper: {
  marginTop: "20px",
  background: "white",
  borderRadius: "12px",
  overflowX: "auto",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  width:"100%",
  WebkitOverflowScrolling: "touch",
},

table: {
  width: "100%",
  borderCollapse: "collapse" as const,
  tableLayout: "auto",
  minWidth:"600px",

},

th: {
  textAlign: "left",
  padding: "14px 16px",
  background: "#f1f5f9",
  borderBottom: "1px solid #e5e7eb",
  fontWeight: 600,
  fontSize: "14px",
},

td: {
  textAlign: "left",
  padding: "14px 16px",
  borderBottom: "1px solid #e5e7eb",
  fontSize: "14px",
  color: "#334155",
  wordBreak: "break-word",
},
};

const navStyle = (active: boolean): React.CSSProperties => ({
  display: "block",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "8px",
  textDecoration: "none",
  color: active ? "#fff" : "#cbd5e1",
  background: active ? "#2563eb" : "transparent",
});

const badge = (status: string) => ({
  padding: "5px 10px",
  borderRadius: "20px",
  color: "white",
  background:
    status === "New"
      ? "#3b82f6"
      : status === "Contacted"
      ? "#f59e0b"
      : status === "Qualified"
      ? "#10b981"
      : "#ef4444",
});