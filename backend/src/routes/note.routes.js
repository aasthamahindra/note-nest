const { getAllNotes, createNote, updateNote, deleteNote} = require('../controllers/note.controller');
const { notes } = require('../validation');

module.exports = (fastify) => {
    fastify.get('/',getAllNotes);
    fastify.post('/', { schema: notes }, createNote);
    fastify.put('/:id', updateNote);
    fastify.delete('/:id', deleteNote);
};