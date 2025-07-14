const { getAllNotes, createNote, updateNote, deleteNote} = require('../controllers/note.controller');

module.exports = (fastify) => {
    fastify.get('/', getAllNotes);
    fastify.post('/', createNote);
    fastify.put('/:id', updateNote);
    fastify.delete('/:id', deleteNote);
};