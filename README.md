# 🚀 Smart Leads Dashboard

A full-stack CRM-style Leads Management System built using React, TypeScript, Node.js, Express, and MongoDB. This project allows users to create, view, filter, and manage leads in a clean and responsive dashboard UI.

# 📌 Features

## 🔹 Frontend Features
- 📊 Dashboard page with summary UI
- 👥 Leads management table
- ➕ Add new leads using form
- 🔍 Search leads
- 🎯 Filter by status and source
- 📱 Fully responsive UI (mobile + desktop)
- 🧭 Sidebar navigation (Dashboard / Leads / Settings)
- ⚡ Fast UI updates

## 🔹 Backend Features
- 🛠 REST API built with Express
- 🍃 MongoDB database integration
- ➕ Create lead API
- 📥 Get all leads API
- 🔄 Filter support (search, status, source, page)
- ⚡ Error handling middleware

# 🧑‍💻 Tech Stack

Frontend:
- React.js
- TypeScript
- React Router DOM
- Inline CSS styling

Backend:
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

# 📁 Project Structure

smart-leads-dashboard/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Leads.tsx
│   │   │   └── Settings.tsx
│   │   ├── components/
│   │   │   └── LeadForm.tsx
│   │   ├── layout/
│   │   │   └── SidebarLayout.tsx
│   │   └── App.tsx
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── models/
│   │   ├── routes/
│   │   └── controllers/
│
└── README.md

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository
git clone https://github.com/your-username/smart-leads-dashboard.git

## 2️⃣ Backend Setup
cd server
npm install

Create .env file:
MONGO_URI=your_mongodb_connection_string
PORT=5000

Run backend:
npm run dev

## 3️⃣ Frontend Setup
cd client
npm install
npm run dev

# 🌐 API Endpoints

POST /api/leads
GET /api/leads

Filters supported:
- search
- status
- source
- page

# 📊 Application Flow

User opens dashboard → navigates sidebar → adds leads → stores in MongoDB → displays in table → filters dynamically applied

# 🎨 UI Overview

- Clean CRM-style dashboard
- Sidebar navigation
- Card-based stats
- Responsive table layout
- Mobile-friendly design

# 🚀 Future Improvements

- Authentication (Login/Signup)
- Charts & analytics dashboard
- Edit/Delete leads
- Dark mode
- Deployment (Vercel + Render)

# 🧠 Learning Outcomes

- Full-stack MERN workflow
- API integration
- MongoDB CRUD operations
- React state management
- Responsive UI design

# 👨‍💻 Author

Mounika

