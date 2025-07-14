import React from "react";
import '../css/Sidebar.css';

const categories = [
    { name: 'Wishlist', color: 'wishlist' },
    { name: 'Assignment', color: 'assignment' },
    { name: 'Projects', color: 'projects' },
    { name: 'Work', color: 'Work' },
    { name: 'Study', color: 'study' },
    { name: 'Others', color: 'others' },
];

const Sidebar = () => (
    <div className="sidebar">
        <h2>Aastha Mahindra</h2>
        <ul>
            {categories.map(({ name, color }) => (
                <li key={name}>
                    <span className={`dot ${color}`}/>
                    {name}
                </li>
            ))}
        </ul>
    </div>
);

export default Sidebar;