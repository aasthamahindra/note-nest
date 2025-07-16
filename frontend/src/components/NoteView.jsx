import React from "react";
import '../css/NoteViewModal.css';
import formatDateAndTime from "../utils/format";

const NoteViewModal = ({note, onClose}) => {
    const { date, time } = formatDateAndTime(note.createdAt);
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{note.title}</h2>
                <p>{date} | {time}</p>
                <div className={`modal-header`}>
                    <span className={`category-badge ${note.category.toLowerCase()}`}>
                        {note.category}
                    </span>
                </div>
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