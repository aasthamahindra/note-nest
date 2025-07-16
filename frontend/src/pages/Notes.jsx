import React, { useEffect, useState } from "react";
import Sidebar from '../components/Sidebar';
import NoteCard from '../components/NoteCard';
import AddNoteModal from "../components/AddNoteModal";
import NoteViewModal from "../components/NoteView";
import axios from 'axios';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [showModal, setShowModal] = useState(false);
    const [editingNote, setEditingNote] = useState(null);
    const [viewingNote, setViewingNote] = useState(null);

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

    const handleAddNewClick = () => {
        setEditingNote(null);
        setViewingNote(null);
        setShowModal(true);
    }

    const handleNotSaved = (savedNote) => {
        if (editingNote) {
            setNotes((prev) =>
                prev.map((n) => (n._id === savedNote._id ? savedNote : n))
            );
        } else {
            setNotes((prev) => [savedNote, ...prev]);
        }

        setEditingNote(null);
        setShowModal(false);
    };

    const handleEdit = (note) => {
        setEditingNote(note);
        setViewingNote(null);
        setShowModal(true);
    };

    const handleDelete = async(id) => {
        const confirmed = window.confirm('Are you sure you want to delete this note?');
        if (!confirmed) return;

        try {
            await axios.delete(`http://localhost:5000/${id}`);
            setNotes((prev) => prev.filter((n) => n._id !== id));
        } catch (error) {
            console.error(`Error deleting note: ${error}`)
        }
    };

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
                    <button className="add-btn" onClick={handleAddNewClick}>+ Add New Note</button>
                </div>
                <div className="notes-grid">
                    {filteredNotes.length > 0 ? (
                        filteredNotes.map((note) => (
                            <NoteCard
                                key={note._id}
                                note={note}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                onView={(n) => setViewingNote(n)}
                            />
                        ))
                    ): (
                        <p style={{ color: 'gray', marginTop: '30px' }}> No notes found for this category!</p>
                    )}
                </div>

                {showModal && (
                    <AddNoteModal
                        onClose={() => {
                            setEditingNote(null);
                            setShowModal(false);
                            setViewingNote(null);
                        }}
                        onNoteAdded={handleNotSaved}
                        initialData={editingNote}
                    />
                )}
                {viewingNote && (
                    <NoteViewModal
                        note={viewingNote}
                        onClose={() => setViewingNote(null)}
                    />
                )}
            </main>
        </div>
    );
};

export default Notes;