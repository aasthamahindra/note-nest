const { Notes } = require('../models/note.model');

const getAllNotes = async (req, reply) => {
    try {
        const notes = await Notes.find().sort({ createdAt: -1 });
        if (!notes.length) {
            return reply.code(200).send({
                message: 'No notes available!',
                data: [],
            });
        }
        return reply.code(200).send({
            message: 'success',
            data: notes
        });
    } catch (e) {
        req.log.error(`Error [get all notes]: ${e.message}`);
        reply.code(e.statusCode || 500).send({
            message: e.message,
            data: [],
        });
    }
};

const createNote = async (req, reply) => {
    try {
        const note = req.body;
        const newNote = await Notes.create(note);
        return reply.code(201).send({
            message: 'success',
            data: newNote,
        })
    } catch (e) {
        req.log.error(`Error [create note]: ${e.message}`);
        reply.code(e.statusCode || 500).send({
            message: e.message,
            data: [],
        });
    }
};

const updateNote = async (req, reply) => {
    try {
        const { id } = req.params;
        const updatedNote = await Notes.findOneAndUpdate({ _id: new Object(id) }, req.body, {
            new: true,
        });
        return reply.code(200).send({
            message: 'success',
            data: updatedNote,
        });
    } catch (e) {
        req.log.error(`Error [update note]: ${e.message}`);
        reply.code(e.statusCode || 500).send({
            message: e.message,
            data: [],
        })
    }
};

const deleteNote = async (req, reply) => {
    try {
        const { id } = req.params;
        const note = await Notes.findOne({ _id: new Object(id) });
        if (!note) {
            return reply.code(200).send({
                message: 'Note not found!',
                data: [],
            });
        }
        await Notes.findOneAndDelete(id);
        return reply.code(200).send({
            message: 'success',
            data: [],
        });
    } catch (e) {
        req.log.error(`Error [delete note]: ${e.message}`);
        reply.code(e.statusCode || 500).send({
            message: e.message,
            data: [],
        });
    }
};

module.exports = {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote,
};