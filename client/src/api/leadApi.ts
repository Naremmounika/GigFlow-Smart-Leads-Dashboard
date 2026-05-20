import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export type Lead = {
  name: string;
  email: string;
  status: string;
  source: string;
};

export type LeadQuery = {
  search?: string;
  status?: string;
  source?: string;
  page?: number;
  limit?: number;
};

export const fetchLeads = (params?: LeadQuery) => {
  return API.get("/leads", { params });
};

export const createLead = (data: Lead) => {
  return API.post("/leads", data);
};
