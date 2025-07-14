const notes = {
    body: {
        type: 'object',
        required: ['title', 'content', 'category', 'time', 'date'],
        properties: {
            title: { type: 'string' },
            content: { type: 'string' },
            category: { type: 'string', enum: ['Wishlist', 'Assignment', 'Projects', 'Work', 'Study', 'Others'] },
            time: { type: 'string' },
            date: { type: 'string' },
        }
    }
};

module.exports = { notes };