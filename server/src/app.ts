import express from "express";
import cors from "cors";

import leadRoutes from "./routes/leadRoutes";

const app = express();

app.use(cors());

// MUST be before routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/leads", leadRoutes);

export default app;