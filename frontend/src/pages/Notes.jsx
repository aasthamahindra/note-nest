import React, { useEffect, useState } from "react";
import Sidebar from '../components/Sidebar';
import NoteCard from '../components/NoteCard';
import AddNoteModal from "../components/AddNoteModal";
import axios from 'axios';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [showModal, setShowModal] = useState(false);

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
                    setActiveCategory(category === activeCategory ? 'All' : category)
                }}
            />
            <main>
                <div className="top-bar">
                    <h1>{activeCategory} Notes</h1>
                    <button className="add-btn" onClick={() => setShowModal(true)}>+ Add New Note</button>
                </div>
                <div className="notes-grid">
                    {filteredNotes.length > 0 ? (
                        filteredNotes.map((note) => <NoteCard key={note._id} note={note} />)
                    ): (
                        <p style={{ color: 'gray', marginTop: '30px' }}> No notes found for this category!</p>
                    )}
                </div>
                {showModal && (
                    <AddNoteModal
                        onClose={() => setShowModal(false)}
                        onNoteAdded={(newNote) => {
                        setNotes((prev) => [newNote, ...prev]);
                        setActiveCategory("All"); // optional
                        }}
                    />
                )}
            </main>
        </div>
    );
};

export default Notes;