import React from "react";
import classNames from 'classnames';
import '../css/NoteCard.css';
import formatDateAndTime from "../utils/format";

const NoteCard = ({ note, onEdit, onDelete, onView }) => {
    const category = note.category.toLowerCase();

    const handleCardClick = (e) => {
        if (e.target.closest('button')) return;
        onView(note);
    }
    const { date, time } = formatDateAndTime(note.createdAt);
    return (
        <div className={classNames('note-card', category)} onClick={handleCardClick}>
            <h3>{note.title}</h3>
            <div className="note-footer">
                <span>{date} | {time}</span>

                <div className="note-actions">
                <button onClick={(e) => { e.stopPropagation(); onEdit(note); }}>Edit</button>
                <button onClick={(e) => { e.stopPropagation(); onDelete(note._id); }}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default NoteCard;