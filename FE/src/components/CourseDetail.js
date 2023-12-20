import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; 

const CourseDetail = () => {
    const [course, setCourse] = useState({});
    const { courseId } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/courses/${courseId}`)
            .then(response => setCourse(response.data))
            .catch(error => console.error('Error fetching course', error));
    }, [courseId]);

    return (
        <div className="course-view-container">
          <div className="course-view">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Instructor: {course.instructor}</p>
            {/* Add any additional details you want to display here */}
          </div>
          <Link to="/" className="btn btn-back">Back</Link>
        </div>
      );
};

export default CourseDetail;
