import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import BlogEditor from './components/BlogEditor';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/editor" element={<BlogEditor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
