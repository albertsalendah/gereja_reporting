const express = require("express");
const router = express.Router();
const { db } = require("../db/connections");
const multer = require("multer");
const fs = require("fs");
const sharp = require("sharp");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "foto"); // Specify the folder where you want to save the images
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Use the original filename for the saved file
//   },
// });
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/listjemaat", async (req, res) => {
  try {
    const query =
      "SELECT j.id_jemaat, j.nama, j.tgl_lahir, j.id_kota, CONCAT(p.nama_provinsi, ' - ', k.nama_kota), j.jenis_kelamin, j.alamat, j.baptis, j.sidi, j.tgl_bergabung, j.id_skeluarga, s.status_keluarga, j.id_kepala, kk.nama_kepala, j.id_pekerjaan, pek.pekerjaan, j.id_tingkatan, t.tingkatan, j.status_jemaat, j.id_pendidikan, pen.jenis_pendidikan, j.penghasilan, j.id_kelompok, ke.jenis_kelompok, j.id_nikah, sp.status, j.no_hp, j.foto, j.gol_darah, j.id_status_anggota_jemaat, j.suku, j.ket_asal_jemaat, j.status_data, j.created_by, j.created_at, j.updated_by, j.updated_at " +
      "FROM jemaat j " +
      "JOIN kota k ON (j.id_kota=k.id_kota) " +
      "JOIN provinsi p ON (k.id_provinsi=p.id_provinsi) " +
      "JOIN status_keluarga s ON (j.id_skeluarga=s.id_skeluarga) " +
      "JOIN kepala_keluarga kk ON (j.id_kepala=kk.id_kepala) " +
      "JOIN pekerjaan pek ON (j.id_pekerjaan=pek.id_pekerjaan) " +
      "JOIN tingkatan_jemaat t ON (j.id_tingkatan=t.id_tingkatan) " +
      "JOIN pendidikan pen ON (j.id_pendidikan=pen.id_pendidikan) " +
      "JOIN kelompok ke ON (j.id_kelompok=ke.id_kelompok) " +
      "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1";
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

router.post("/detail_jemaat", async (req, res) => {
  try {
    const { id_jemaat } = req.body;
    const query =
      "SELECT j.id_jemaat, j.nama, j.tgl_lahir, j.id_kota, CONCAT(p.nama_provinsi, ' - ', k.nama_kota), j.jenis_kelamin, j.alamat, j.baptis, j.sidi, j.tgl_bergabung, j.id_skeluarga, s.status_keluarga, j.id_kepala, kk.nama_kepala, j.id_pekerjaan, pek.pekerjaan, j.id_tingkatan, t.tingkatan, j.status_jemaat, j.id_pendidikan, pen.jenis_pendidikan, j.penghasilan, j.id_kelompok, ke.jenis_kelompok, j.id_nikah, sp.status, j.no_hp, j.foto, j.gol_darah, j.id_status_anggota_jemaat, j.suku, j.ket_asal_jemaat, j.status_data, j.created_by, j.created_at, j.updated_by, j.updated_at " +
      "FROM jemaat j " +
      "JOIN kota k ON (j.id_kota=k.id_kota) " +
      "JOIN provinsi p ON (k.id_provinsi=p.id_provinsi) " +
      "JOIN status_keluarga s ON (j.id_skeluarga=s.id_skeluarga) " +
      "JOIN kepala_keluarga kk ON (j.id_kepala=kk.id_kepala) " +
      "JOIN pekerjaan pek ON (j.id_pekerjaan=pek.id_pekerjaan) " +
      "JOIN tingkatan_jemaat t ON (j.id_tingkatan=t.id_tingkatan) " +
      "JOIN pendidikan pen ON (j.id_pendidikan=pen.id_pendidikan) " +
      "JOIN kelompok ke ON (j.id_kelompok=ke.id_kelompok) " +
      "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) " +
      "WHERE j.id_jemaat=" +
      id_jemaat;
    db.query(query, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
        return;
      }
      res.status(200).json(results[0]);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/tambahjemaat", async (req, res) => {
  try {
    const {
      nama,
      tgl_lahir,
      id_kota,
      jenis_kelamin,
      alamat,
      baptis,
      sidi,
      tgl_bergabung,
      id_skeluarga,
      id_kepala,
      id_pekerjaan,
      id_tingkatan,
      status_jemaat,
      id_pendidikan,
      penghasilan,
      id_kelompok,
      id_nikah,
      no_hp,
      foto,
      gol_darah,
      id_status_anggota_jemaat,
      suku,
      ket_asal_jemaat,
      status_data,
      created_by,
      created_at,
      updated_by,
    } = req.body;
    const values = [
      nama,
      tgl_lahir,
      id_kota,
      jenis_kelamin,
      alamat,
      baptis,
      sidi,
      tgl_bergabung,
      id_skeluarga,
      id_kepala,
      id_pekerjaan,
      id_tingkatan,
      status_jemaat,
      id_pendidikan,
      penghasilan,
      id_kelompok,
      id_nikah,
      no_hp,
      foto,
      gol_darah,
      id_status_anggota_jemaat,
      suku,
      ket_asal_jemaat,
      status_data,
      created_by,
      created_at,
      updated_by,
      id_kepala,
    ];
    const query =
      "INSERT INTO jemaat (id_jemaat, nama, tgl_lahir, id_kota, jenis_kelamin, alamat, baptis, sidi, tgl_bergabung, id_skeluarga, id_kepala, id_pekerjaan, id_tingkatan, status_jemaat, id_pendidikan, penghasilan, id_kelompok, id_nikah, no_hp, foto, no_urut_jemaat, gol_darah, id_status_anggota_jemaat, suku, ket_asal_jemaat, status_data, created_by, created_at, updated_by)" +
      `SELECT null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, IFNULL(MAX(no_urut_jemaat), 0) + 1, ?, ?, ?, ?, ?, ?, ?, ? FROM jemaat WHERE id_kepala=?`;
    db.query(query, values, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
        return;
      }
      const selectQuery =
        "SELECT id_jemaat FROM jemaat ORDER BY id_jemaat DESC LIMIT 1;";
      db.query(selectQuery, (error, selectResults) => {
        if (error) {
          console.error(error);
          res.status(500).json({
            error: "An error occurred while retrieving the last inserted ID",
          });
          return;
        }

        const insertedId = selectResults[0].id_jemaat;
        res.status(200).json({ id_jemaat: insertedId });
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.put("/update-jemaat/:id", (req, res) => {
  const jemaatId = req.params.id;
  const {
    nama,
    tgl_lahir,
    id_kota,
    jenis_kelamin,
    alamat,
    baptis,
    sidi,
    tgl_bergabung,
    id_skeluarga,
    id_kepala,
    id_pekerjaan,
    id_tingkatan,
    id_pendidikan,
    penghasilan,
    id_kelompok,
    id_nikah,
    no_hp,
    foto,
    gol_darah,
    id_status_anggota_jemaat,
    suku,
    ket_asal_jemaat,
    updated_by,
    updated_at,
  } = req.body;

  const sql = `UPDATE jemaat AS j JOIN ( SELECT IFNULL(MAX(no_urut_jemaat), 0) + 1 AS no_urut_jemaat FROM jemaat WHERE id_kepala=? ) AS j2 SET j.nama=?, j.tgl_lahir=?, j.id_kota=?, j.jenis_kelamin=?, j.alamat=?, j.baptis=?, j.sidi=?, j.tgl_bergabung=?, j.id_skeluarga=?, j.id_kepala=?, j.id_pekerjaan=?, j.id_tingkatan=?, j.id_pendidikan=?, j.penghasilan=?, j.id_kelompok=?, j.id_nikah=?, j.no_hp=?, j.foto=?, j.gol_darah=?, j.id_status_anggota_jemaat=?, j.suku=?, j.ket_asal_jemaat=?, j.updated_by=?, j.updated_at=? WHERE j.id_jemaat=?`;

  const values = [
    jemaatId,
    nama,
    tgl_lahir,
    id_kota,
    jenis_kelamin,
    alamat,
    baptis,
    sidi,
    tgl_bergabung,
    id_skeluarga,
    id_kepala,
    id_pekerjaan,
    id_tingkatan,
    id_pendidikan,
    penghasilan,
    id_kelompok,
    id_nikah,
    no_hp,
    foto,
    gol_darah,
    id_status_anggota_jemaat,
    suku,
    ket_asal_jemaat,
    updated_by,
    updated_at,
    jemaatId,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occurred while updating the jemaat data." });
    } else {
      res.status(200).json({ message: "Jemaat data updated successfully." });
    }
  });
});

router.post("/updatejemaatfoto", upload.single("foto"), async (req, res) => {
  try {
    // Assuming you have received the id_jemaat in the request body
    const idJemaat = req.body.id_jemaat;
    const oldFile = req.body.oldFile;

    if (oldFile != null && oldFile != "") {
      if (fs.existsSync("foto/" + oldFile)) {
        fs.unlink("foto/" + oldFile, (err) => {
          if (err) {
            console.error("File deletion error:", err);
            res.status(500).send("File deletion failed.");
          }
        });
      }
    }

    // Use sharp to compress the image
    const compressedImageBuffer = await sharp(req.file.buffer)
      //.resize(1080, 1920) // Resize to your preferred dimensions
      .jpeg({ quality: 70 }) // Compress the image to your preferred quality
      .toBuffer();

    // Save the compressed image to disk
    const filePaths = `foto/${req.file.originalname}`;
    await fs.promises.writeFile(filePaths, compressedImageBuffer);

    // Assuming you have the file path in req.file.path
    const filePath = req.file.originalname;
    const query = `UPDATE jemaat SET foto = ? WHERE id_jemaat = ?`;
    db.query(query, [filePath, idJemaat], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
        return;
      }
      res.status(200).json({ message: "Image uploaded" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/hps_foto", async (req, res) => {
  const idJemaat = req.body.id_jemaat;
  const filename = req.body.filename;
  const filePath = "foto/" + filename;
  const val = "";
  const query = `UPDATE jemaat SET foto = ? WHERE id_jemaat = ?`;

  if (fs.existsSync(filePath)) {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("File deletion error:", err);
        res.status(500).send("File deletion failed.");
      } else {
        db.query(query, [val, idJemaat], (error, results) => {
          if (error) {
            console.error(error);
            res.status(500).json({ error: "An error occurred" });
            return;
          }
          res.status(200).json({ message: "Image Deleted" });
        });
      }
    });
  } else {
    console.log("file not found");
  }
});

router.put("/update_status_data", async (req, res) => {
  try {
    const { status_data, id_jemaat } = req.body;
    const query = "UPDATE jemaat SET status_data=? WHERE id_jemaat=?";
    db.query(query, [status_data, id_jemaat], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
        return;
      }
      res.status(200).json({ message: "status data updated successfully." });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
