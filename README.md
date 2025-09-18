# 📦 Warehouse Management System

A full-stack application that modernizes warehouse operations by integrating with **QuickBooks Online** to manage invoices, capture **digital customer signatures**, and automatically send signed invoices via email.

---

## 🚀 Features
- 📊 Fetch and display invoices from QuickBooks Online  
- ✍️ Capture customer signatures digitally (React signature pad)  
- 📄 Attach signatures directly to QuickBooks invoices  
- 📧 Send signed invoices to customers automatically  
- 🗄️ Store signature records securely in a database (PostgreSQL)  
- ⚡ Built with **Node.js + TypeScript** (backend) and **React** (frontend)  

---

## 🛠️ Tech Stack
- **Backend:** Node.js, TypeScript, Express, QuickBooks API, Prisma  
- **Frontend:** React, react-signature-canvas, Axios  
- **Database:** PostgreSQL  
- **Deployment:** Vercel (frontend), Render/Heroku (backend), Supabase (database)  

---

## 📂 Project Structure

```text
/warehouse-backend
│── src/
│   ├── config/        # QuickBooks API setup
│   ├── controllers/   # Route controllers
│   ├── routes/        # API endpoints
│   ├── services/      # Business logic (QuickBooks, PDF, email)
│   ├── models/        # Prisma schema & DB models
│   ├── middleware/    # Error handling, auth
│   └── app.ts         # Express app entry
/frontend
│── src/               # React components (signature pad, dashboard)
```

---

## 📡 API Endpoints

| Method | Endpoint                        | Description                                 |
|--------|----------------------------------|---------------------------------------------|
| GET    | `/api/invoices`                 | Fetch open invoices from QuickBooks         |
| GET    | `/api/invoices/:id`             | Fetch single invoice details                |
| POST   | `/api/invoices/:id/signature`   | Attach digital signature to an invoice      |
| POST   | `/api/invoices/:id/send`        | Email signed invoice to customer            |
