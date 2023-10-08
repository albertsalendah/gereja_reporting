const express = require("express");
const router = express.Router();
const { db } = require("../db/connections");

router.get("/listkk", async (req, res) => {
  try {
    const query =
      "SELECT kk.id_kepala, kk.nama_kepala, kk.id_kelompok, k.jenis_kelompok, kk.alamat FROM kepala_keluarga kk JOIN kelompok k ON kk.id_kelompok = k.id_kelompok ORDER BY kk.nama_kepala";
    db.query(query, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
        return;
      }
      res.status(200).json(results);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/tambah_kepala_keluarga", async (req, res) => {
  try {
    const { nama_kepala, id_kelompok, alamat } = req.body;
    const query =
      "INSERT INTO kepala_keluarga (id_kepala, nama_kepala, id_kelompok, alamat, no_urut_kk) " +
      "SELECT null, ?, ?, ?, IFNULL(MAX(no_urut_kk), 0) + 1 FROM kepala_keluarga WHERE id_kelompok=?";
    db.query(
      query,
      [nama_kepala, id_kelompok, alamat, id_kelompok],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error: "An error occurred" });
          return;
        }
        res
          .status(200)
          .json({ message: "Nama Keluarga registered successfully" });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/update_kepala_keluarga", async (req, res) => {
  try {
    const { nama_kepala, id_kelompok, alamat, id_kelompok_baru, id_kepala } =
      req.body;
    let query = "";
    let value = [];
    if (
      id_kelompok_baru != null &&
      id_kelompok_baru != undefined &&
      id_kelompok_baru != ""
    ) {
      query =
        "UPDATE kepala_keluarga AS kk, (SELECT IFNULL(MAX(no_urut_kk), 0) + 1 AS no_urut_kk FROM kepala_keluarga WHERE id_kelompok=?) AS kk2 " +
        "SET kk.nama_kepala=?, kk.id_kelompok=?, kk.alamat=?, kk.no_urut_kk=kk2.no_urut_kk " +
        "WHERE kk.id_kepala=?";
      value = [id_kelompok, nama_kepala, id_kelompok_baru, alamat, id_kepala];
    } else {
      query =
        "UPDATE kepala_keluarga " +
        "SET nama_kepala=?, alamat=? " +
        "WHERE id_kepala=?";
      value = [nama_kepala, alamat, id_kepala];
    }

    db.query(query, value, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
        return;
      }
      res.status(200).json({ message: value });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/delete_kepala_keluarga", async (req, res) => {
  try {
    const { id_kepala } = req.body;
    const query = "DELETE FROM kepala_keluarga WHERE id_kepala=?";
    db.query(query, [id_kepala], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
        return;
      }
      res.status(200).json({ message: "Nama Keluarga delete successfully" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
