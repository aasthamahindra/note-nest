require('dotenv').config();
const fastify = require('fastify')({ logger: true });

fastify.register(require('@fastify/cors'), {
    origin: '*',
});

fastify.listen({ port: process.env.PORT || 5000, host: '0.0.0.0' }, async (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});