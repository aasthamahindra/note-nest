import React from "react";
import '../css/NoteViewModal.css';

const NoteViewModal = ({note, onClose}) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{note.title}</h2>
                <p><strong>Category:</strong> {note.category}</p>
                <p><strong>Created on:</strong> {note.date} at {note.time}</p>
                <hr style={{ opacity: 0.2 }} />
                <p style={{ marginTop: '15px', lineHeight: '1.6' }}>{note.content}</p>
                <div className="modal-buttons">
                    <button onClick={onClose} className="cancel">Close</button>
                </div>
            </div>
        </div>
    );
};

export default NoteViewModal;