const User = require('../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validRoles = ['admin', 'user', 'kasir', 'superadmin'];

const createUser = async (req, res) => {
    const { name, username, email, password, role } = req.body;
    if (!validRoles.includes(role)) {
        return res.status(400).json({ message: 'Invalid role' });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    try {
        await User.create({
            name: name,
            username: username,
            email: email,
            password: hash,
            role: role
        });
        res.json({ message: 'User Created' });
    } catch (error) {
        console.log(error);
    }
}

const loginUser = async (req, res) => {
    try {
        const users = await User.findAll({
            where: {
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, users[0].password);
        if (!match) return res.status(400).json({ msg: 'Wrong Password' });
        const userId = users[0].id;
        const name = users[0].name;
        const username = users[0].username;
        const email = users[0].email;
        const accessToken = jwt.sign({ userId, name, username, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({ userId, name, username, email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await User.update({ refresh_token: refreshToken }, {
            where: {
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            secure: true
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({ message: 'Email not found' });
    }
}

module.exports = { createUser, loginUser, };