const express = require('express');
const router = express.Router();
const { db } = require('../db/connections');

router.post('/tambah_sidi', async (req, res) => {
    try {
        const { id_jemaat, tempat, nama_pendeta, tgl_sidi } = req.body
        const values = [id_jemaat, tempat, nama_pendeta, tgl_sidi];
        const query = "INSERT INTO sidi (id_jemaat, tempat, nama_pendeta, tgl_sidi) VALUES (?, ?, ?, ?)"

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

router.post('/get_Sidi', (req, res) => {
    try {
        const idJemaat = req.body.id_jemaat;
        const query = "SELECT id_jemaat, tempat, nama_pendeta, tgl_sidi "
            + "FROM sidi "
            + "WHERE id_jemaat= ?"
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

router.put('/delete_sidi', async (req, res) => {
    try {
        const { id_jemaat,} = req.body
        const query = "DELETE FROM sidi WHERE id_jemaat=?"
        db.query(query, id_jemaat, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json({ message: 'data sidi deleted successfully.' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.put('/update-sidi/:id', (req, res) => {
    const jemaatId = req.params.id;
    const { tempat, nama_pendeta, tgl_sidi } = req.body;

    const sql = `UPDATE sidi SET tempat=?,nama_pendeta=?,tgl_sidi=? WHERE id_jemaat=?`;

    const values = [tempat, nama_pendeta, tgl_sidi, jemaatId];

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