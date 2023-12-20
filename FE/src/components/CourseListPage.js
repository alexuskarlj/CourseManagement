import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteCourseModal from './DeleteCourseModal'; // Import the delete modal component

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [courseToDelete, setCourseToDelete] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/courses/')
            .then(response => setCourses(response.data))
            .catch(error => console.error('Error fetching courses', error));
    }, []);

    const handleDeleteClick = (courseId) => {
        setCourseToDelete(courseId);
        setShowDeleteModal(true);
    };

    const deleteCourse = () => {
        // Make an API request to delete the course with courseToDelete
        axios.delete(`http://127.0.0.1:8000/api/courses/${courseToDelete}/`)
            .then(() => {
                // Refresh the course list or update the state as needed
                setCourses(courses.filter(course => course.id !== courseToDelete)); // Remove the deleted course from the list
                setShowDeleteModal(false); // Hide the modal
            })
            .catch(error => {
                console.error('Error deleting course', error);
                setShowDeleteModal(false); // Hide the modal on error
            });
    };

    return (
        <div className="course-list-container">
            <div className="courses-header">
                <h1 className="courses-title">Courses List</h1>
                <Link to="/add-course" className="btn btn-add-course">Add Course</Link>
            </div>
            {/* Render course list */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Instructor</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course.id}>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                            <td>{course.instructor}</td>
                            <td>
                                {/* Update and Delete buttons */}
                                <Link to={`/edit-course/${course.id}`} className="btn btn-update">Update</Link>
                                <Link to={`/course/${course.id}`} className="btn btn-view">View</Link>
                                <button onClick={() => handleDeleteClick(course.id)} className="btn btn-delete">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <DeleteCourseModal
                    courseTitle={courseToDelete && courses.find(course => course.id === courseToDelete).title}
                    onCancel={() => setShowDeleteModal(false)}
                    onConfirm={deleteCourse}
                />
            )}
        </div>
    );
};

export default CourseList;
