const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../Database/user.js');

require('dotenv').config();

const Home = async (req, res) => {
    res.send('This is home from controller');
};

const signup = async (req, res) => {
    try {

        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message: 'Username, Email and Password are required',
                success: false
            });
        }

        const user = await UserModel.findOne({ email });

        if (user) {
            return res.status(409).json({
                message: 'User already exists',
                success: false
            });
        }

        const hashpassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            username,
            email,
            password: hashpassword
        });

        await newUser.save();

        return res.status(201).json({
            message: 'Signup successfully',
            success: true
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};

const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: 'Email and Password are required'
            });
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        const ismatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!ismatch) {
            return res.status(401).json({
                message: 'Invalid password'
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.SECRET_KEY,
            {
                expiresIn: '1d'
            }
        );

        return res.status(200).json({
            message: 'Login successful',
            success: true,
            token
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            message: 'Internal server error'
        });
    }
};

const product = async (req, res) => {
    try {

        return res.status(200).json({
            message: 'Protected Route Access Granted ✅',
            user: req.user
        });

    } catch (err) {

        return res.status(500).json({
            message: 'Internal server error'
        });
    }
};

module.exports = {
    Home,
    signup,
    login,
    product
};