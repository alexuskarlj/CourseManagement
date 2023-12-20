import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const DeleteCourseModal = ({ courseTitle, onCancel, onConfirm }) => {
    return (
        <div className="delete-modal">
            <div className="delete-modal-content">
                <h2>Delete Course</h2>
                <p>Are you sure you want to delete the course "{courseTitle}"?</p>
                <div className="delete-modal-buttons">
                <button onClick={onConfirm} className="btn btn-confirm">
                    Confirm
                </button>
                <button onClick={onCancel} className="btn btn-cancel">
                    Cancel
                </button>
        </div>
            </div>
        </div>
    );
};

DeleteCourseModal.propTypes = {
    courseTitle: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default DeleteCourseModal;
