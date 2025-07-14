const { connect } = require('mongoose');

const connectDB = (fastify, url) => {
    try {
        connect(url);
        fastify.log.info('MongoDB connected')
    } catch (e) {
        fastify.log.error(`MongoDB connection error: ${e.message}`);
        process.exit(1);
    }
};

module.exports = { connectDB };