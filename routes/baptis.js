const express = require('express');
const router = express.Router();
const { db } = require('../db/connections');

router.post('/tambah_baptis', async (req, res) => {
    try {
        const { id_jemaat, tempat, nama_pendeta, tgl_baptis } = req.body
        const values = [id_jemaat, tempat, nama_pendeta, tgl_baptis];
        const query = "INSERT INTO baptis (id_jemaat, tempat, nama_pendeta, tgl_baptis) VALUES (?, ?, ?, ?)"
        db.query(query, values, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json(results['message']);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.post('/get_Baptis', (req, res) => {
    try {
        const idJemaat = req.body.id_jemaat;
        const query = "SELECT id_jemaat, tempat, nama_pendeta, tgl_baptis "
            + "FROM baptis "
            + "WHERE id_jemaat=?"
        db.query(query, idJemaat, (error, results) => {
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

router.put('/delete_baptis', async (req, res) => {
    try {
        const { id_jemaat,} = req.body
        const query = "DELETE FROM baptis WHERE id_jemaat=?"
        db.query(query, id_jemaat, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json({ message: 'data baptis deleted successfully.' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.put('/update-baptis/:id', (req, res) => {
    const jemaatId = req.params.id;
    const { tempat, nama_pendeta, tgl_baptis } = req.body;

    const sql = `UPDATE baptis SET tempat=?,nama_pendeta=?,tgl_baptis=? WHERE id_jemaat=?`;

    const values = [tempat, nama_pendeta, tgl_baptis, jemaatId];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while updating the jemaat data.' });
        } else {
            res.status(200).json({ message: 'Jemaat data updated successfully.' });
        }
    });
});

module.exports = router;