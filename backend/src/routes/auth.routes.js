const { register, login } = require("../controllers/auth.controller");
const { registerUser } = require('../validation');

module.exports = (fastify) => {
    fastify.post('/register', { schema: registerUser }, register);
    fastify.post('/login', login);
};