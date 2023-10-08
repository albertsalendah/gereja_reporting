const express = require('express');
const router = express.Router();
const { db } = require('../db/connections');

router.get('/listkelompok', async (req, res) => {
    try {
        const query = "SELECT id_kelompok, jenis_kelompok "
            + "FROM kelompok "
            + "WHERE id_kelompok>0 "
            + "ORDER BY jenis_kelompok"
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

router.post('/tambah_kelompok', async (req, res) => {
    try {
        const { jenis_kelompok } = req.body;
        const query = "INSERT INTO kelompok (id_kelompok, jenis_kelompok) VALUES (null, ?)";
        db.query(query, [jenis_kelompok], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json({ message: 'Kelompok Berhasil Ditambah' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.post('/update_kelompok', async (req, res) => {
    try {
        const {id_kelompok, jenis_kelompok } = req.body;
        const query = "UPDATE kelompok SET jenis_kelompok=? WHERE id_kelompok=?";
        db.query(query, [jenis_kelompok,id_kelompok], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json({ message: 'Kelompok Berhasil Diubah' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.post('/delete_kelompok', async (req, res) => {
    try {
        const { id_kelompok } = req.body;
        const query = "DELETE FROM kelompok WHERE id_kelompok=?"
        db.query(query, [id_kelompok], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json({ message: 'Kelompok Berhasil Dihapus' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;