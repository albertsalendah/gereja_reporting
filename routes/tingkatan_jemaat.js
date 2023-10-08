const express = require('express');
const router = express.Router();
const { db } = require('../db/connections');

router.get('/list_tingkatan_jemaat', async (req, res) => {
    try {
        const query = "SELECT id_tingkatan, tingkatan "
            + "FROM tingkatan_jemaat "
            + "ORDER BY tingkatan"
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

router.post('/tambah_tingkatan', async (req, res) => {
    try {
        const { tingkatan } = req.body;
        const query = "INSERT INTO tingkatan_jemaat (id_tingkatan, tingkatan) VALUES (null, ?)";
        db.query(query, [tingkatan], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json({ message: 'Tinggkatan Jemaat Berhasil Ditambah' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.post('/update_tingkatan', async (req, res) => {
    try {
        const {id_tingkatan, tingkatan } = req.body;
        const query = "UPDATE tingkatan_jemaat SET tingkatan=? WHERE id_tingkatan=?";
        db.query(query, [tingkatan,id_tingkatan], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json({ message: 'Tingkatan Jemaat Berhasil Diubah' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;