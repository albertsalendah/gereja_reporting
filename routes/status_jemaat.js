const express = require("express");
const router = express.Router();
const { db } = require("../db/connections");

router.post("/status_jemaat", async (req, res) => {
  try {
    const { id_jemaat, tgl_nonaktif, status_kematian, ket } = req.body;
    const query =
      "INSERT INTO detail_jemaat (id_jemaat, tgl_nonaktif, status_kematian, ket)" +
      "VALUES (?, ?, ?, ?)";
    db.query(
      query,
      [id_jemaat, tgl_nonaktif, status_kematian, ket],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error: "An error occurred" });
          return;
        }
        const status_jemaat = 0
        const query = "UPDATE jemaat SET status_jemaat=? WHERE id_jemaat=?";
        db.query(query, [status_jemaat, id_jemaat], (error, results) => {
          if (error) {
            console.error(error);
            res.status(500).json({ error: "An error occurred" });
            return;
          }
          res.status(200).json({ message: "Data Berhasil Diubah" });
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/delete_detail_jemaat", async (req, res) => {
  try {
    const { id_jemaat } = req.body;
    const query = "DELETE FROM detail_jemaat WHERE id_jemaat=?";
    db.query(query, [id_jemaat], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
        return;
      }
      res.status(200).json({ message: "Detail Jemaat delete successfully" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
