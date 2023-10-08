const express = require('express');
const router = express.Router();
const { db } = require('../db/connections');

router.get('/list_data_majelis', async (req, res) => {
    try {
        const query = "SELECT k.id_kepengurusan, ja.jabatan, p.periode_awal, p.periode_akhir, k.id_jemaat, j.nama, k.id_periode "
        + "FROM kepengurusan k "
        + "JOIN jabatan ja ON k.id_jabatan=ja.id_jabatan "
        + "JOIN periode p ON k.id_periode=p.id_periode "
        + "JOIN jemaat j ON k.id_jemaat=j.id_jemaat "
        + "ORDER BY p.periode_awal DESC, ja.jabatan, j.nama "
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

router.post('/tambah_data_majelis', async (req, res) => {
    try {
        const { id_jabatan, id_periode, id_jemaat } = req.body;
        const query = "INSERT INTO kepengurusan (id_kepengurusan, id_jabatan, id_periode, id_jemaat) VALUES (null, ?, ?, ?)";
        db.query(query, [id_jabatan, id_periode, id_jemaat], (error, results) => {
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

router.post('/update_data_majelis', async (req, res) => {
    try {
        const { id_jabatan, id_periode, id_jemaat,id_kepengurusan } = req.body;
        const query = "UPDATE kepengurusan SET id_jabatan=?, id_periode=?, id_jemaat=? WHERE id_kepengurusan=?";
        db.query(query, [id_jabatan, id_periode, id_jemaat,id_kepengurusan], (error, results) => {
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