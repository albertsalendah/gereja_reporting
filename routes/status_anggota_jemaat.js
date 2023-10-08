const express = require('express');
const router = express.Router();
const { db } = require('../db/connections');

router.get('/liststatusanggotajemaat', async (req, res) => {
    try {
        const query = "SELECT * FROM `status_anggota_jemaat`"
        db.query(query, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json(results);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;