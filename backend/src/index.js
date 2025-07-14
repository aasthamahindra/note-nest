// disable all logs
require('dotenv').config({ quiet: true });
const { connectDB } = require('./utils/db');

const fastify = require('fastify')({ logger: true });

fastify.register(require('cors'), {
    origin: '*',
});

connectDB(fastify, process.env.MONGODB_URI);

fastify.listen({ port: process.env.PORT || 5000, host: '0.0.0.0' }, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});