const express = require('express');
const router = express.Router();
const { db } = require('../db/connections');

router.get('/listkota', async (req, res) => {
    try {
        const query = "SELECT k.id_kota, k.id_provinsi, k.nama_kota, p.nama_provinsi "
            + "FROM kota k "
            + "JOIN provinsi p ON (k.id_provinsi=p.id_provinsi) "
            + "ORDER BY p.nama_provinsi, k.nama_kota"
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

router.get('/listprovinsi', async (req, res) => {
    try {
        const query = "SELECT id_provinsi, nama_provinsi "
            + "FROM provinsi "
            + "ORDER BY nama_provinsi"
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

router.post('/tambah_kota', async (req, res) => {
    try {
        const { id_provinsi, nama_kota } = req.body;
        const query = "INSERT INTO kota (id_kota, id_provinsi, nama_kota) VALUES (null, ?, ?)";
        db.query(query, [id_provinsi, nama_kota], (error, results) => {
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

router.post('/update_kota', async (req, res) => {
    try {
        const { id_kota, id_provinsi, nama_kota } = req.body;
        const query = "UPDATE kota SET id_provinsi=?, nama_kota=? WHERE id_kota=?";
        db.query(query, [id_provinsi, nama_kota, id_kota], (error, results) => {
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

router.post('/tambah_provinsi', async (req, res) => {
    try {
        const { nama_provinsi } = req.body;
        const query = "INSERT INTO provinsi (id_provinsi, nama_provinsi) VALUES (null, ?)";
        db.query(query, [nama_provinsi], (error, results) => {
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

router.post('/update_provinsi', async (req, res) => {
    try {
        const { id_provinsi, nama_provinsi } = req.body;
        const query = "UPDATE provinsi SET nama_provinsi=? WHERE id_provinsi=?";
        db.query(query, [nama_provinsi, id_provinsi], (error, results) => {
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