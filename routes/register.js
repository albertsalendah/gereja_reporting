const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { db } = require('../db/connections');

router.post('/register', async (req, res) => {
    try {
        const { username, password, level } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO user (username, password, hash_password, level) VALUES (?, ?, ?, ?)';
        db.query(query, [username, password, hashedPassword, level], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json({ message: 'User registered successfully' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.post('/update_user', async (req, res) => {
    try {
        const { new_username, password, level, username } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = "UPDATE user SET username=?, password=?, hash_password=?, level=? WHERE username=?"
        db.query(query, [new_username, password, hashedPassword, level, username], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json({ message: 'User registered successfully' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.post('/delete_user', async (req, res) => {
    try {
        const { username } = req.body;
        const query = "DELETE FROM user WHERE username=?"
        db.query(query, [username], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json({ message: 'User delete successfully' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.get('/list_user', async (req, res) => {
    try {
        const query = 'SELECT * FROM user';
        db.query(query, async (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            const user = results;
            res.status(200).json(user);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;
