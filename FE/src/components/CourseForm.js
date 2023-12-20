import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const CourseForm = () => {
    const [course, setCourse] = useState({ title: '', description: '', instructor: '' });
    const navigate = useNavigate();
    const { courseId } = useParams();

    useEffect(() => {
        if (courseId) {
            // Fetch course details for editing
            axios.get(`http://127.0.0.1:8000/api/courses/${courseId}`)
                .then(response => setCourse(response.data))
                .catch(error => console.error('Error fetching course details', error));
        }
    }, [courseId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const method = courseId ? 'put' : 'post';
        const url = courseId ? `http://127.0.0.1:8000/api/courses/${courseId}/` : 'http://127.0.0.1:8000/api/courses/';

        axios[method](url, course)
            .then(() => {
                navigate('/'); // Navigate to the course list after submit
            })
            .catch(error => console.error('Error saving course', error));
    };

    return (
        <div className="course-form-container">
            <form onSubmit={handleSubmit} className="course-form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={course.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={course.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="instructor">Instructor</label>
                    <input
                        type="text"
                        id="instructor"
                        name="instructor"
                        value={course.instructor}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-save-course">Save Course</button>
            </form>
        </div>
    );
};

export default CourseForm;
