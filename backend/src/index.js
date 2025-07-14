// disable all logs
require('dotenv').config({ quiet: true });
const path = require('path');
const { connectDB } = require('./utils/db');

const fastify = require('fastify')({ logger: true });

fastify.register(require('cors'), {
    origin: '*',
});

fastify.register(require('@fastify/autoload'), {
    dir: path.join(__dirname, 'routes'),
    prefix: '/'
});

connectDB(fastify, process.env.MONGODB_URI);

fastify.listen({ port: process.env.PORT || 5000, host: '0.0.0.0' }, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});