const express = require('express');
const router = express.Router();
const { db } = require('../db/connections');

router.get('/list_jabatan', async (req, res) => {
    try {
        const query = "SELECT id_jabatan, jabatan FROM jabatan"
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

router.post('/tambah_jabatan', async (req, res) => {
    try {
        const { jabatan } = req.body;
        const query = "INSERT INTO jabatan (id_jabatan, jabatan) VALUES (null, ?)";
        db.query(query, [jabatan], (error, results) => {
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

router.post('/update_jabatan', async (req, res) => {
    try {
        const { id_jabatan, jabatan } = req.body;
        const query = "UPDATE jabatan SET jabatan=? WHERE id_jabatan=?";
        db.query(query, [jabatan, id_jabatan], (error, results) => {
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