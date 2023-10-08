const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const port = process.env.PORT || 8000;
const server = http.createServer(app);
const bodyParser = require("body-parser");
const cors = require("cors");
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");
const dataJemaat = require("./routes/dataJemaat");
const dataKotaProvinsi = require("./routes/kota_provinsi");
const data_kepala_keluarga = require("./routes/kepala_keluarga");
const kelompok = require("./routes/kelompok");
const pekerjaan = require("./routes/pekerjaan");
const tingkatan_jemaat = require("./routes/tingkatan_jemaat");
const status_pernikahan = require("./routes/status_pernikahan");
const status_dalam_keluarga = require("./routes/status_dalam_keluarga");
const pendidikan = require("./routes/pendidikan");
const suku = require("./routes/suku");
const status_anggota_jemaat = require("./routes/status_anggota_jemaat");
const data_sidi = require("./routes/sidi");
const data_baptis = require("./routes/baptis");
const data_nikah = require("./routes/nikah");
const data_jabatan = require("./routes/jabatan");
const data_periode = require("./routes/periode");
const data_majelis = require("./routes/data_majelis");
const data_informasi_gereja = require("./routes/informasi_gereja");
const data_dashboard = require("./routes/dashboard");
const laporan_data_jemaat = require("./routes/laporan/laporan_data_jemaat");
const laporan_data_keluarga = require("./routes/laporan/laporan_data_keluarga");

app.use(bodyParser.json());
app.use(cors());
// Serve static files from the Flutter web app build directory
app.use(express.static("foto"));
app.use(express.static(path.join(__dirname, "web")));

(async () => {
  app.use("/", loginRoute);
  app.use("/", registerRoute);
  app.use("/", dataJemaat);
  app.use("/", dataKotaProvinsi);
  app.use("/", data_kepala_keluarga);
  app.use("/", kelompok);
  app.use("/", pekerjaan);
  app.use("/", tingkatan_jemaat);
  app.use("/", status_pernikahan);
  app.use("/", status_dalam_keluarga);
  app.use("/", pendidikan);
  app.use("/", suku);
  app.use("/", status_anggota_jemaat);
  app.use("/", data_sidi);
  app.use("/", data_baptis);
  app.use("/", data_nikah);
  app.use("/", data_jabatan);
  app.use("/", data_periode);
  app.use("/", data_majelis);
  app.use("/", data_informasi_gereja);
  app.use("/", data_dashboard);
  app.use("/", laporan_data_jemaat);
  app.use("/", laporan_data_keluarga);

  // Catch-all route to serve the Flutter web app's main HTML file
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "web", "index.html"));
  });

  server.listen(port, "172.31.47.29", function () {
    console.log("App running on *: " + port);
  });
})();
