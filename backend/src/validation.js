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

const registerUser = {
    body: {
        type: 'object',
        required: ['name', 'email', 'password'],
        properties: {
            name: { type: 'string' },
            email: { type: 'string' },
            password: { type: 'string'},
        }
    }
};

module.exports = {
    notes,
    registerUser,
};