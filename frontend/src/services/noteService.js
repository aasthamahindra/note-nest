import axios from "axios";
const BASE = 'http://localhost:5000';

export const getNotes = () => axios.get(BASE);
export const createNote = (note) => axios.post(BASE, note);
export const updateNote = (id, note) => axios.put(`${BASE}/${id}`, note);
export const deleteNote = (id) => axios.delete(`${BASE}/${id}`);