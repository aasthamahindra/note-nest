import React, { useEffect, useState } from "react";
import Sidebar from '../components/Sidebar';
import NoteCard from '../components/NoteCard';
import axios from 'axios';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');

    const fetchNotes = async () => {
        const res = await axios.get('http://localhost:5000');
        setNotes(res.data.data);
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const filteredNotes = activeCategory === 'All' || !activeCategory
        ? notes
        : notes.filter((note) => note.category === activeCategory);

    return (
        <div className="app-container">
            <Sidebar
                activeCategory={activeCategory}
                onCategorySelect={(category) => {
                    setActiveCategory(category === activeCategory ? null : category)
                }}
            />
            <main>
                <div className="top-bar">
                    <h1>All Notes</h1>
                    <button className="add-btn">Add New Note</button>
                </div>
                <div className="notes-grid">
                    {filteredNotes.length > 0 ? (
                        filteredNotes.map((note) => <NoteCard key={note._id} note={note} />)
                    ): (
                        <p style={{ color: 'gray', marginTop: '30px' }}> No notes found for this category!</p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Notes;