const notes = {
    body: {
        type: 'object',
        required: ['title', 'content', 'category'],
        properties: {
            title: { type: 'string' },
            content: { type: 'string' },
            category: { type: 'string', enum: ['Wishlist', 'Assignment', 'Projects', 'Work', 'Study', 'Others'] },
        }
    }
};

module.exports = { notes };