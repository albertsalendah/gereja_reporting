const express = require('express');
const router = express.Router();
const { db } = require('../db/connections');

router.get('/list_periode', async (req, res) => {
    try {
        const query = "SELECT id_periode, periode_awal, periode_akhir FROM periode ORDER BY periode_awal DESC"
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

router.post('/tambah_periode', async (req, res) => {
    try {
        const { periode_awal, periode_akhir } = req.body;
        const query = "INSERT INTO periode (id_periode, periode_awal, periode_akhir) VALUES (null, ?, ?)";
        db.query(query, [periode_awal, periode_akhir], (error, results) => {
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

router.post('/update_periode', async (req, res) => {
    try {
        const { id_periode, periode_awal, periode_akhir } = req.body;
        const query = "UPDATE periode SET periode_awal=?, periode_akhir=? WHERE id_periode=?";
        db.query(query, [periode_awal, periode_akhir, id_periode], (error, results) => {
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