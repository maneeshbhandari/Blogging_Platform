# 📝 Blogging Platform

A MERN stack blogging application where users can create, edit, delete, and view blogs. Features include authentication, comments, likes, and category filtering.

## 🚀 Features
- User authentication (JWT)
- Create/Edit/Delete blogs with rich text editor
- Comments & Likes system
- Search and category filtering
- User profile with authored blogs
- Admin dashboard

## ⚡ Setup
```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm start
```

Add a `.env` file in **backend** with:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```
