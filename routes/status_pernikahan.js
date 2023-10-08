const express = require('express');
const router = express.Router();
const { db } = require('../db/connections');

router.get('/list_status_pernaikahan', async (req, res) => {
    try {
        const query = "SELECT id_nikah, status "
            + "FROM status_pernikahan "
            + "ORDER BY status"
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

router.post('/tambah_status_pernaikahan', async (req, res) => {
    try {
        const { status } = req.body;
        const query = "INSERT INTO status_pernikahan (id_nikah, status) VALUES (null, ?)";
        db.query(query, [status], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json({ message: 'Data Berhasil Ditambah' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.post('/update_status_pernaikahan', async (req, res) => {
    try {
        const { id_nikah, status } = req.body;
        const query = "UPDATE status_pernikahan SET status=? WHERE id_nikah=?";
        db.query(query, [status, id_nikah], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json({ message: 'Data Berhasil Diubah' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;