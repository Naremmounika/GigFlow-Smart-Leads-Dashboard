import { useState } from "react";
import { createLead } from "../api/leadApi";

type Props = {
  onSuccess: () => void;
};

export default function LeadForm({ onSuccess }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    status: "New",
    source: "Website",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createLead(form);

      setForm({
        name: "",
        email: "",
        status: "New",
        source: "Website",
      });

      onSuccess();
    } catch (error) {
      console.error("Error creating lead:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <select name="status" value={form.status} onChange={handleChange}>
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Qualified">Qualified</option>
        <option value="Lost">Lost</option>
      </select>

      <select name="source" value={form.source} onChange={handleChange}>
        <option value="Website">Website</option>
        <option value="Instagram">Instagram</option>
        <option value="Referral">Referral</option>
      </select>

      <button type="submit">Add Lead</button>
    </form>
  );
}