const express = require('express');
const router = express.Router();
const { db } = require('../db/connections');

router.get('/list_pendidikan_terakhir', async (req, res) => {
    try {
        const query = "SELECT id_pendidikan, jenis_pendidikan "
            + "FROM pendidikan "
            + "ORDER BY jenis_pendidikan"
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

router.post('/tambah_pendidikan', async (req, res) => {
    try {
        const { jenis_pendidikan } = req.body;
        const query = "INSERT INTO pendidikan (id_pendidikan, jenis_pendidikan) VALUES (null, ?)";
        db.query(query, [jenis_pendidikan], (error, results) => {
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

router.post('/update_pendidikan', async (req, res) => {
    try {
        const { id_pendidikan, jenis_pendidikan } = req.body;
        const query = "UPDATE pendidikan SET jenis_pendidikan=? WHERE id_pendidikan=?";
        db.query(query, [jenis_pendidikan, id_pendidikan], (error, results) => {
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