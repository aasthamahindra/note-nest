import React from "react";
import classNames from 'classnames';
import '../css/NoteCard.css';

const NoteCard = ({ note }) => {
    const category = note.category.toLowerCase();
    return (
        <div className={classNames('note-card', category)}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <div className="note-footer">
                <span>{note.time}</span>
                <span>{note.date}</span>
            </div>
        </div>
    );
};

export default NoteCard;