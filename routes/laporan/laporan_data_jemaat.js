const express = require("express");
const router = express.Router();
const { db } = require("../../db/connections");

router.get("/laporan_jemaat", async (req, res) => {
  try {
    const informasiGereja = await informasi_gereja();
    const idGereja = informasiGereja.id_gereja;

    const asetGerejaData = await aset_gereja(idGereja);
    const usahaGerejaData = await usaha_gereja(idGereja);
    const daftarPendetaData = await daftar_pendeta();
    const totalKepalaKeluargaData = await total_kepala_keluarga();
    const totalKelompokData = await total_kelompok();
    const jumlahJemaatData = await jumlah_jemaat();
    const jumlahLakiLakiData = await jumlah_laki_laki();
    const jumlahPerempuanData = await jumlah_perempuan();
    const totalStatusNikahData = await total_status_nikah();
    const totalGolonganDarahData = await total_golongan_darah();
    const totalPendidikanData = await total_pendidikan();
    const totalPekerjaanData = await total_pekerjaan();
    const totalBaptisSidiData = await total_baptis_sidi();
    const totalPelayanGerejaData = await total_pelayan_gereja();
    const totalStatusTingkatan = await total_status_tingkatan();

    res.status(200).json({
      info_gereja: informasiGereja,
      aset_gereja: asetGerejaData,
      usaha_gereja: usahaGerejaData,
      daftar_pendeta: daftarPendetaData,
      total_kepala_keluarga: totalKepalaKeluargaData,
      total_kelompok: totalKelompokData,
      jumlah_jemaat: jumlahJemaatData,
      jumlah_laki_laki: jumlahLakiLakiData,
      jumlah_perempuan: jumlahPerempuanData,
      total_status_nikah: totalStatusNikahData,
      total_golongan_darah: totalGolonganDarahData,
      total_pendidikan: totalPendidikanData,
      total_pekerjaan: totalPekerjaanData,
      total_baptis_sidi: totalBaptisSidiData,
      total_pelayan_gereja: totalPelayanGerejaData,
      total_status_tingkatan: totalStatusTingkatan,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

async function informasi_gereja() {
  return new Promise((resolve, reject) => {
    try {
      const query =
        "SELECT * FROM tb_informasi_gereja ORDER BY id_gereja DESC LIMIT 1";
      db.query(query, (error, results) => {
        if (error) {
          console.error(error);
          reject(error);
          return;
        }
        resolve(results[0]);
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

async function aset_gereja(id_gereja) {
  return new Promise((resolve, reject) => {
    try {
      const query =
        "SELECT * FROM tb_detail_informasi_gereja WHERE id_gereja=?";
      db.query(query, [id_gereja], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}
async function usaha_gereja(id_gereja) {
  return new Promise((resolve, reject) => {
    try {
      const query = "SELECT * FROM tb_detail_usaha WHERE id_gereja=?";
      db.query(query, [id_gereja], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

async function daftar_pendeta() {
  return new Promise((resolve, reject) => {
    try {
      const query =
        "SELECT k.id_kepengurusan, ja.jabatan, p.periode_awal, p.periode_akhir, k.id_jemaat, j.nama, k.id_periode " +
        "FROM kepengurusan k " +
        "JOIN jabatan ja ON k.id_jabatan=ja.id_jabatan " +
        "JOIN periode p ON k.id_periode=p.id_periode " +
        "JOIN jemaat j ON k.id_jemaat=j.id_jemaat " +
        "ORDER BY p.periode_awal DESC, ja.jabatan, j.nama ";
      db.query(query, (error, results) => {
        if (error) {
          console.error(error);
          reject(error);
          return;
        }
        resolve(results);
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

async function total_kepala_keluarga() {
  return new Promise((resolve, reject) => {
    try {
      const query =
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
        "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1 AND j.id_skeluarga = 1";
      db.query(query, (error, results) => {
        if (error) {
          console.error(error);
          reject(error);
          return;
        }
        resolve(results.length);
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

async function total_kelompok() {
  return new Promise((resolve, reject) => {
    try {
      const query =
        "SELECT id_kelompok, jenis_kelompok " +
        "FROM kelompok " +
        "WHERE id_kelompok>0 " +
        "ORDER BY jenis_kelompok";
      db.query(query, (error, results) => {
        if (error) {
          console.error(error);
          reject(error);
          return;
        }
        resolve(results.length);
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

async function jumlah_jemaat() {
  return new Promise((resolve, reject) => {
    try {
      const query =
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
        "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1";
      db.query(query, (error, results) => {
        if (error) {
          console.error(error);
          reject(error);
          return;
        }
        resolve(results.length);
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

async function jumlah_laki_laki() {
  return new Promise((resolve, reject) => {
    try {
      const query =
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
        "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1 AND j.jenis_kelamin = 'L'";
      db.query(query, (error, results) => {
        if (error) {
          console.error(error);
          reject(error);
          return;
        }
        resolve(results.length);
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

async function jumlah_perempuan() {
  return new Promise((resolve, reject) => {
    try {
      const query =
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
        "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1 AND j.jenis_kelamin = 'P'";
      db.query(query, (error, results) => {
        if (error) {
          console.error(error);
          reject(error);
          return;
        }
        resolve(results.length);
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

async function total_status_nikah() {
  return new Promise((resolve, reject) => {
    const queryNikah =
      "SELECT id_nikah, status " +
      "FROM status_pernikahan " +
      "ORDER BY status";
    db.query(queryNikah, (error, list_status_nikah) => {
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
        "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1";
      db.query(queryJemaat, (error, listjemaat) => {
        if (error) {
          reject(error);
          return;
        }

        const id_nikahCount = new Map();
        list_status_nikah.forEach((status) => {
          id_nikahCount.set(status.id_nikah, 0);
        });

        listjemaat.forEach((jemaat) => {
          const id_nikah = jemaat.id_nikah;
          if (id_nikahCount.has(id_nikah)) {
            id_nikahCount.set(id_nikah, id_nikahCount.get(id_nikah) + 1);
          }
        });

        const result = list_status_nikah.map((status) => ({
          id_nikah: status.id_nikah,
          status: status.status,
          total: id_nikahCount.get(status.id_nikah),
        }));

        resolve(result);
      });
    });
  });
}

async function total_golongan_darah() {
  return new Promise((resolve, reject) => {
    const bloodTypes = ["-", "A", "AB", "B", "O"]; // Define the blood types

    // Initialize a map to store the counts for each blood type
    const bloodTypeCountMap = new Map();
    bloodTypes.forEach((type) => {
      bloodTypeCountMap.set(type, 0);
    });

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
      "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1"; // Adjust the query as needed
    db.query(queryJemaat, (error, listjemaat) => {
      if (error) {
        reject(error);
        return;
      }

      // Count the occurrences of each blood type in listjemaat
      listjemaat.forEach((jemaat) => {
        const gol_darah = jemaat.gol_darah;
        if (bloodTypeCountMap.has(gol_darah)) {
          bloodTypeCountMap.set(
            gol_darah,
            bloodTypeCountMap.get(gol_darah) + 1
          );
        }
      });

      // Create an array of objects with blood type counts
      const result = [];
      bloodTypeCountMap.forEach((count, type) => {
        result.push({ blood_type: type, count });
      });

      resolve(result);
    });
  });
}

async function total_pendidikan() {
  return new Promise((resolve, reject) => {
    const queryPendidikan =
      "SELECT id_pendidikan, jenis_pendidikan " +
      "FROM pendidikan " +
      "ORDER BY jenis_pendidikan";
    db.query(queryPendidikan, (error, list_pendidikan) => {
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
        "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1";
      db.query(queryJemaat, (error, listjemaat) => {
        if (error) {
          reject(error);
          return;
        }

        const id_pendidikanCount = new Map();
        list_pendidikan.forEach((status) => {
          id_pendidikanCount.set(status.id_pendidikan, 0);
        });

        listjemaat.forEach((jemaat) => {
          const id_pendidikan = jemaat.id_pendidikan;
          if (id_pendidikanCount.has(id_pendidikan)) {
            id_pendidikanCount.set(
              id_pendidikan,
              id_pendidikanCount.get(id_pendidikan) + 1
            );
          }
        });

        const result = list_pendidikan.map((status) => ({
          id_pendidikan: status.id_pendidikan,
          pendidikan: status.jenis_pendidikan,
          total: id_pendidikanCount.get(status.id_pendidikan),
        }));

        resolve(result);
      });
    });
  });
}

async function total_pekerjaan() {
  return new Promise((resolve, reject) => {
    const queryPekerjaan =
      "SELECT id_pekerjaan, pekerjaan FROM pekerjaan ORDER BY pekerjaan";
    db.query(queryPekerjaan, (error, list_pekerjaan) => {
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
        "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1";
      db.query(queryJemaat, (error, listjemaat) => {
        if (error) {
          reject(error);
          return;
        }

        const idPekerjaanCountMap = new Map();
        list_pekerjaan.forEach((pekerjaan) => {
          idPekerjaanCountMap.set(pekerjaan.id_pekerjaan, 0);
        });

        listjemaat.forEach((jemaat) => {
          const idPekerjaan = jemaat.id_pekerjaan;
          if (idPekerjaanCountMap.has(idPekerjaan)) {
            idPekerjaanCountMap.set(
              idPekerjaan,
              idPekerjaanCountMap.get(idPekerjaan) + 1
            );
          }
        });

        const result = list_pekerjaan.map((pekerjaan) => ({
          id_pekerjaan: pekerjaan.id_pekerjaan,
          pekerjaan: pekerjaan.pekerjaan,
          total: idPekerjaanCountMap.get(pekerjaan.id_pekerjaan),
        }));

        resolve(result);
      });
    });
  });
}

async function total_baptis_sidi() {
  return new Promise((resolve, reject) => {
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
      "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1";
    db.query(queryJemaat, (error, listjemaat) => {
      if (error) {
        reject(error);
        return;
      }

      const baptisSidiCount = {
        belum_baptis: 0,
        sudah_baptis: 0,
        belum_sidi: 0,
        sudah_sidi: 0,
      };

      listjemaat.forEach((jemaat) => {
        const { baptis, sidi } = jemaat;
        if (baptis === 0) {
          baptisSidiCount.belum_baptis++;
        } else if (baptis === 1) {
          baptisSidiCount.sudah_baptis++;
        }

        if (sidi === 0) {
          baptisSidiCount.belum_sidi++;
        } else if (sidi === 1) {
          baptisSidiCount.sudah_sidi++;
        }
      });

      resolve(baptisSidiCount);
    });
  });
}

async function total_pelayan_gereja() {
  return new Promise((resolve, reject) => {
    const queryJabatan = "SELECT id_jabatan, jabatan FROM jabatan";
    db.query(queryJabatan, (error, list_Jabatan) => {
      if (error) {
        reject(error);
        return;
      }
      const queryMeajelis =
        "SELECT k.id_kepengurusan, ja.jabatan, p.periode_awal, p.periode_akhir, k.id_jemaat, j.nama, k.id_periode " +
        "FROM kepengurusan k " +
        "JOIN jabatan ja ON k.id_jabatan=ja.id_jabatan " +
        "JOIN periode p ON k.id_periode=p.id_periode " +
        "JOIN jemaat j ON k.id_jemaat=j.id_jemaat " +
        "ORDER BY p.periode_awal DESC, ja.jabatan, j.nama ";
      db.query(queryMeajelis, (error, listMajelis) => {
        if (error) {
          reject(error);
          return;
        }

        const id_JabatanCount = new Map();
        list_Jabatan.forEach((item) => {
          id_JabatanCount.set(item.jabatan, 0);
        });

        listMajelis.forEach((item) => {
          const jabatan = item.jabatan;
          if (id_JabatanCount.has(jabatan)) {
            id_JabatanCount.set(jabatan, id_JabatanCount.get(jabatan) + 1);
          }
        });

        const result = list_Jabatan.map((item) => ({
          id_jabatan: item.id_jabatan,
          jabatan: item.jabatan,
          total: id_JabatanCount.get(item.jabatan),
        }));

        resolve(result);
      });
    });
  });
}

async function total_status_tingkatan() {
  return new Promise((resolve, reject) => {
    const queryStatusTingkatan =
      "SELECT id_tingkatan, tingkatan " +
      "FROM tingkatan_jemaat " +
      "ORDER BY tingkatan";
    db.query(queryStatusTingkatan, (error, list_tingkatan) => {
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
        "JOIN status_pernikahan sp ON (j.id_nikah=sp.id_nikah) WHERE j.status_jemaat = 1";
      db.query(queryJemaat, (error, listjemaat) => {
        if (error) {
          reject(error);
          return;
        }

        const idTingkatanCountMap = new Map();
        list_tingkatan.forEach((item) => {
          idTingkatanCountMap.set(item.id_tingkatan, 0);
        });

        listjemaat.forEach((jemaat) => {
          const id_tingkatan = jemaat.id_tingkatan;
          if (idTingkatanCountMap.has(id_tingkatan)) {
            idTingkatanCountMap.set(
              id_tingkatan,
              idTingkatanCountMap.get(id_tingkatan) + 1
            );
          }
        });

        const result = list_tingkatan.map((item) => ({
          id_tingkatan: item.id_tingkatan,
          tingkatan: item.tingkatan,
          total: idTingkatanCountMap.get(item.id_tingkatan),
        }));

        resolve(result);
      });
    });
  });
}

module.exports = router;
