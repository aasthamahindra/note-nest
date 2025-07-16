import React from "react";
import classNames from 'classnames';
import '../css/NoteCard.css';

const NoteCard = ({ note, onEdit, onDelete, onView }) => {
    const category = note.category.toLowerCase();

    const handleCardClick = (e) => {
        if (e.target.closest('button')) return;
        onView(note);
    }
    return (
        <div className={classNames('note-card', category)} onClick={handleCardClick}>
            <h3>{note.title}</h3>
            {/* <p>{note.content}</p> */}
            <div className="note-footer">
                <span>{note.date} | {note.time}</span>

                <div className="note-actions">
                <button onClick={(e) => { e.stopPropagation(); onEdit(note); }}>Edit</button>
                <button onClick={(e) => { e.stopPropagation(); onDelete(note._id); }}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default NoteCard;