const express = require('express');
const router = express.Router();
const { db } = require('../db/connections');

router.get('/listpekerjaan', async (req, res) => {
    try {
        const query = "SELECT id_pekerjaan, pekerjaan "
            + "FROM pekerjaan "
            + "ORDER BY pekerjaan"
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

router.post('/tambah_pekerjaan', async (req, res) => {
    try {
        const { pekerjaan } = req.body;
        const query = "INSERT INTO pekerjaan (id_pekerjaan, pekerjaan) VALUES (null, ?)";
        db.query(query, [pekerjaan], (error, results) => {
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

router.post('/update_pekerjaan', async (req, res) => {
    try {
        const { id_pekerjaan, pekerjaan } = req.body;
        const query = "UPDATE pekerjaan SET pekerjaan=? WHERE id_pekerjaan=?";
        db.query(query, [pekerjaan, id_pekerjaan], (error, results) => {
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