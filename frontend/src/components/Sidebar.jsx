import React from "react";
import '../css/Sidebar.css';

const categories = [
    { name: 'All', color: 'all' },
    { name: 'Wishlist', color: 'wishlist' },
    { name: 'Assignment', color: 'assignment' },
    { name: 'Work', color: 'work' },
    { name: 'Study', color: 'study' },
    { name: 'Others', color: 'others' },
];

const Sidebar = ({ activeCategory, onCategorySelect }) => (
    <aside className="sidebar">
        <h2>Aastha Mahindra</h2>
        <ul>
            {categories.map(({ name, color }) => (
                <li
                    key={name}
                    onClick={() => onCategorySelect(name)}
                    className={`category-item ${activeCategory === name ? 'active' : ''}`}
                >
                    <span className={`dot ${color}`}/>
                    {name}
                </li>
            ))}
        </ul>
    </aside>
);

export default Sidebar;