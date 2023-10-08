const express = require('express');
const router = express.Router();
const { db } = require('../db/connections');

router.get('/listsuku', async (req, res) => {
    try {
        const query = "SELECT * FROM `suku`"
        db.query(query, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json(results);
        });
        //res.status(500).json({ error: 'Something went wrong!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.post('/tambah_suku', async (req, res) => {
    try {
        const { nama_suku } = req.body;
        const query = "INSERT INTO suku (id_suku, nama_suku) VALUES (null, ?)";
        db.query(query, [nama_suku], (error, results) => {
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

router.post('/update_suku', async (req, res) => {
    try {
        const { id_suku, nama_suku } = req.body;
        const query = "UPDATE suku SET nama_suku=? WHERE id_suku=?";
        db.query(query, [nama_suku, id_suku], (error, results) => {
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