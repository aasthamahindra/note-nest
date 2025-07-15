import React, { useState } from 'react';
import '../css/AddNoteModal.css';
import axios from 'axios';

const categories = ['Wishlist', 'Assignment', 'Work', 'Study', 'Others'];

const AddNoteModal = ({ onClose, onNoteAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
  });

  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000', formData);
      onNoteAdded(res.data.data);
      onClose();
    } catch (error) {
      console.error('Failed to add note:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Note</h2>
        <form onSubmit={handleSubmit}>
          <label className={activeField === 'title' ? 'active' : ''}>
            Title
            <input
              type="text"
              name="title"
              value={formData.title}
              onFocus={() => setActiveField('title')}
              onBlur={() => setActiveField(null)}
              onChange={handleChange}
              required
            />
          </label>

          <label className={activeField === 'content' ? 'active' : ''}>
            Description
            <textarea
              name="content"
              value={formData.content}
              onFocus={() => setActiveField('content')}
              onBlur={() => setActiveField(null)}
              onChange={handleChange}
              required
            />
          </label>

          <label className={activeField === 'category' ? 'active' : ''}>
            Category
            <br/>
            <select
              name="category"
              value={formData.category}
              onFocus={() => setActiveField('category')}
              onBlur={() => setActiveField(null)}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </label>

          <div className="modal-buttons">
            <button type="submit">Add Note</button>
            <button type="button" onClick={onClose} className="cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNoteModal;
