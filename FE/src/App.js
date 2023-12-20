import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CourseListPage from './components/CourseListPage';
import CourseForm from './components/CourseForm';
import CourseDetail from './components/CourseDetail';
import './App.css';
// In a central file like src/index.js or src/App.js
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<CourseListPage />} />
        <Route path="/add-course" element={<CourseForm />} />
        <Route path="/edit-course/:courseId" element={<CourseForm />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
