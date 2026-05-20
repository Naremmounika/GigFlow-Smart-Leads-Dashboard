import { Request, Response } from "express";
import Lead from "../models/Lead";

export const createLead = async (req: Request, res: Response) => {
  try {
    const { name, email, status, source } = req.body;

    const lead = await Lead.create({
      name,
      email,
      status,
      source,
    });

    return res.status(201).json({
      success: true,
      data: lead,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getLeads = async (req: any, res: any) => {
  try {
    const { page = 1, limit = 10, search, status, source, sort } = req.query;

    const query: any = {};

    // Search (name or email)
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    // Filters
    if (status) query.status = status;
    if (source) query.source = source;

    // Sorting
    const sortOption: any =
      sort === "oldest" ? { createdAt: 1 } : { createdAt: -1 };

    const leads = await Lead.find(query)
      .sort(sortOption)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    const total = await Lead.countDocuments(query);

    res.json({
      success: true,
      data: leads,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch leads",
    });
  }
};