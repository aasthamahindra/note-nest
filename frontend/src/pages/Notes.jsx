import React, { useEffect, useState } from "react";
import Sidebar from '../components/Sidebar';
import NoteCard from '../components/NoteCard';
import axios from 'axios';

const Notes = () => {
    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        const res = await axios.get(`${import.meta.env.API_URL}`);
        setNotes(res);
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div className="app-container">
            <Sidebar/>
            <main>
                <div className="top-bar">
                    <h1>All Notes</h1>
                    <button className="add-btn">Add New Note</button>
                </div>
                <div className="notes-grid">
                    {notes.map((note) => (
                        <NoteCard key={note._id} note={note} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Notes;