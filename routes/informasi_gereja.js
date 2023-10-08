const express = require("express");
const router = express.Router();
const { db } = require("../db/connections");

router.get("/list_informasi_gereja", async (req, res) => {
  try {
    const query =
      "SELECT * FROM tb_informasi_gereja ORDER BY id_gereja DESC LIMIT 1";
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

router.post("/tambah_informasi_gereja", async (req, res) => {
  try {
    const {
      nama_jemaat,
      wilayah_pelayanan,
      tgl_berdiri,
      status_jemaat,
      status_kepemilikan_tanah,
      alamat_lengkap,
      no_tlp,
      email,
      luas_area_gereja,
      luas_area_bangunan,
      kondisi_bangunan_gereja,
    } = req.body;
    const query =
      "INSERT INTO tb_informasi_gereja (id_gereja, nama_jemaat, wilayah_pelayanan, tgl_berdiri, status_jemaat, status_kepemilikan_tanah, alamat_lengkap, no_tlp, email, luas_area_gereja, luas_area_bangunan, kondisi_bangunan_gereja)" +
      "VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(
      query,
      [
        nama_jemaat,
        wilayah_pelayanan,
        tgl_berdiri,
        status_jemaat,
        status_kepemilikan_tanah,
        alamat_lengkap,
        no_tlp,
        email,
        luas_area_gereja,
        luas_area_bangunan,
        kondisi_bangunan_gereja,
      ],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error: "An error occurred" });
          return;
        }
        res.status(200).json({ message: "Data Berhasil Ditambah" });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/update_informasi_gereja", async (req, res) => {
  try {
    const {
      nama_jemaat,
      wilayah_pelayanan,
      tgl_berdiri,
      status_jemaat,
      status_kepemilikan_tanah,
      alamat_lengkap,
      no_tlp,
      email,
      luas_area_gereja,
      luas_area_bangunan,
      kondisi_bangunan_gereja,
      id_gereja,
    } = req.body;
    const query = `UPDATE tb_informasi_gereja
      SET
        nama_jemaat = ?,
        wilayah_pelayanan = ?,
        tgl_berdiri = ?,
        status_jemaat = ?,
        status_kepemilikan_tanah = ?,
        alamat_lengkap = ?,
        no_tlp = ?,
        email = ?,
        luas_area_gereja = ?,
        luas_area_bangunan = ?,
        kondisi_bangunan_gereja = ?
      WHERE id_gereja = ?`;
    db.query(
      query,
      [
        nama_jemaat,
        wilayah_pelayanan,
        tgl_berdiri,
        status_jemaat,
        status_kepemilikan_tanah,
        alamat_lengkap,
        no_tlp,
        email,
        luas_area_gereja,
        luas_area_bangunan,
        kondisi_bangunan_gereja,
        id_gereja,
      ],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error: "An error occurred" });
          return;
        }
        res.status(200).json({ message: "Data Berhasil Diubah" });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/list_detail_gereja", async (req, res) => {
  try {
    const { id_gereja } = req.body;
    const query = "SELECT * FROM tb_detail_informasi_gereja WHERE id_gereja=?";
    db.query(query, [id_gereja], (error, results) => {
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

router.post("/tambah_detail_gereja", async (req, res) => {
  try {
    const { id_gereja, aset_gereja } = req.body;
    const query =
      "INSERT INTO  tb_detail_informasi_gereja ( id_aset ,  id_gereja , aset_gereja) VALUES (null,?,?)";
    db.query(query, [id_gereja, aset_gereja], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
        return;
      }
      res.status(200).json({ message: "Kelompok Berhasil Ditambah" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/delete_detail_gereja", async (req, res) => {
  try {
    const { id_aset } = req.body;
    const query = "DELETE FROM tb_detail_informasi_gereja WHERE id_aset=?";
    db.query(query, [id_aset], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
        return;
      }
      res.status(200).json({ message: "Kelompok Berhasil Dihapus" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/list_usaha_gereja", async (req, res) => {
    try {
      const { id_gereja } = req.body;
      const query = "SELECT * FROM tb_detail_usaha WHERE id_gereja=?";
      db.query(query, [id_gereja], (error, results) => {
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
  
  router.post("/tambah_usaha_gereja", async (req, res) => {
    try {
      const {id_gereja,usaha_gereja} = req.body;
      const query =
        "INSERT INTO tb_detail_usaha (id_usaha,id_gereja,usaha_gereja) VALUES (null,?,?)";
      db.query(query, [id_gereja,usaha_gereja], (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error: "An error occurred" });
          return;
        }
        res.status(200).json({ message: "Kelompok Berhasil Ditambah" });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  });
  
  router.post("/delete_usaha_gereja", async (req, res) => {
    try {
      const { id_usaha } = req.body;
      const query = "DELETE FROM tb_detail_usaha WHERE id_usaha=?";
      db.query(query, [id_usaha], (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error: "An error occurred" });
          return;
        }
        res.status(200).json({ message: "Kelompok Berhasil Dihapus" });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  });

module.exports = router;
