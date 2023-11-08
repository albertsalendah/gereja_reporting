const express = require('express');
const router = express.Router();
const { db } = require('../db/connections');

router.get('/get_total_kepala_keluarga', async (req, res) => {
    try {
        const query = "SELECT j.id_jemaat, j.nama, j.tgl_lahir, j.id_kota, CONCAT(p.nama_provinsi, ' - ', k.nama_kota), j.jenis_kelamin, j.alamat, j.baptis, j.sidi, j.tgl_bergabung, j.id_skeluarga, s.status_keluarga, j.id_kepala, kk.nama_kepala, j.id_pekerjaan, pek.pekerjaan, j.id_tingkatan, t.tingkatan, j.status_jemaat, j.id_pendidikan, pen.jenis_pendidikan, j.penghasilan, j.id_kelompok, ke.jenis_kelompok, j.id_nikah, sp.status, j.no_hp, j.foto, j.gol_darah, j.id_status_anggota_jemaat, j.suku, j.ket_asal_jemaat, j.status_data, j.created_by, j.updated_by "
        + "FROM jemaat j "
        + "JOIN kota k ON (j.id_kota=k.id_kota) "
        + "JOIN provinsi p ON (k.id_provinsi=p.id_provinsi) "
        + "JOIN status_keluarga s ON (j.id_skeluarga=s.id_skeluarga) "
        + "JOIN kepala_keluarga kk ON (j.id_kepala=kk.id_kepala) "
        + "JOIN pekerjaan pek ON (j.id_pekerjaan=pek.id_pekerjaan) "
        + "JOIN tingkatan_jemaat t ON (j.id_tingkatan=t.id_tingkatan) "
        + "JOIN pendidikan pen ON (j.id_pendidikan=pen.id_pendidikan) "
        + "JOIN kelompok ke ON (j.id_kelompok=ke.id_kelompok) "
        + "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1 AND j.id_skeluarga = 2"
        db.query(query, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json(results.length);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});
router.get('/get_total_laki_laki', async (req, res) => {
    try {
        //const query = "SELECT COUNT(*) FROM jemaat WHERE jenis_kelamin = 'L'"
        const query = "SELECT j.id_jemaat, j.nama, j.tgl_lahir, j.id_kota, CONCAT(p.nama_provinsi, ' - ', k.nama_kota), j.jenis_kelamin, j.alamat, j.baptis, j.sidi, j.tgl_bergabung, j.id_skeluarga, s.status_keluarga, j.id_kepala, kk.nama_kepala, j.id_pekerjaan, pek.pekerjaan, j.id_tingkatan, t.tingkatan, j.status_jemaat, j.id_pendidikan, pen.jenis_pendidikan, j.penghasilan, j.id_kelompok, ke.jenis_kelompok, j.id_nikah, sp.status, j.no_hp, j.foto, j.gol_darah, j.id_status_anggota_jemaat, j.suku, j.ket_asal_jemaat, j.status_data, j.created_by, j.updated_by "
        + "FROM jemaat j "
        + "JOIN kota k ON (j.id_kota=k.id_kota) "
        + "JOIN provinsi p ON (k.id_provinsi=p.id_provinsi) "
        + "JOIN status_keluarga s ON (j.id_skeluarga=s.id_skeluarga) "
        + "JOIN kepala_keluarga kk ON (j.id_kepala=kk.id_kepala) "
        + "JOIN pekerjaan pek ON (j.id_pekerjaan=pek.id_pekerjaan) "
        + "JOIN tingkatan_jemaat t ON (j.id_tingkatan=t.id_tingkatan) "
        + "JOIN pendidikan pen ON (j.id_pendidikan=pen.id_pendidikan) "
        + "JOIN kelompok ke ON (j.id_kelompok=ke.id_kelompok) "
        + "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1 AND j.jenis_kelamin = 'L'"
        db.query(query, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json(results.length);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});
router.get('/get_total_perempuan', async (req, res) => {
    try {
        //const query = "SELECT COUNT(*) FROM jemaat WHERE jenis_kelamin = 'P'"
        const query = "SELECT j.id_jemaat, j.nama, j.tgl_lahir, j.id_kota, CONCAT(p.nama_provinsi, ' - ', k.nama_kota), j.jenis_kelamin, j.alamat, j.baptis, j.sidi, j.tgl_bergabung, j.id_skeluarga, s.status_keluarga, j.id_kepala, kk.nama_kepala, j.id_pekerjaan, pek.pekerjaan, j.id_tingkatan, t.tingkatan, j.status_jemaat, j.id_pendidikan, pen.jenis_pendidikan, j.penghasilan, j.id_kelompok, ke.jenis_kelompok, j.id_nikah, sp.status, j.no_hp, j.foto, j.gol_darah, j.id_status_anggota_jemaat, j.suku, j.ket_asal_jemaat, j.status_data, j.created_by, j.updated_by "
        + "FROM jemaat j "
        + "JOIN kota k ON (j.id_kota=k.id_kota) "
        + "JOIN provinsi p ON (k.id_provinsi=p.id_provinsi) "
        + "JOIN status_keluarga s ON (j.id_skeluarga=s.id_skeluarga) "
        + "JOIN kepala_keluarga kk ON (j.id_kepala=kk.id_kepala) "
        + "JOIN pekerjaan pek ON (j.id_pekerjaan=pek.id_pekerjaan) "
        + "JOIN tingkatan_jemaat t ON (j.id_tingkatan=t.id_tingkatan) "
        + "JOIN pendidikan pen ON (j.id_pendidikan=pen.id_pendidikan) "
        + "JOIN kelompok ke ON (j.id_kelompok=ke.id_kelompok) "
        + "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1 AND j.jenis_kelamin = 'P'"
        jenis_kelamin = 'L'
        db.query(query, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json(results.length);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.get('/get_total_diterima', async (req, res) => {
    try {
        //const query = "SELECT COUNT(*) FROM jemaat WHERE status_data='Diterima'"
        const query = "SELECT j.id_jemaat, j.nama, j.tgl_lahir, j.id_kota, CONCAT(p.nama_provinsi, ' - ', k.nama_kota), j.jenis_kelamin, j.alamat, j.baptis, j.sidi, j.tgl_bergabung, j.id_skeluarga, s.status_keluarga, j.id_kepala, kk.nama_kepala, j.id_pekerjaan, pek.pekerjaan, j.id_tingkatan, t.tingkatan, j.status_jemaat, j.id_pendidikan, pen.jenis_pendidikan, j.penghasilan, j.id_kelompok, ke.jenis_kelompok, j.id_nikah, sp.status, j.no_hp, j.foto, j.gol_darah, j.id_status_anggota_jemaat, j.suku, j.ket_asal_jemaat, j.status_data, j.created_by, j.updated_by "
        + "FROM jemaat j "
        + "JOIN kota k ON (j.id_kota=k.id_kota) "
        + "JOIN provinsi p ON (k.id_provinsi=p.id_provinsi) "
        + "JOIN status_keluarga s ON (j.id_skeluarga=s.id_skeluarga) "
        + "JOIN kepala_keluarga kk ON (j.id_kepala=kk.id_kepala) "
        + "JOIN pekerjaan pek ON (j.id_pekerjaan=pek.id_pekerjaan) "
        + "JOIN tingkatan_jemaat t ON (j.id_tingkatan=t.id_tingkatan) "
        + "JOIN pendidikan pen ON (j.id_pendidikan=pen.id_pendidikan) "
        + "JOIN kelompok ke ON (j.id_kelompok=ke.id_kelompok) "
        + "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1 AND j.status_data='Diterima'"
        db.query(query, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json(results.length);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.get('/get_total_tunggu', async (req, res) => {
    try {
        //const query = "SELECT COUNT(*) FROM jemaat WHERE status_data='Menunggu Verifikasi'"
        const query = "SELECT j.id_jemaat, j.nama, j.tgl_lahir, j.id_kota, CONCAT(p.nama_provinsi, ' - ', k.nama_kota), j.jenis_kelamin, j.alamat, j.baptis, j.sidi, j.tgl_bergabung, j.id_skeluarga, s.status_keluarga, j.id_kepala, kk.nama_kepala, j.id_pekerjaan, pek.pekerjaan, j.id_tingkatan, t.tingkatan, j.status_jemaat, j.id_pendidikan, pen.jenis_pendidikan, j.penghasilan, j.id_kelompok, ke.jenis_kelompok, j.id_nikah, sp.status, j.no_hp, j.foto, j.gol_darah, j.id_status_anggota_jemaat, j.suku, j.ket_asal_jemaat, j.status_data, j.created_by, j.updated_by "
        + "FROM jemaat j "
        + "JOIN kota k ON (j.id_kota=k.id_kota) "
        + "JOIN provinsi p ON (k.id_provinsi=p.id_provinsi) "
        + "JOIN status_keluarga s ON (j.id_skeluarga=s.id_skeluarga) "
        + "JOIN kepala_keluarga kk ON (j.id_kepala=kk.id_kepala) "
        + "JOIN pekerjaan pek ON (j.id_pekerjaan=pek.id_pekerjaan) "
        + "JOIN tingkatan_jemaat t ON (j.id_tingkatan=t.id_tingkatan) "
        + "JOIN pendidikan pen ON (j.id_pendidikan=pen.id_pendidikan) "
        + "JOIN kelompok ke ON (j.id_kelompok=ke.id_kelompok) "
        + "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1 AND j.status_data='Menunggu Verifikasi'"
        db.query(query, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json(results.length);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.get('/get_total_ditolak', async (req, res) => {
    try {
        //const query = "SELECT COUNT(*) FROM jemaat WHERE status_data='Ditolak'"
        const query = "SELECT j.id_jemaat, j.nama, j.tgl_lahir, j.id_kota, CONCAT(p.nama_provinsi, ' - ', k.nama_kota), j.jenis_kelamin, j.alamat, j.baptis, j.sidi, j.tgl_bergabung, j.id_skeluarga, s.status_keluarga, j.id_kepala, kk.nama_kepala, j.id_pekerjaan, pek.pekerjaan, j.id_tingkatan, t.tingkatan, j.status_jemaat, j.id_pendidikan, pen.jenis_pendidikan, j.penghasilan, j.id_kelompok, ke.jenis_kelompok, j.id_nikah, sp.status, j.no_hp, j.foto, j.gol_darah, j.id_status_anggota_jemaat, j.suku, j.ket_asal_jemaat, j.status_data, j.created_by, j.updated_by "
        + "FROM jemaat j "
        + "JOIN kota k ON (j.id_kota=k.id_kota) "
        + "JOIN provinsi p ON (k.id_provinsi=p.id_provinsi) "
        + "JOIN status_keluarga s ON (j.id_skeluarga=s.id_skeluarga) "
        + "JOIN kepala_keluarga kk ON (j.id_kepala=kk.id_kepala) "
        + "JOIN pekerjaan pek ON (j.id_pekerjaan=pek.id_pekerjaan) "
        + "JOIN tingkatan_jemaat t ON (j.id_tingkatan=t.id_tingkatan) "
        + "JOIN pendidikan pen ON (j.id_pendidikan=pen.id_pendidikan) "
        + "JOIN kelompok ke ON (j.id_kelompok=ke.id_kelompok) "
        + "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1 AND j.status_data='Ditolak'"
        db.query(query, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json(results.length);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.get('/get_total_pengajuan_ulang', async (req, res) => {
    try {
        //const query = "SELECT COUNT(*) FROM jemaat WHERE status_data='Pengajuan Ulang'"
        const query = "SELECT j.id_jemaat, j.nama, j.tgl_lahir, j.id_kota, CONCAT(p.nama_provinsi, ' - ', k.nama_kota), j.jenis_kelamin, j.alamat, j.baptis, j.sidi, j.tgl_bergabung, j.id_skeluarga, s.status_keluarga, j.id_kepala, kk.nama_kepala, j.id_pekerjaan, pek.pekerjaan, j.id_tingkatan, t.tingkatan, j.status_jemaat, j.id_pendidikan, pen.jenis_pendidikan, j.penghasilan, j.id_kelompok, ke.jenis_kelompok, j.id_nikah, sp.status, j.no_hp, j.foto, j.gol_darah, j.id_status_anggota_jemaat, j.suku, j.ket_asal_jemaat, j.status_data, j.created_by, j.updated_by "
        + "FROM jemaat j "
        + "JOIN kota k ON (j.id_kota=k.id_kota) "
        + "JOIN provinsi p ON (k.id_provinsi=p.id_provinsi) "
        + "JOIN status_keluarga s ON (j.id_skeluarga=s.id_skeluarga) "
        + "JOIN kepala_keluarga kk ON (j.id_kepala=kk.id_kepala) "
        + "JOIN pekerjaan pek ON (j.id_pekerjaan=pek.id_pekerjaan) "
        + "JOIN tingkatan_jemaat t ON (j.id_tingkatan=t.id_tingkatan) "
        + "JOIN pendidikan pen ON (j.id_pendidikan=pen.id_pendidikan) "
        + "JOIN kelompok ke ON (j.id_kelompok=ke.id_kelompok) "
        + "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1 AND j.status_data='Pengajuan Ulang'"
        db.query(query, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json(results.length);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;