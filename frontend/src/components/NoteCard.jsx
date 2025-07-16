import React from "react";
import classNames from 'classnames';
import '../css/NoteCard.css';

const NoteCard = ({ note, onEdit, onDelete }) => {
    const category = note.category.toLowerCase();
    return (
        <div className={classNames('note-card', category)}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <div className="note-footer">
                <span>{note.date} | {note.time}</span>

                <div className="note-actions">
                    <button onClick={() => onEdit(note)}>Edit</button>
                    <button onClick={() => onDelete(note._id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default NoteCard;