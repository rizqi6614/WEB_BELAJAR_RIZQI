-- ============================================================================
-- CampusFlow - Skema Basis Data Relasional SQL (MySQL / MariaDB / PostgreSQL)
-- Proyek Dashboard Pengingat Tugas, Jadwal Kuliah & Seminar/Workshop Mahasiswa
-- ============================================================================

CREATE DATABASE IF NOT EXISTS `campusflow_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `campusflow_db`;

-- ----------------------------------------------------------------------------
-- 1. TABEL PROFIL MAHASISWA (`profile`)
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `profile`;
CREATE TABLE `profile` (
  `id` VARCHAR(50) NOT NULL DEFAULT 'main_user',
  `name` VARCHAR(255) NOT NULL DEFAULT 'Ahmad Fauzi',
  `role` VARCHAR(255) NOT NULL DEFAULT 'Teknik Informatika - S1',
  `avatar` VARCHAR(100) NOT NULL DEFAULT 'fa-user-graduate',
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `profile` (`id`, `name`, `role`, `avatar`) VALUES
('main_user', 'Ahmad Fauzi', 'Teknik Informatika - S1', 'fa-user-graduate');

-- ----------------------------------------------------------------------------
-- 2. TABEL JADWAL SEMINAR & WORKSHOP (`seminars`)
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `seminars`;
CREATE TABLE `seminars` (
  `id` VARCHAR(50) NOT NULL,
  `judul` VARCHAR(255) NOT NULL,
  `tipe` ENUM('Workshop', 'Seminar', 'Webinar', 'Sertifikasi') NOT NULL DEFAULT 'Workshop',
  `penyelenggara` VARCHAR(255) DEFAULT NULL,
  `tanggal` DATE NOT NULL,
  `waktu` TIME NOT NULL,
  `lokasi` TEXT NOT NULL,
  `link_sertifikat` TEXT DEFAULT NULL,
  `catatan` TEXT DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_seminar_tanggal` (`tanggal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `seminars` (`id`, `judul`, `tipe`, `penyelenggara`, `tanggal`, `waktu`, `lokasi`, `link_sertifikat`, `catatan`) VALUES
('sem-1', 'Workshop Masterclass AI & Prompt Engineering for Academic Research 🚀', 'Workshop', 'Dr. Ir. Rian Ardiansyah, M.T. (AI Researcher)', CURDATE(), '13:30:00', 'https://zoom.us/j/9876543210 (Passcode: AI2026)', 'https://drive.google.com/drive/folders/workshop-ai-materials', 'Wajib membawa laptop & instalasi VS Code. E-Certificate & SKKM akan dibagikan.'),
('sem-2', 'National Tech Seminar: Future of Modern Web Development & Cloud AI', 'Seminar', 'Agus Pratama (Senior Frontend Architect)', DATE_ADD(CURDATE(), INTERVAL 2 DAY), '09:00:00', 'Auditorium Utama Lt. 3 Kampus A', '', 'Gratis Snack, Lunch Box, dan Sertifikat Cetak.'),
('sem-3', 'Bootcamp & Webinar: Persiapan Karir UI/UX Designer & Portfolio Review 2026', 'Webinar', 'Siti Rahma (Lead Product Designer)', DATE_ADD(CURDATE(), INTERVAL 5 DAY), '19:00:00', 'https://meet.google.com/xyz-abc-def', '', 'Sesi Q&A Interaktif dan Bedah Portfolio.');

-- ----------------------------------------------------------------------------
-- 3. TABEL PENGINGAT TUGAS KULIAH (`tugas`)
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `tugas`;
CREATE TABLE `tugas` (
  `id` VARCHAR(50) NOT NULL,
  `judul` VARCHAR(255) NOT NULL,
  `matkul` VARCHAR(255) NOT NULL,
  `prioritas` ENUM('Tinggi', 'Sedang', 'Rendah') NOT NULL DEFAULT 'Sedang',
  `deadline_date` DATE NOT NULL,
  `deadline_time` TIME NOT NULL DEFAULT '23:59:00',
  `status` ENUM('pending', 'in_progress', 'completed') NOT NULL DEFAULT 'pending',
  `deskripsi` TEXT DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_tugas_deadline` (`deadline_date`, `status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `tugas` (`id`, `judul`, `matkul`, `prioritas`, `deadline_date`, `deadline_time`, `status`, `deskripsi`) VALUES
('tug-1', 'Laporan Praktikum Pemrograman Web II (React & Node.js)', 'Pemrograman Web II', 'Tinggi', DATE_ADD(CURDATE(), INTERVAL 1 DAY), '23:59:00', 'pending', 'Upload file source code (Zip) dan link repository GitHub ke portal LMS Kampus.'),
('tug-2', 'Makalah Analisis Keamanan Sistem Informasi & Enkripsi', 'Keamanan Komputer', 'Sedang', DATE_ADD(CURDATE(), INTERVAL 3 DAY), '17:00:00', 'in_progress', 'Minimal 10 halaman dengan format standar IEEE beserta daftar pustaka.'),
('tug-3', 'Kuis Online Struktur Data & Tree Algoritma', 'Struktur Data', 'Tinggi', CURDATE(), '12:00:00', 'completed', '20 soal pilihan ganda di LMS.');

-- ----------------------------------------------------------------------------
-- 4. TABEL JADWAL PERKULIAHAN MINGGUAN (`jadwal`)
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `jadwal`;
CREATE TABLE `jadwal` (
  `id` VARCHAR(50) NOT NULL,
  `matkul` VARCHAR(255) NOT NULL,
  `hari` ENUM('Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu') NOT NULL,
  `jam_mulai` TIME NOT NULL,
  `jam_selesai` TIME NOT NULL,
  `dosen` VARCHAR(255) DEFAULT NULL,
  `ruangan` VARCHAR(255) DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_jadwal_hari` (`hari`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `jadwal` (`id`, `matkul`, `hari`, `jam_mulai`, `jam_selesai`, `dosen`, `ruangan`) VALUES
('jad-1', 'Algoritma & Pemrograman II', 'Senin', '08:00:00', '10:30:00', 'Dr. Budi Santoso, M.Kom', 'Ruang Lab Komputer 3'),
('jad-2', 'Struktur Data & Algoritma', 'Selasa', '10:00:00', '12:30:00', 'Prof. Tri Wahyuni', 'Ruang Teori 304'),
('jad-3', 'Pemrograman Web II', 'Rabu', '13:00:00', '15:30:00', 'Ir. Eko Prasetyo, M.T.', 'Lab Komputer A'),
('jad-4', 'Keamanan Komputer', 'Kamis', '09:00:00', '11:30:00', 'Dian Pertiwi, M.Kom', 'Ruang 201'),
('jad-5', 'Basis Data Lanjut', 'Jumat', '13:30:00', '16:00:00', 'Farhan Hidayat, M.T.', 'Lab Komputer B'),
('jad-6', 'Bahasa Inggris Akademik', 'Sabtu', '08:30:00', '10:30:00', 'Sarah Jenkins, M.A.', 'Online Zoom Meeting');
