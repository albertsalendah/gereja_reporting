const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { db } = require('../db/connections');

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const query = 'SELECT * FROM user WHERE username = ?';
        db.query(query, [username], async (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            const user = results[0];
            if (!user) {
                res.status(401).json({ error: 'Invalid credentials' });
                return;
            }
            const isPasswordValid = await bcrypt.compare(password, user.hash_password);
            if (!isPasswordValid) {
                res.status(401).json({ error: 'Invalid credentials' });
                return;
            }
            
            const token = jwt.sign({ username: user.username }, 'secret_key',{ expiresIn: (60*30)}); //(60*30) Change 'secret_key' 1h
            res.status(200).json({ token,user });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;