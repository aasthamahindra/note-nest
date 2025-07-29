const bcrypt = require('bcrypt');
const { Users } = require('../models/user.model');

const register = async (req, reply) => {
    try {
        const { name, email, password } = req.body;

        const existing = await Users.findOne({ email });
        if (existing) {
            return reply.code(400).send({
                message: 'User already exists!',
                data: [],
            });
        };

        const hashed = await bcrypt.hash(password, 10);
        const user = new Users({ name, email, password: hashed });
        // await user.save();

        console.log(req.server)
        const token = req.jwt.sign({
            id: user._id, name, email: user.email,
        });
        reply.send({ token });
    } catch (e) {
        reply.code(500).send({
            message: e.message,
            data: [],
        });
    }
};

const login = async (req, reply) => {
    try {
        const { email, password } = req.body;

        const user = await Users.findOne({ email });

        if (!user || (await bcrypt.compare(password, user.password))) {
            return reply.code(401).send({
                message: 'Invalid credentials',
                data: [],
            });
        }
        const token = req.jwt.sign({
            id: user._id, email: user.email,
        });
        reply.send({ token });
    } catch (e) {
        reply.code(500).send({
            message: e.message,
            data: [],
        });
    }
};

module.exports = {
    register,
    login
}