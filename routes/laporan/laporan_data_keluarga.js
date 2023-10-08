const express = require("express");
const router = express.Router();
const { db } = require("../../db/connections");

router.post("/laporan_data_keluarga", async (req, res) => {
  try {
    const { id_nama_keluarga } = req.body;
    const data_keluarga = await get_data_keluarga(id_nama_keluarga);

    res.status(200).json({
      data_keluarga,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

async function get_data_keluarga(id_nama_keluarga) {
  return new Promise((resolve, reject) => {
    const queryStatusDlmKeluarga =
      "SELECT id_skeluarga, status_keluarga " + "FROM status_keluarga";
    db.query(queryStatusDlmKeluarga, (error, list_status_dalam_keluarga) => {
      if (error) {
        reject(error);
        return;
      }
      const queryJemaat =
        "SELECT j.id_jemaat, j.nama, j.tgl_lahir, j.id_kota, CONCAT(p.nama_provinsi, ' - ', k.nama_kota), j.jenis_kelamin, j.alamat, j.baptis, j.sidi, j.tgl_bergabung, j.id_skeluarga, s.status_keluarga, j.id_kepala, kk.nama_kepala, j.id_pekerjaan, pek.pekerjaan, j.id_tingkatan, t.tingkatan, j.status_jemaat, j.id_pendidikan, pen.jenis_pendidikan, j.penghasilan, j.id_kelompok, ke.jenis_kelompok, j.id_nikah, sp.status, j.no_hp, j.foto, j.gol_darah, j.id_status_anggota_jemaat, j.suku, j.ket_asal_jemaat, j.status_data, j.created_by, j.updated_by " +
        "FROM jemaat j " +
        "JOIN kota k ON (j.id_kota=k.id_kota) " +
        "JOIN provinsi p ON (k.id_provinsi=p.id_provinsi) " +
        "JOIN status_keluarga s ON (j.id_skeluarga=s.id_skeluarga) " +
        "JOIN kepala_keluarga kk ON (j.id_kepala=kk.id_kepala) " +
        "JOIN pekerjaan pek ON (j.id_pekerjaan=pek.id_pekerjaan) " +
        "JOIN tingkatan_jemaat t ON (j.id_tingkatan=t.id_tingkatan) " +
        "JOIN pendidikan pen ON (j.id_pendidikan=pen.id_pendidikan) " +
        "JOIN kelompok ke ON (j.id_kelompok=ke.id_kelompok) " +
        "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.id_kepala = ?";
      db.query(queryJemaat, id_nama_keluarga, (error, listjemaat) => {
        if (error) {
          reject(error);
          return;
        }

        const jemaatDlmKeluarga = new Map();

        list_status_dalam_keluarga.forEach((item) => {
          const id_skeluarga = item.id_skeluarga;
          jemaatDlmKeluarga.set(id_skeluarga, []);
        });

        listjemaat.forEach((jemaat) => {
          const id_skeluarga = jemaat.id_skeluarga;
          if (jemaatDlmKeluarga.has(id_skeluarga)) {
            jemaatDlmKeluarga.get(id_skeluarga).push(jemaat);
          }
        });

        const result = list_status_dalam_keluarga.map((item) => ({
          id_skeluarga: item.id_skeluarga,
          status_keluarga: item.status_keluarga,
          jemaat: jemaatDlmKeluarga.get(item.id_skeluarga),
        }));

        resolve(result);
      });
    });
  });
}

router.get("/laporan_data_keluarga_all", async (req, res) => {
  try {
    const data_keluarga_all = await get_data_keluarga_ALL();
    res.status(200).json({
      data_keluarga_all,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

async function get_data_keluarga_ALL() {
  return new Promise((resolve, reject) => {
    const queryKK =
      "SELECT kk.id_kepala, kk.nama_kepala, kk.id_kelompok, k.jenis_kelompok, kk.alamat FROM kepala_keluarga kk JOIN kelompok k ON kk.id_kelompok = k.id_kelompok ORDER BY kk.nama_kepala";
    db.query(queryKK, (error, list_KK) => {
      if (error) {
        reject(error);
        return;
      }
      const queryJemaat =
        "SELECT j.id_jemaat, j.nama, j.tgl_lahir, j.id_kota, CONCAT(p.nama_provinsi, ' - ', k.nama_kota), j.jenis_kelamin, j.alamat, j.baptis, j.sidi, j.tgl_bergabung, j.id_skeluarga, s.status_keluarga, j.id_kepala, kk.nama_kepala, j.id_pekerjaan, pek.pekerjaan, j.id_tingkatan, t.tingkatan, j.status_jemaat, j.id_pendidikan, pen.jenis_pendidikan, j.penghasilan, j.id_kelompok, ke.jenis_kelompok, j.id_nikah, sp.status, j.no_hp, j.foto, j.gol_darah, j.id_status_anggota_jemaat, j.suku, j.ket_asal_jemaat, j.status_data, j.created_by, j.updated_by " +
        "FROM jemaat j " +
        "JOIN kota k ON (j.id_kota=k.id_kota) " +
        "JOIN provinsi p ON (k.id_provinsi=p.id_provinsi) " +
        "JOIN status_keluarga s ON (j.id_skeluarga=s.id_skeluarga) " +
        "JOIN kepala_keluarga kk ON (j.id_kepala=kk.id_kepala) " +
        "JOIN pekerjaan pek ON (j.id_pekerjaan=pek.id_pekerjaan) " +
        "JOIN tingkatan_jemaat t ON (j.id_tingkatan=t.id_tingkatan) " +
        "JOIN pendidikan pen ON (j.id_pendidikan=pen.id_pendidikan) " +
        "JOIN kelompok ke ON (j.id_kelompok=ke.id_kelompok) " +
        "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) ORDER BY j.id_skeluarga";
      db.query(queryJemaat, (error, listjemaat) => {
        if (error) {
          reject(error);
          return;
        }

        const anggotaKeluarga = new Map();

        list_KK.forEach((item) => {
          const id_kepala = item.id_kepala;
          anggotaKeluarga.set(id_kepala, []);
        });

        listjemaat.forEach((jemaat) => {
          const id_kepala = jemaat.id_kepala;
          if (anggotaKeluarga.has(id_kepala)) {
            anggotaKeluarga.get(id_kepala).push(jemaat);
          }
        });

        const listKeluarga = list_KK.map((item) => ({
          id_kepala: item.id_kepala,
          nama_keluarga: item.nama_kepala,
          jemaat: anggotaKeluarga.get(item.id_kepala)
        }));

        resolve(listKeluarga);
      });
    });
  });
}

module.exports = router;
