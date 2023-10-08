-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 08, 2023 at 09:40 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbgereja`
--

-- --------------------------------------------------------

--
-- Table structure for table `baptis`
--

DROP TABLE IF EXISTS `baptis`;
CREATE TABLE IF NOT EXISTS `baptis` (
  `id_jemaat` int NOT NULL,
  `tempat` varchar(100) NOT NULL,
  `nama_pendeta` varchar(100) NOT NULL,
  `tgl_baptis` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `baptis`
--

INSERT INTO `baptis` (`id_jemaat`, `tempat`, `nama_pendeta`, `tgl_baptis`) VALUES
(8, 'tmp', 'pdt', '2023-09-11'),
(6, 'aa', 'aaa', '2017-03-04'),
(7, 'ee', 'ff', '2023-07-27'),
(9, '0', '0', '2023-07-27'),
(10, '0', '0', '2023-07-27'),
(11, '0', '0', '2023-07-27'),
(12, '0', '0', '2023-07-27'),
(13, '0', '0', '2023-08-30'),
(123, 'Tempat Baptis', 'Pendeta Bapti', '2023-09-09'),
(196, 'Test Tempat Baptis', 'Nama Pendeta Baptis', '2023-09-09'),
(198, 'TMP', 'PDT', '2023-09-10'),
(199, 'qwer', 'qwer', '2023-09-10'),
(205, 'TMP', 'PDT', '2023-09-06'),
(211, 'fgh', 'fgh', '2023-09-12'),
(1113, 'Tempat', 'Pendeta', '2016-09-30'),
(1122, 'd', 'd', '2023-09-16'),
(4, 'asdasdd', '', '2023-10-03'),
(201, 'qwe', '', '2023-10-03'),
(207, 'asda', '', '2023-10-03'),
(209, 'fdfgdfgd', '', '2023-10-03'),
(1115, 'dfsdfs', '', '2023-10-03'),
(1112, 'fgdfg', '', '2023-10-03'),
(1136, '0', '0', '2023-10-04'),
(1139, 'haha', 'hahah', '2023-10-04');

-- --------------------------------------------------------

--
-- Table structure for table `detail_jemaat`
--

DROP TABLE IF EXISTS `detail_jemaat`;
CREATE TABLE IF NOT EXISTS `detail_jemaat` (
  `id_jemaat` int NOT NULL,
  `tgl_nonaktif` date NOT NULL,
  `status_kematian` int NOT NULL,
  `ket` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `detail_jemaat`
--

INSERT INTO `detail_jemaat` (`id_jemaat`, `tgl_nonaktif`, `status_kematian`, `ket`) VALUES
(8, '2023-07-27', 0, ''),
(1, '2023-07-27', 0, 'sudah meninggal');

-- --------------------------------------------------------

--
-- Table structure for table `jabatan`
--

DROP TABLE IF EXISTS `jabatan`;
CREATE TABLE IF NOT EXISTS `jabatan` (
  `id_jabatan` int NOT NULL AUTO_INCREMENT,
  `jabatan` varchar(50) NOT NULL,
  PRIMARY KEY (`id_jabatan`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jabatan`
--

INSERT INTO `jabatan` (`id_jabatan`, `jabatan`) VALUES
(1, 'Pendeta'),
(2, 'Penatua'),
(3, 'Diaken'),
(4, 'Ketua Jemaat');

-- --------------------------------------------------------

--
-- Table structure for table `jemaat`
--

DROP TABLE IF EXISTS `jemaat`;
CREATE TABLE IF NOT EXISTS `jemaat` (
  `id_jemaat` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(250) NOT NULL,
  `tgl_lahir` date NOT NULL,
  `id_kota` int NOT NULL,
  `jenis_kelamin` varchar(2) NOT NULL,
  `alamat` text NOT NULL,
  `baptis` int NOT NULL,
  `sidi` int NOT NULL,
  `tgl_bergabung` date NOT NULL,
  `id_skeluarga` int NOT NULL,
  `id_kepala` int NOT NULL,
  `id_pekerjaan` int NOT NULL,
  `id_tingkatan` int NOT NULL,
  `status_jemaat` int NOT NULL,
  `id_pendidikan` int NOT NULL,
  `penghasilan` int NOT NULL,
  `id_kelompok` int NOT NULL,
  `id_nikah` int NOT NULL,
  `no_hp` varchar(15) NOT NULL,
  `foto` varchar(100) NOT NULL,
  `no_urut_jemaat` int NOT NULL,
  `gol_darah` varchar(2) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `id_status_anggota_jemaat` int DEFAULT NULL,
  `suku` varchar(150) DEFAULT NULL,
  `ket_asal_jemaat` varchar(150) DEFAULT NULL,
  `status_data` varchar(50) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `created_at` varchar(32) NOT NULL,
  `updated_by` varchar(255) DEFAULT NULL,
  `updated_at` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id_jemaat`)
) ENGINE=InnoDB AUTO_INCREMENT=1151 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jemaat`
--

INSERT INTO `jemaat` (`id_jemaat`, `nama`, `tgl_lahir`, `id_kota`, `jenis_kelamin`, `alamat`, `baptis`, `sidi`, `tgl_bergabung`, `id_skeluarga`, `id_kepala`, `id_pekerjaan`, `id_tingkatan`, `status_jemaat`, `id_pendidikan`, `penghasilan`, `id_kelompok`, `id_nikah`, `no_hp`, `foto`, `no_urut_jemaat`, `gol_darah`, `id_status_anggota_jemaat`, `suku`, `ket_asal_jemaat`, `status_data`, `created_by`, `created_at`, `updated_by`, `updated_at`) VALUES
(1, 'TestUpdate Johns', '1993-09-23', 22, 'L', 'AlamaT', 0, 0, '2018-09-06', 1, 20, 8, 3, 1, 5, 500000, 3, 3, '1234567890111', 'WhatsApp Image 2023-06-13 at 15.37.21.jpg', 2, 'B', 1, 'suku 3', 'asal1', 'Diterima', 'admin', '0000-00-00', 'q', '0000-00-00'),
(2, 'Nina', '2017-03-11', 1, 'P', 'salatiga', 0, 0, '2017-03-11', 1, 1, 1, 1, 1, 1, 0, 1, 1, '123456789', '', 1, '-', 2, 'suku 1', '', 'Diterima', '0', '0000-00-00', '', '0000-00-00'),
(3, 'Tristan', '2017-03-11', 1, 'L', 'salatiga', 0, 0, '2017-03-11', 3, 1, 1, 1, 1, 1, 0, 1, 1, '312234243', '', 3, '-', 1, 'suku 1', '', 'Diterima', '0', '0000-00-00', 'admin', '0000-00-00'),
(4, 'Geo', '2017-03-11', 3, 'L', 'salatiga', 1, 1, '2017-03-11', 3, 1, 1, 1, 1, 1, 0, 1, 3, '', '', 4, '-', NULL, NULL, '', 'Diterima', '0', '0000-00-00', 'q', '0000-00-00'),
(5, 'istri X', '2017-03-14', 1, 'L', 'salatiga', 0, 0, '2017-03-14', 2, 1, 1, 1, 1, 1, 0, 1, 1, '', '', 2, '-', 0, '', '', 'Diterima', '0', '0000-00-00', '0', '0000-00-00'),
(6, 'loraaa', '2017-03-24', 1, 'L', 'aa', 0, 0, '2017-03-24', 1, 4, 1, 1, 1, 1, 0, 1, 1, '', '', 1, '-', 0, '', '', 'Diterima', '0', '0000-00-00', '0', '0000-00-00'),
(7, 'Joko Yuwono', '2020-09-11', 89, 'L', 'Salatiga', 1, 0, '2021-09-13', 1, 3, 7, 1, 1, 1, 10000000, 1, 3, '08111', '', 1, '-', NULL, NULL, '', 'Diterima', '0', '0000-00-00', 'admin', '0000-00-00'),
(8, 'LalaYeye', '2023-07-27', 2, 'L', 'Palu', 0, 0, '2023-07-27', 8, 0, 1, 1, 0, 1, 1000000, 1, 1, '000', '/Users/mymac/Downloads/CIS_24032017/Foto/270723_102455_LalaYeye.png', 1, '-', 0, '', '', 'Diterima', '0', '0000-00-00', '0', '0000-00-00'),
(9, 'Fore La', '1993-07-24', 88, 'L', 'salatiga', 1, 0, '2023-07-27', 3, 1, 8, 1, 1, 1, 100, 3, 3, '08111', '', 1, '-', NULL, 'suku 1', '', 'Ditolak', 'q', '2023-10-01', 'q', '0000-00-00'),
(10, 'Istri Fore', '2023-07-01', 2, 'P', 'aa', 1, 1, '2023-07-27', 2, 4, 5, 1, 1, 1, 0, 1, 3, '0', '/Users/mymac/Downloads/CIS_24032017/Foto/270723_123637_Istri Fore.jpg', 3, '-', 0, '', '', 'Diterima', '0', '0000-00-00', '0', '0000-00-00'),
(11, 'Mariam Pontonuwu', '2023-01-01', 85, 'P', 'Jl. Towua Lrg. Malaya 144 F', 1, 1, '2023-07-27', 1, 8, 2, 4, 1, 5, 0, 2, 4, '0811284325', '', 1, '-', 0, '', '', 'Ditolak', '0', '0000-00-00', '0', '0000-00-00'),
(12, 'Dwi Hosanna Bangkalang', '2023-07-24', 2, 'P', 'Jl. Towua Lrg. Malaya 144 F', 1, 1, '2023-07-27', 3, 8, 9, 2, 1, 1, 100000, 2, 3, '08112822278', '', 2, '-', 0, '', '', 'Diterima', '0', '0000-00-00', '0', '0000-00-00'),
(13, 'aaa', '2023-08-30', 2, 'P', 'AlamaT', 1, 1, '2023-08-30', 2, 20, 9, 4, 1, 5, 0, 3, 2, '09', '', 2, '-', NULL, NULL, '', 'Ditolak', NULL, '0000-00-00', 'q', '0000-00-00'),
(19, 'sdfdsfs', '2023-09-01', 3, 'L', 'JL. Towua Lrg. Malaya 144F', 0, 0, '2023-09-01', 8, 14, 4, 2, 1, 4, 1000000, 4, 5, '3432443242', '', 2, 'B', NULL, NULL, '', 'Diterima', NULL, '0000-00-00', 'q', '0000-00-00'),
(43, 'John Doe 01', '1990-01-15', 1, 'L', 'salatiga', 0, 0, '2023-08-30', 6, 1, 7, 3, 1, 4, 50000, 1, 4, '123-456-7890', 'base64_encoded_image', 5, 'AB', NULL, NULL, '', 'Ditolak', NULL, '0000-00-00', 'kolom', '2023-10-09'),
(44, 'John Doe', '1990-01-15', 1, 'L', 'salatiga', 0, 0, '2023-08-30', 2, 1, 1, 1, 1, 1, 50000, 1, 1, '123-456-7890', 'base64_encoded_image', 6, '-', NULL, NULL, '', 'Ditolak', NULL, '0000-00-00', 'q', '0000-00-00'),
(45, 'klklklkklklk', '2023-09-04', 1, 'L', 'Jl. Towua 5, A', 0, 0, '2023-09-04', 3, 3, 1, 4, 1, 1, 0, 2, 1, '', '', 2, '-', NULL, NULL, NULL, 'Diterima', NULL, '0000-00-00', NULL, '0000-00-00'),
(195, 'dfsdfsdfs1', '2023-09-09', 1, 'L', 'Jl. Towua Lrg. Malaya jsjsjs jsjs, palu selatan', 0, 1, '2023-09-09', 5, 15, 9, 4, 1, 1, 1000000, 2, 1, '', 'base64_encoded_image', 3, '-', 1, '-', '', 'Ditolak', 'admin', '0000-00-00', 'q', '0000-00-00'),
(196, 'Test Addtional Field', '0000-00-00', 1, 'L', 'Salatiga', 1, 1, '2023-09-09', 6, 14, 1, 4, 1, 1, 0, 1, 1, '', 'base64_encoded_image', 4, '-', 1, '-', '', 'Diterima', 'admin', '0000-00-00', '', '0000-00-00'),
(197, 'Testing', '2023-09-09', 1, 'L', 'salatiga', 0, 0, '2023-09-09', 4, 1, 1, 4, 1, 1, 0, 1, 1, '', 'base64_encoded_image', 7, '-', 1, '-', '', 'Ditolak', 'admin', '0000-00-00', 'q', '0000-00-00'),
(198, 'Test Value', '2004-09-15', 6, 'P', 'salatiga', 1, 1, '2023-09-10', 4, 1, 9, 2, 1, 5, 100000000, 1, 4, '123456789', 'base64_encoded_image', 8, 'A', 2, 'suku 3', 'Testing VAlue', 'Ditolak', 'admin', '0000-00-00', '', '0000-00-00'),
(200, 'Testes', '2023-09-10', 1, 'L', 'Salatiga', 0, 0, '2023-09-10', 4, 6, 1, 4, 1, 1, 0, 1, 1, '', 'foto', 5, '-', 1, '-', '', 'Menunggu Verifikasi', 'admin', '0000-00-00', '', '0000-00-00'),
(201, 'dasdasdasd', '2023-09-10', 1, 'L', 'aa', 1, 1, '2023-09-10', 3, 4, 1, 4, 1, 1, 0, 1, 1, '', 'WhatsApp Image 2023-06-13 at 15.37.21.jpg', 4, '-', 1, '-', '', 'Diterima', 'admin', '0000-00-00', 'q', '0000-00-00'),
(202, '12345', '2023-09-10', 1, 'L', 'Jl. Towua Lrg. Malaya jsjsjs jsjs, palu selatan', 0, 0, '2023-09-10', 4, 15, 1, 4, 1, 1, 0, 2, 1, '', 'WhatsApp Image 2023-06-13 at 15.37.21.jpg', 6, '-', 1, '-', '', 'Diterima', 'admin', '0000-00-00', 'q', '0000-00-00'),
(203, 'asdasd123', '2023-09-10', 1, 'L', 'AlamaT', 0, 0, '2023-09-10', 5, 20, 1, 4, 1, 1, 0, 3, 1, '', 'WhatsApp Image 2023-06-13 at 15.37.21.jpg', 3, '-', 1, '-', '', 'Diterima', 'admin', '0000-00-00', 'q', '0000-00-00'),
(204, 'Test All 123', '2023-09-10', 8, 'P', 'Jl. Towua Lrg. Malaya 144 F', 0, 0, '2023-09-10', 8, 8, 7, 4, 1, 1, 123456789, 2, 1, '123456789', 'WhatsApp Image 2023-06-13 at 15.37.21.jpg', 4, 'AB', 1, 'suku 3', 'Keterangan Asal Jemaat', 'Ditolak', 'admin', '0000-00-00', 'q', '0000-00-00'),
(205, 'Test Non KKK', '2023-09-06', 1, 'L', 'AlamaT', 1, 0, '2023-09-06', 6, 20, 5, 2, 1, 4, 100000, 3, 3, '', 'foto', 3, '-', NULL, NULL, '', 'Ditolak', 'admin', '0000-00-00', 'q', '0000-00-00'),
(206, 'Testingg', '2023-09-10', 1, 'L', '', 0, 0, '2023-09-10', 8, 3, 1, 4, 1, 1, 0, 1, 1, '', 'foto', 1, '-', 1, '-', '', 'Diterima', 'admin', '0000-00-00', '', '0000-00-00'),
(207, 'Test Tgl', '2023-09-11', 1, 'L', 'AlamaT', 1, 1, '2023-09-11', 8, 20, 1, 4, 1, 1, 0, 3, 1, '', 'WhatsApp Image 2023-06-13 at 15.37.21.jpg', 5, '-', 1, '-', '', 'Diterima', 'admin', '0000-00-00', 'q', '0000-00-00'),
(208, 'Test Verifikasi', '2023-09-12', 1, 'L', 'aa', 0, 0, '2023-09-12', 8, 4, 1, 4, 1, 1, 0, 1, 1, '', '', 6, '-', 1, '-', '', 'Ditolak', 'admin', '0000-00-00', 'q', '0000-00-00'),
(209, 'Test Verivikasi 2', '2023-09-12', 1, 'L', 'salatiga', 1, 1, '2023-09-12', 8, 1, 1, 4, 1, 1, 0, 1, 1, '', '', 7, '-', 1, '-', '', 'Diterima', 'admin', '0000-00-00', 'q', '0000-00-00'),
(210, 'Test Block', '1990-09-03', 1, 'L', 'Jl. Towua Lrg. Malaya 144 F', 0, 0, '2023-09-12', 8, 8, 1, 4, 1, 1, 99999, 2, 1, '', 'Microsoft_Nostalgic_Windows_Wallpaper_4k.jpg', 2, '-', 1, '-', 'z', 'Ditolak', 'admin', '0000-00-00', 'admin', '0000-00-00'),
(211, 'zzzzzzzz', '1988-09-30', 2, 'P', 'Jl. Towua Lrg. Malaya jsjsjs jsjs, palu selatan', 1, 1, '2017-09-20', 4, 15, 8, 2, 1, 6, 12345610, 2, 3, '777111', 'WhatsApp Image 2023-06-13 at 15.37.21.jpg', 3, 'A', 2, 'suku 2', '1234', 'Ditolak', 'admin', '0000-00-00', 'q', '0000-00-00'),
(1112, 'Tambah Bloc', '2000-09-21', 23, 'P', 'aa', 1, 1, '2018-09-13', 8, 4, 4, 2, 1, 4, 123456789, 1, 3, '1234567', '', 8, 'B', 2, 'suku 3', '', 'Ditolak', 'admin', '0000-00-00', 'q', '0000-00-00'),
(1113, 'Test Tambah Bloc', '2003-09-25', 18, 'L', 'salatiga', 1, 1, '1982-09-15', 7, 1, 3, 2, 1, 4, 34245335, 1, 3, '56463453453', 'WhatsApp Image 2023-06-13 at 15.37.21.jpg', 4, 'AB', 1, 'suku 2', 'Keterangan Asal Jemaat', 'Ditolak', 'admin', '0000-00-00', 'q', '0000-00-00'),
(1114, 'cvbcbcvbcvb', '2023-09-13', 1, 'P', 'salatiga', 0, 0, '2023-09-13', 6, 1, 8, 4, 1, 3, 0, 1, 2, '3', '', 9, 'B', 2, '-', '', 'Ditolak', 'admin', '0000-00-00', 'q', '2023-10-07'),
(1115, 'g1', '2023-09-13', 4, 'L', 'aa', 1, 1, '2023-09-13', 7, 4, 9, 2, 1, 3, 0, 1, 5, '3', '', 9, 'B', 2, 'suku 2', '', 'Pengajuan Ulang', 'admin', '0000-00-00', 'q', '2023-10-09'),
(1116, 'hjghjghjghj', '2023-09-13', 1, 'L', 'Salatiga', 0, 0, '2023-09-13', 6, 14, 9, 2, 1, 3, 0, 1, 5, '', '', 7, '-', 2, '-', '', 'Pengajuan Ulang', 'admin', '0000-00-00', '', '0000-00-00'),
(1117, 'SSSSSSSS', '2023-09-13', 1, 'L', 'AlamaT', 0, 0, '2023-09-13', 4, 20, 9, 4, 1, 3, 0, 3, 5, '1', '', 5, 'B', 2, '-', '', 'Diterima', 'admin', '0000-00-00', 'q', '2023-10-09'),
(1118, 'opoppo', '2023-09-13', 1, 'L', 'aa', 0, 0, '2023-09-13', 3, 4, 1, 4, 1, 1, 0, 1, 10, '', '', 10, '-', 1, '-', '', 'Menunggu Verifikasi', 'admin', '0000-00-00', 'q', '0000-00-00'),
(1119, 'Non KK Test 1', '2023-09-14', 1, 'L', 'AlamaT', 0, 1, '2023-09-14', 3, 20, 1, 4, 1, 1, 0, 3, 1, '', '', 5, '-', 1, '-', '', 'Menunggu Verifikasi', 'kolom', '0000-00-00', 'q', '0000-00-00'),
(1120, 'jkl12', '2023-09-16', 1, 'L', 'Jl Towua', 0, 0, '2023-09-16', 8, 22, 7, 4, 1, 3, 0, 1, 5, '123', '', 6, 'AB', 2, '-', 'jkl', 'Menunggu Verifikasi', 'q', '0000-00-00', 'q', '0000-00-00'),
(1121, 'zxc', '2023-09-16', 1, 'L', 'Jl. Towua Lrg. Malaya jsjsjs jsjs, palu selatan', 0, 0, '2023-09-16', 4, 15, 1, 4, 1, 1, 0, 2, 1, '', '', 8, '-', 1, '-', '', 'Menunggu Verifikasi', 'q', '0000-00-00', 'q', '0000-00-00'),
(1122, 'Janetdsadadd', '2023-09-16', 4, 'P', 'Salatiga', 1, 0, '2023-09-16', 4, 14, 7, 3, 1, 4, 0, 1, 3, '', '', 9, 'B', 1, 'suku 1', 'dsdsdsdd', 'Menunggu Verifikasi', 'admin', '0000-00-00', '', '0000-00-00'),
(1123, 'Andreas Taroreh', '2023-09-16', 77, 'P', 'Jl. Towua Lrg. Malaya jsjsjs jsjs, palu selatan', 0, 0, '2023-09-01', 2, 15, 9, 4, 1, 3, 200000, 2, 3, '081123', '', 1, 'AB', 2, 'suku 2', '0', 'Menunggu Verifikasi', 'kolom', '0000-00-00', '', '0000-00-00'),
(1124, 'h', '2023-09-16', 1, 'L', 'Jl. Towua Lrg. Malaya jsjsjs jsjs, palu selatan', 0, 0, '2023-09-16', 5, 15, 1, 4, 1, 1, 0, 2, 1, '', '', 2, 'A', 1, '-', 'h', 'Menunggu Verifikasi', 'kolom', '0000-00-00', '', '0000-00-00'),
(1125, 'fsdsdsf', '2023-09-17', 1, 'L', 'JL. Towua Lrg. Malaya 144F', 0, 0, '2023-09-17', 1, 14, 1, 4, 1, 1, 0, 4, 1, '', '', 1, '-', 1, '-', '', 'Menunggu Verifikasi', 'q', '0000-00-00', '', '0000-00-00'),
(1126, 'Testqwert', '2023-09-17', 2, 'L', 'Jl. Towua Lrg. Malaya jsjsjs jsjs, palu selatan', 0, 0, '2023-09-17', 1, 15, 1, 4, 1, 1, 2147483647, 2, 1, '456456456', 'Untitled.png', 3, 'A', 2, 'suku 1', 'sdfsdfsfs', 'Menunggu Verifikasi', 'q', '0000-00-00', '', '0000-00-00'),
(1127, 'weewweeeww', '2023-09-17', 1, 'L', 'aa', 0, 0, '2023-09-17', 1, 4, 1, 4, 1, 1, 0, 1, 1, '', 'WhatsApp Image 2023-06-13 at 15.37.21.jpg', 11, '-', 1, '-', '', 'Menunggu Verifikasi', 'q', '0000-00-00', '', '0000-00-00'),
(1128, 'fdgdgdfg879789789', '2023-09-17', 1, 'L', 'JL. Towua Lrg. Malaya 144F', 0, 0, '2023-09-17', 1, 14, 1, 4, 1, 1, 0, 4, 1, '', '', 2, 'AB', 1, '-', 'gfdgdfdfg', 'Menunggu Verifikasi', 'q', '0000-00-00', '', '0000-00-00'),
(1129, 'Test Status 01', '2023-09-18', 1, 'L', 'Jl. Towua Lrg. Malaya jsjsjs jsjs, palu selatan', 0, 0, '2023-09-18', 1, 15, 1, 4, 1, 1, 0, 2, 1, '', 'WhatsApp Image 2023-06-13 at 15.37.21.jpg', 4, '-', 1, '-', '', 'Diterima', 'q', '0000-00-00', 'kolom', '0000-00-00'),
(1130, 'Test Status 02', '2023-09-18', 1, 'L', 'JL. Towua Lrg. Malaya 144F', 0, 0, '2023-09-18', 1, 14, 1, 4, 1, 1, 0, 4, 1, '', '', 3, '-', 1, '-', '', 'Pengajuan Ulang', 'kolom', '0000-00-00', '', '0000-00-00'),
(1131, 'Test Status 03', '2023-09-18', 1, 'L', 'Jl. Towua Lrg. Malaya 144 F', 0, 0, '2023-09-18', 1, 8, 1, 4, 1, 1, 0, 2, 1, '', '', 6, '-', 1, '-', '', 'Menunggu Verifikasi', 'kolom', '0000-00-00', '', '0000-00-00'),
(1132, 'vvvAAA', '2023-09-18', 4, 'P', 'JL. Towua Lrg. Malaya 144F', 0, 0, '2023-09-18', 7, 14, 1, 3, 1, 6, 423424, 4, 3, '453453', 'WhatsApp Image 2023-06-13 at 15.37.21.jpg', 4, 'A', 1, 'suku 2', 'asdasdasd', 'Diterima', 'q', '0000-00-00', 'q', '0000-00-00'),
(1133, 'Test PDF lora', '2023-10-03', 1, 'L', 'aa', 0, 0, '2023-10-03', 5, 4, 1, 4, 1, 1, 0, 1, 1, '123', '', 12, '-', 1, '-', '', 'Diterima', 'q', '0000-00-00', 'q', '0000-00-00'),
(1134, 'Test Pdf 1', '2023-10-03', 1, 'L', 'dfsdfsf', 0, 0, '2023-10-03', 4, 21, 1, 4, 1, 1, 0, 1, 1, '', '', 10, '-', 1, '-', '', 'Diterima', 'q', '0000-00-00', 'q', '0000-00-00'),
(1135, '0000', '2023-10-03', 1, 'L', '', 0, 0, '2023-10-03', 4, 3, 1, 4, 1, 1, 0, 1, 1, '', '', 11, '-', 1, '-', '', 'Diterima', 'q', '0000-00-00', 'q', '0000-00-00'),
(1136, 'Mariam Pontonuwu', '2023-10-04', 2, 'L', 'Jl Towua', 1, 1, '2023-10-04', 1, 22, 7, 4, 1, 2, 0, 1, 3, '084823', '', 1, 'A', 2, 'suku 1', '-', 'Menunggu Verifikasi', 'kolom', '0000-00-00', '', '0000-00-00'),
(1137, 'Janet', '2023-10-04', 2, 'L', 'Jl Towua', 0, 0, '2023-10-04', 1, 22, 1, 4, 1, 1, 66, 1, 1, '00', '', 2, 'A', 1, 'suku 1', '0', 'Diterima', 'kolom', '0000-00-00', '', '0000-00-00'),
(1138, 'Dwi Hosanna', '2023-10-04', 1, 'L', 'Jl Towua', 0, 0, '2023-10-04', 1, 22, 1, 4, 1, 1, 0, 1, 1, '', '', 3, 'A', 1, '-', '0', 'Menunggu Verifikasi', 'kolom', '0000-00-00', '', '0000-00-00'),
(1139, 'sherafim', '2023-10-04', 1, 'L', 'Jl Towua', 1, 1, '2023-10-04', 1, 22, 9, 4, 1, 1, 200000, 1, 3, '000', 'image.jpg', 4, 'B', 2, 'suku 1', '0', 'Menunggu Verifikasi', 'kolom', '0000-00-00', '', '0000-00-00'),
(1140, 'uiop', '2023-10-05', 1, 'L', 'dfsdfsf', 0, 0, '2023-10-05', 4, 21, 6, 4, 1, 4, 12345678, 1, 3, '1234567890', '', 11, 'A', 2, '-', 'dasdasd', 'Diterima', 'q', '0000-00-00', '', '0000-00-00'),
(1141, 'tyuio', '2023-10-05', 3, 'P', 'Jl. Towua Lrg. Malaya jsjsjs jsjs, palu selatan', 0, 0, '2023-10-05', 9, 15, 4, 7, 1, 4, 5, 2, 2, '5', '', 10, 'A', 2, '-', '', 'Diterima', 'q', '0000-00-00', '', '0000-00-00'),
(1142, 'zxcvbn', '2023-10-06', 4, 'L', 'Jl. Towua Lrg. Malaya jsjsjs jsjs, palu selatan', 0, 0, '2023-10-06', 7, 15, 3, 3, 1, 4, 654, 2, 3, '56456', '', 11, 'B', 2, 'suku 3', 'gdfgdfg', 'Diterima', 'q', '0000-00-00', '', '0000-00-00'),
(1143, '1234567890', '2023-10-06', 22, 'L', 'Jl. Towua Lrg. Malaya 144 F', 0, 0, '2023-10-06', 5, 8, 5, 3, 1, 4, 1234, 2, 4, '12345', '', 7, 'A', 2, '-', '', 'Diterima', 'q', '2023-10-07', '', '0000-00-00'),
(1144, 'bnm', '2023-10-08', 18, 'L', '', 0, 0, '2023-10-08', 9, 3, 4, 3, 1, 4, 4567789, 1, 10, '089676', '', 12, 'B', 2, '-', '', 'Diterima', 'q', '2023-10-09', 'q', '2023-10-09'),
(1145, 'jjjjjjjj123', '2023-10-08', 19, 'P', 'Jl. Towua Lrg. Malaya 144 F', 0, 0, '2023-10-08', 7, 8, 4, 2, 1, 4, 8, 2, 4, '8', '', 8, 'A', 3, '-', '', 'Diterima', 'q', '2023-10-09', 'q', '2023-10-09'),
(1146, 'fsdfsd', '2023-10-08', 5, 'L', 'aa', 0, 0, '2023-10-08', 4, 4, 9, 4, 1, 4, 6, 1, 4, '6', '', 13, 'B', 2, '-', '', 'Diterima', 'q', '2023-10-09', '', '0000-00-00'),
(1147, 'FFFF444', '2023-10-08', 1, 'L', 'JL. Towua Lrg. Malaya 144F', 0, 0, '2023-10-08', 6, 14, 9, 3, 1, 4, 12, 4, 2, '12', '', 10, 'O', 3, '-', 'dsfsd', 'Diterima', 'q', '2023-10-09', 'q', '2023-10-09'),
(1148, 'QQQQ', '2023-10-08', 1, 'L', 'Jl Towua', 0, 0, '2023-10-08', 6, 22, 5, 3, 1, 3, 231, 1, 5, '123', '', 7, 'A', 2, '-', '', 'Diterima', 'kolom', '2023-10-09', '', '0000-00-00'),
(1149, 'xxxx', '2023-10-08', 1, 'L', 'aa', 0, 0, '2023-10-08', 7, 4, 5, 3, 1, 4, 45, 1, 4, '76', '', 14, 'B', 3, '-', '', 'Menunggu Verifikasi', 'kolom', '2023-10-08', '', '0000-00-00'),
(1150, 'BBBB', '2023-10-08', 1, 'L', 'AlamaT', 0, 0, '2023-10-08', 7, 20, 9, 4, 1, 4, 23, 3, 4, '23', '', 6, 'O', 3, '-', '', 'Diterima', 'q', '2023-10-08 11:35:31.288', '', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `kelompok`
--

DROP TABLE IF EXISTS `kelompok`;
CREATE TABLE IF NOT EXISTS `kelompok` (
  `id_kelompok` int NOT NULL AUTO_INCREMENT,
  `jenis_kelompok` varchar(50) NOT NULL,
  PRIMARY KEY (`id_kelompok`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kelompok`
--

INSERT INTO `kelompok` (`id_kelompok`, `jenis_kelompok`) VALUES
(0, 'Non KK'),
(1, 'Kolom 1'),
(2, 'Kolom 2'),
(3, 'kolom 3'),
(4, 'kolom 4'),
(5, 'kolom 5'),
(6, 'kolom 6'),
(8, 'kolom 7');

-- --------------------------------------------------------

--
-- Table structure for table `kepala_keluarga`
--

DROP TABLE IF EXISTS `kepala_keluarga`;
CREATE TABLE IF NOT EXISTS `kepala_keluarga` (
  `id_kepala` int NOT NULL AUTO_INCREMENT,
  `nama_kepala` varchar(100) NOT NULL,
  `id_kelompok` int NOT NULL,
  `alamat` text NOT NULL,
  `no_urut_kk` int NOT NULL,
  PRIMARY KEY (`id_kepala`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kepala_keluarga`
--

INSERT INTO `kepala_keluarga` (`id_kepala`, `nama_kepala`, `id_kelompok`, `alamat`, `no_urut_kk`) VALUES
(0, 'Non KK', 0, '', 0),
(1, 'nina', 1, 'salatiga', 1),
(3, 'ocha', 1, '', 3),
(4, 'lora', 1, 'aa', 4),
(8, 'Mariam Pontonuwu', 2, 'Jl. Towua Lrg. Malaya 144 F', 2),
(14, 'Four', 4, 'JL. Towua Lrg. Malaya 144F', 7),
(15, 'Andreas Taroreh', 2, 'Jl. Towua Lrg. Malaya jsjsjs jsjs, palu selatan', 3),
(20, 'Test 1', 3, 'AlamaT', 1),
(21, 'test 2', 1, 'dfsdfsf', 5),
(22, 'Bangkalang Pontonuwu', 1, 'Jl Towua', 6),
(23, 'Test 3', 3, 'qwerty', 2);

-- --------------------------------------------------------

--
-- Table structure for table `kepengurusan`
--

DROP TABLE IF EXISTS `kepengurusan`;
CREATE TABLE IF NOT EXISTS `kepengurusan` (
  `id_kepengurusan` int NOT NULL AUTO_INCREMENT,
  `id_jabatan` int NOT NULL,
  `id_periode` int NOT NULL,
  `id_jemaat` int NOT NULL,
  PRIMARY KEY (`id_kepengurusan`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kepengurusan`
--

INSERT INTO `kepengurusan` (`id_kepengurusan`, `id_jabatan`, `id_periode`, `id_jemaat`) VALUES
(1, 3, 1, 7),
(2, 2, 1, 2),
(3, 1, 1, 7);

-- --------------------------------------------------------

--
-- Table structure for table `kota`
--

DROP TABLE IF EXISTS `kota`;
CREATE TABLE IF NOT EXISTS `kota` (
  `id_kota` int NOT NULL AUTO_INCREMENT,
  `id_provinsi` int NOT NULL,
  `nama_kota` varchar(100) NOT NULL,
  PRIMARY KEY (`id_kota`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kota`
--

INSERT INTO `kota` (`id_kota`, `id_provinsi`, `nama_kota`) VALUES
(1, 1, '-'),
(2, 2, 'Banda Aceh'),
(3, 2, 'Langsa'),
(4, 2, 'Lhokseumawe'),
(5, 2, 'Meulaboh'),
(6, 2, 'Sabang'),
(7, 2, 'Subulussalam'),
(8, 3, 'Denpasar'),
(9, 4, 'Pangkalpinang'),
(10, 5, 'Cilegon'),
(11, 5, 'Serang'),
(12, 5, 'Tangerang Selatan'),
(13, 5, 'Tangerang'),
(14, 6, 'Bengkulu'),
(15, 7, 'Gorontalo'),
(16, 8, 'Jakarta Barat'),
(17, 8, 'Jakarta Pusat'),
(18, 8, 'Jakarta Selatan'),
(19, 8, 'Jakarta Timur'),
(20, 8, 'Jakarta Utara'),
(21, 9, 'Sungai Penuh'),
(22, 9, 'Jambi'),
(23, 10, 'Bandung'),
(24, 10, 'Bekasi'),
(25, 10, 'Bogor'),
(26, 10, 'Cimahi'),
(27, 10, 'Cirebon'),
(28, 10, 'Depok'),
(29, 10, 'Sukabumi'),
(30, 10, 'Tasikmalaya'),
(31, 10, 'Banjar'),
(32, 11, 'Magelang'),
(33, 11, 'Pekalongan'),
(34, 11, 'Purwokerto'),
(35, 11, 'Salatiga'),
(36, 11, 'Semarang'),
(37, 11, 'Surakarta'),
(38, 11, 'Tegal'),
(39, 12, 'Batu'),
(40, 12, 'Blitar'),
(41, 12, 'Kediri'),
(42, 12, 'Madiun'),
(43, 12, 'Malang'),
(44, 12, 'Mojokerto'),
(45, 12, 'Pasuruan'),
(46, 12, 'Probolinggo'),
(47, 12, 'Surabaya'),
(48, 13, 'Pontianak'),
(49, 13, 'Singkawang'),
(50, 13, 'Banjarbaru'),
(51, 13, 'Banjarmasin'),
(52, 13, 'Palangkaraya'),
(53, 13, 'Balikpapan'),
(54, 13, 'Bontang'),
(55, 13, 'Samarinda'),
(56, 13, 'Tarakan'),
(57, 14, 'Batam'),
(58, 14, 'Tanjungpinang'),
(59, 15, 'Bandar Lampung'),
(60, 15, 'Kotabumi'),
(61, 15, 'Liwa'),
(62, 15, 'Metro'),
(63, 16, 'Ternate'),
(64, 16, 'Tidore Kepulauan'),
(65, 17, 'Ambon'),
(66, 17, 'Tual'),
(67, 18, 'Bima'),
(68, 18, 'Mataram'),
(69, 19, 'Kupang'),
(70, 20, 'Sorong'),
(71, 21, 'Jayapura'),
(72, 22, 'Dumai'),
(73, 22, 'Pekanbaru'),
(74, 23, 'Makassar'),
(75, 23, 'Palopo'),
(76, 23, 'Parepare'),
(77, 24, 'Palu'),
(78, 25, 'Bau-Bau'),
(79, 25, 'Kendari'),
(80, 26, 'Bitung'),
(81, 26, 'Kotamobagu'),
(82, 26, 'Manado'),
(83, 26, 'Tomohon'),
(84, 27, 'Bukittinggi'),
(85, 27, 'Padang'),
(86, 27, 'Padangpanjang'),
(87, 27, 'Pariaman'),
(88, 27, 'Payakumbuh'),
(89, 27, 'Sawahlunto'),
(90, 27, 'Solok'),
(91, 28, 'Lubuklinggau'),
(92, 28, 'Pagaralam'),
(93, 28, 'Palembang'),
(94, 28, 'Prabumulih'),
(95, 30, 'Binjai'),
(96, 30, 'Medan'),
(97, 30, 'Padang Sidempuan'),
(98, 30, 'Pematangsiantar'),
(99, 30, 'Sibolga'),
(100, 30, 'Tanjungbalai'),
(101, 30, 'Tebingtinggi'),
(102, 32, 'Yogyakarta');

-- --------------------------------------------------------

--
-- Table structure for table `nikah`
--

DROP TABLE IF EXISTS `nikah`;
CREATE TABLE IF NOT EXISTS `nikah` (
  `id_jemaat` int NOT NULL,
  `tempat` varchar(50) NOT NULL,
  `nama_pendeta` varchar(50) NOT NULL,
  `tgl_nikah` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nikah`
--

INSERT INTO `nikah` (`id_jemaat`, `tempat`, `nama_pendeta`, `tgl_nikah`) VALUES
(9, '0', '0', '2023-07-27'),
(10, '0', '0', '2023-07-27'),
(11, '0', '0', '2023-07-27'),
(13, '0', '0', '2023-08-30'),
(182, 'Test Nikah', 'Nama Pendata', '2023-09-08'),
(123, 'Tempat Nikah', 'Pendeta Nikah', '2023-09-09'),
(196, 'Test Tempat Nikah', 'Test Pendeta Nikah', '2023-09-09'),
(198, 'TMP', 'PDT', '2023-09-10'),
(199, 'qwert', 'qwe', '2023-09-10'),
(205, '12', '12', '2023-09-10'),
(211, 'ssss', 'sssss', '2023-09-12'),
(1113, 'Temapt', 'Pendeta', '2009-09-16'),
(1126, 'gdfgdfgdg', 'dfgdgdfg', '2023-09-17'),
(1, 'Tempat Nikah', 'Pendeta', '2023-09-25'),
(1136, '00', '0', '2023-10-04'),
(1139, 'salatiga', 'hshshsh', '2023-10-04'),
(1141, 'rtyrty', '', '0000-00-00'),
(1147, 'dsfsfsf', '', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `pekerjaan`
--

DROP TABLE IF EXISTS `pekerjaan`;
CREATE TABLE IF NOT EXISTS `pekerjaan` (
  `id_pekerjaan` int NOT NULL AUTO_INCREMENT,
  `pekerjaan` varchar(100) NOT NULL,
  PRIMARY KEY (`id_pekerjaan`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pekerjaan`
--

INSERT INTO `pekerjaan` (`id_pekerjaan`, `pekerjaan`) VALUES
(1, ' -'),
(2, 'Wiraswasta'),
(3, 'Pelajar'),
(4, 'Mahasiswa'),
(5, 'Ibu Rumah Tangga'),
(6, 'Siswa'),
(7, 'Bidan'),
(8, 'PNS'),
(9, 'Dosen');

-- --------------------------------------------------------

--
-- Table structure for table `pendidikan`
--

DROP TABLE IF EXISTS `pendidikan`;
CREATE TABLE IF NOT EXISTS `pendidikan` (
  `id_pendidikan` int NOT NULL AUTO_INCREMENT,
  `jenis_pendidikan` varchar(50) NOT NULL,
  PRIMARY KEY (`id_pendidikan`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pendidikan`
--

INSERT INTO `pendidikan` (`id_pendidikan`, `jenis_pendidikan`) VALUES
(1, ' -'),
(2, 'SD'),
(3, 'SMP'),
(4, 'SMA'),
(5, 'S1'),
(6, 'Tidak Sekolah'),
(7, 'TK');

-- --------------------------------------------------------

--
-- Table structure for table `periode`
--

DROP TABLE IF EXISTS `periode`;
CREATE TABLE IF NOT EXISTS `periode` (
  `id_periode` int NOT NULL AUTO_INCREMENT,
  `periode_awal` int NOT NULL,
  `periode_akhir` int NOT NULL,
  PRIMARY KEY (`id_periode`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `periode`
--

INSERT INTO `periode` (`id_periode`, `periode_awal`, `periode_akhir`) VALUES
(1, 2023, 2024),
(7, 2020, 2022);

-- --------------------------------------------------------

--
-- Table structure for table `provinsi`
--

DROP TABLE IF EXISTS `provinsi`;
CREATE TABLE IF NOT EXISTS `provinsi` (
  `id_provinsi` int NOT NULL AUTO_INCREMENT,
  `nama_provinsi` varchar(100) NOT NULL,
  PRIMARY KEY (`id_provinsi`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `provinsi`
--

INSERT INTO `provinsi` (`id_provinsi`, `nama_provinsi`) VALUES
(1, ''),
(2, 'Aceh'),
(3, 'Bali'),
(4, 'Bangka Belitung'),
(5, 'Banten'),
(6, 'Bengkulu'),
(7, 'Gorontalo'),
(8, 'Jakarta'),
(9, 'Jambi'),
(10, 'Jawa Barat'),
(11, 'Jawa Tengah'),
(12, 'Jawa Timur'),
(13, 'Kalimantan Barat'),
(14, 'Kalimantan Tengah'),
(15, 'Kalimantan Timur'),
(16, 'Kalimantan Utara'),
(17, 'Kepulauan Riau'),
(18, 'Lampung'),
(19, 'Maluku Utara'),
(20, 'Maluku'),
(21, 'Nusa Tenggara Barat'),
(22, 'Nusa Tenggara Timur'),
(23, 'Papua Barat'),
(24, 'Papua'),
(25, 'Riau'),
(26, 'Sulawesi Selatan'),
(27, 'Sulawesi Tengah'),
(28, 'Sulawesi Tenggara'),
(29, 'Sulawesi Utara'),
(30, 'Sumatera Barat'),
(31, 'Sumatera Selatan'),
(32, 'Sumatera Utara'),
(33, 'Yogyakarta');

-- --------------------------------------------------------

--
-- Table structure for table `sidi`
--

DROP TABLE IF EXISTS `sidi`;
CREATE TABLE IF NOT EXISTS `sidi` (
  `id_jemaat` int NOT NULL,
  `tempat` varchar(50) NOT NULL,
  `nama_pendeta` varchar(50) NOT NULL,
  `tgl_sidi` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sidi`
--

INSERT INTO `sidi` (`id_jemaat`, `tempat`, `nama_pendeta`, `tgl_sidi`) VALUES
(10, '0', '0', '2023-07-27'),
(11, '0', '0', '2023-07-27'),
(12, '0', '0', '2023-07-27'),
(13, '0', '0', '2023-08-30'),
(123, 'Tempat Sidi', 'Pendeta Sidi', '2023-09-09'),
(184, 'Tempat Sidi', 'Pendeta Sidi', '2023-09-09'),
(123, 'Tempat Sidi', 'Pendeta Sidi', '2023-09-09'),
(195, 'kljkljkljklhkhjk', 'hjkhkhjkhjk', '2023-09-09'),
(196, 'Test Tempdat Sidi', 'Nama Pendeta Sidi', '2023-09-09'),
(198, 'TMP', 'PDT', '2023-09-10'),
(199, 'qwew', 'qwer', '2023-09-10'),
(211, 'zxcv', 'zxcv', '2023-09-12'),
(1113, 'Tempat', 'Pendeta', '2017-09-14'),
(1119, '123', '123', '2023-09-16'),
(4, 'asdasdad', '', '2023-10-03'),
(201, 'adsas', '', '2023-10-03'),
(207, 'fsdfsdf', '', '2023-10-03'),
(209, 'sfdsfsfd', '', '2023-10-03'),
(1115, 'dfsdf', '', '2023-10-03'),
(1112, 'sdfsf', '', '2023-10-03'),
(1136, '0', '0', '2023-10-04'),
(1139, 'hahah', '', '2023-10-04');

-- --------------------------------------------------------

--
-- Table structure for table `status_anggota_jemaat`
--

DROP TABLE IF EXISTS `status_anggota_jemaat`;
CREATE TABLE IF NOT EXISTS `status_anggota_jemaat` (
  `id_status_anggota_jemaat` int NOT NULL AUTO_INCREMENT,
  `status_anggota_jemaat` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id_status_anggota_jemaat`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `status_anggota_jemaat`
--

INSERT INTO `status_anggota_jemaat` (`id_status_anggota_jemaat`, `status_anggota_jemaat`) VALUES
(1, '-'),
(2, 'Tetap'),
(3, 'Musafir');

-- --------------------------------------------------------

--
-- Table structure for table `status_keluarga`
--

DROP TABLE IF EXISTS `status_keluarga`;
CREATE TABLE IF NOT EXISTS `status_keluarga` (
  `id_skeluarga` int NOT NULL AUTO_INCREMENT,
  `status_keluarga` varchar(50) NOT NULL,
  PRIMARY KEY (`id_skeluarga`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status_keluarga`
--

INSERT INTO `status_keluarga` (`id_skeluarga`, `status_keluarga`) VALUES
(1, '-'),
(2, 'Kepala Keluarga'),
(3, 'Istri'),
(4, 'Anak'),
(5, 'Cucu'),
(6, 'Orang Tua'),
(7, 'Kakak/Adik'),
(8, 'Menantu'),
(9, 'Famili Lain');

-- --------------------------------------------------------

--
-- Table structure for table `status_pernikahan`
--

DROP TABLE IF EXISTS `status_pernikahan`;
CREATE TABLE IF NOT EXISTS `status_pernikahan` (
  `id_nikah` int NOT NULL AUTO_INCREMENT,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id_nikah`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status_pernikahan`
--

INSERT INTO `status_pernikahan` (`id_nikah`, `status`) VALUES
(1, ' -'),
(2, 'Menikah'),
(3, 'Belum Menikah'),
(4, 'janda'),
(5, 'duda'),
(10, 'Tidak Menikah');

-- --------------------------------------------------------

--
-- Table structure for table `suku`
--

DROP TABLE IF EXISTS `suku`;
CREATE TABLE IF NOT EXISTS `suku` (
  `id_suku` int NOT NULL AUTO_INCREMENT,
  `nama_suku` varchar(255) NOT NULL,
  PRIMARY KEY (`id_suku`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `suku`
--

INSERT INTO `suku` (`id_suku`, `nama_suku`) VALUES
(1, '-'),
(2, 'suku 1'),
(3, 'suku 2'),
(4, 'suku 3'),
(5, 'suku 4'),
(7, 'suku 5'),
(8, 'suku 6');

-- --------------------------------------------------------

--
-- Table structure for table `tb_detail_informasi_gereja`
--

DROP TABLE IF EXISTS `tb_detail_informasi_gereja`;
CREATE TABLE IF NOT EXISTS `tb_detail_informasi_gereja` (
  `id_aset` int NOT NULL AUTO_INCREMENT,
  `id_gereja` int NOT NULL,
  `aset_gereja` varchar(255) NOT NULL,
  PRIMARY KEY (`id_aset`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_detail_usaha`
--

DROP TABLE IF EXISTS `tb_detail_usaha`;
CREATE TABLE IF NOT EXISTS `tb_detail_usaha` (
  `id_usaha` int NOT NULL AUTO_INCREMENT,
  `id_gereja` int NOT NULL,
  `usaha_gereja` varchar(255) NOT NULL,
  PRIMARY KEY (`id_usaha`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tb_detail_usaha`
--

INSERT INTO `tb_detail_usaha` (`id_usaha`, `id_gereja`, `usaha_gereja`) VALUES
(11, 5, 'usaha 3'),
(10, 5, 'usaha 2'),
(6, 5, 'usaha 1');

-- --------------------------------------------------------

--
-- Table structure for table `tb_informasi_gereja`
--

DROP TABLE IF EXISTS `tb_informasi_gereja`;
CREATE TABLE IF NOT EXISTS `tb_informasi_gereja` (
  `id_gereja` int NOT NULL AUTO_INCREMENT,
  `nama_jemaat` varchar(255) NOT NULL,
  `wilayah_pelayanan` varchar(255) NOT NULL,
  `tgl_berdiri` date NOT NULL,
  `status_jemaat` varchar(255) NOT NULL,
  `status_kepemilikan_tanah` varchar(255) NOT NULL,
  `alamat_lengkap` varchar(255) NOT NULL,
  `no_tlp` varchar(25) NOT NULL,
  `email` varchar(255) NOT NULL,
  `luas_area_gereja` int NOT NULL,
  `luas_area_bangunan` int NOT NULL,
  `kondisi_bangunan_gereja` varchar(255) NOT NULL,
  PRIMARY KEY (`id_gereja`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tb_informasi_gereja`
--

INSERT INTO `tb_informasi_gereja` (`id_gereja`, `nama_jemaat`, `wilayah_pelayanan`, `tgl_berdiri`, `status_jemaat`, `status_kepemilikan_tanah`, `alamat_lengkap`, `no_tlp`, `email`, `luas_area_gereja`, `luas_area_bangunan`, `kondisi_bangunan_gereja`) VALUES
(5, 'Nama Jemaat', 'Wilayah Pelayanan Gereja', '2023-10-02', 'Status Jemaat Gereja', 'Status Kepemilikan Tanah Gereja', 'alamat lengkap gereja', '123456789', 'emasil@gmail.com', 123, 4567, 'Kondisi Bangunan Gereja');

-- --------------------------------------------------------

--
-- Table structure for table `tingkatan_jemaat`
--

DROP TABLE IF EXISTS `tingkatan_jemaat`;
CREATE TABLE IF NOT EXISTS `tingkatan_jemaat` (
  `id_tingkatan` int NOT NULL AUTO_INCREMENT,
  `tingkatan` varchar(50) NOT NULL,
  PRIMARY KEY (`id_tingkatan`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tingkatan_jemaat`
--

INSERT INTO `tingkatan_jemaat` (`id_tingkatan`, `tingkatan`) VALUES
(1, '-'),
(2, 'Sekolah Minggu'),
(3, 'Pemuda'),
(4, 'Remaja'),
(7, 'Kaum Ibu');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `username` varchar(15) NOT NULL,
  `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `hash_password` varchar(255) NOT NULL,
  `level` int NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `password`, `hash_password`, `level`) VALUES
('admin', 'admin', '$2b$10$K34gQRtrmJrhxG13GYqHpu1QIeJ1MdOU7IjhSy07wyCAqASwg8GBa', 1),
('admin2', 'admin2', '$2b$10$9Hb4rIkXVkH/13NPIVREgOc/SKQMof6TTJ.svEvMUkOvkHrCYva4i', 1),
('kolom', 'kolom', '$2b$10$KaxfnCnU5hL/g5hRJVengePFPRdRTawDQPdo4tCzkQW8408ZA2Ar.', 3),
('mjh', 'mjh', '$2b$10$6JY6qBbTmObzEvfeTUrdQ.7mb6oISVLO90NyupLvByv1mpau3.jZq', 2),
('q', 'q', '$2b$10$j7mNWOerCb4LuS5vVc6ZR.T9f7bY0N479A1edpNZtUK2Xm7KaBiHK', 1),
('w', 'w', '$2b$10$XP7Vktpn5VVM9Pnno0ug3eEVCICUg8UZPjhc8qeacsl3sShAH4o6O', 3);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
