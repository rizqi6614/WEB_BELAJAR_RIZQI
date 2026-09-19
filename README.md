# 🎓 CampusFlow - Student Dashboard & Event Reminder

Aplikasi web modern untuk mahasiswa mengelola pengingat tugas kuliah, jadwal mata kuliah mingguan, serta highlight utama untuk **jadwal Seminar & Workshop harian**.

---

## 🌟 Fitur Utama

- **🔥 Banner Highlight Dashboard ("Jadwal Hari Ini")**: Menampilkan secara otomatis seminar / workshop hari ini di paling atas dashboard lengkap dengan *Countdown Timer Live* dan tombol cepat *Join Zoom/Meeting Link*.
- **🎓 Manajemen Seminar & Workshop**: Pencatatan lengkap webinar, seminar, dan workshop beserta pemateri, lokasi/link meeting, link materi/sertifikat, dan catatan.
- **📝 Pengingat Tugas Kuliah**: Pencatatan tugas dengan indikator prioritas (*Tinggi*, *Sedang*, *Rendah*), filter status pengerjaan, dan alarm mendekati deadline.
- **📅 Jadwal Perkuliahan Mingguan**: Jadwal perkuliahan Senin - Minggu lengkap dengan waktu, dosen pengampu, dan ruangan.
- **☁️ Cloud Database Sync (Firebase Firestore)**: Tersimpan otomatis di cloud online sehingga tidak hilang saat dideploy ke **GitHub Pages** atau diakses dari perangkat berbeda.
- **💾 Dual Storage Engine**: Tetap berfungsi lancar di mode offline (LocalStorage) jika koneksi internet terputus.
- **🎨 Glassmorphic Premium Design**: Fitur pengganti tema Dark Mode & Light Mode yang nyaman di mata.

---

## 🚀 Cara Deploy ke GitHub Pages (100% Gratis)

Ikuti langkah mudah ini untuk mendeploy website ini ke GitHub Pages agar bisa diakses oleh siapa saja:

### Langkah 1: Push Project ke GitHub Repository
1. Buka [GitHub.com](https://github.com) dan buat repository baru (misal: `campusflow`).
2. Jalankan perintah berikut di terminal folder project ini:
   ```bash
   git init
   git add .
   git commit -m "Initial commit CampusFlow"
   git branch -M main
   git remote add origin https://github.com/USERNAME-ANDA/campusflow.git
   git push -u origin main
   ```

### Langkah 2: Aktifkan GitHub Pages
1. Masuk ke halaman Repository GitHub Anda.
2. Klik tab **Settings** -> **Pages**.
3. Di bagian **Source**, pilih branch `main` dan folder `/ (root)`.
4. Klik **Save**. Dalam 1-2 menit, link website Anda akan aktif di:
   `https://USERNAME-ANDA.github.io/campusflow/`

---

## ☁️ Cara Menghubungkan Firebase Cloud Database (Gratis Selamanya)

Agar data seminar & tugas tersimpan permanen di cloud dan bisa diakses dari HP/Laptop Anda:

1. Buka [Firebase Console](https://console.firebase.google.com/) dan login dengan akun Google Anda.
2. Klik **Add Project** (Tambah Proyek), beri nama misal `campusflow-db`, lalu ikuti langkah hingga selesai.
3. Di halaman utama proyek Firebase Anda, klik icon **Web (`</>`)** untuk membuat Web App.
4. Salin kode `firebaseConfig` yang muncul. Contohnya:
   ```js
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "campusflow-db.firebaseapp.com",
     projectId: "campusflow-db",
     storageBucket: "campusflow-db.appspot.com",
     appId: "1:12345:web:abcde"
   };
   ```
5. Buka tab **Build** -> **Firestore Database** di menu kiri Firebase Console.
6. Klik **Create Database**, pilih lokasi (misal: `asia-southeast1`), lalu pilih **Start in test mode** (Mode Uji). Klik **Enable**.
7. Sekarang buka website CampusFlow Anda (baik di local maupun di link GitHub Pages).
8. Klik icon **Pengaturan (Gear)** atau status **Cloud Sync** di sidebar kiri.
9. Masukkan nilai `apiKey`, `authDomain`, `projectId`, `storageBucket`, dan `appId` dari Firebase Anda ke dalam form, lalu klik **Simpan Firebase Config**.
10. Selesai! Status akan berubah menjadi **Cloud Sync Active ☁️** dan seluruh data Anda aman tersimpan di cloud!

---

## 🛠️ Teknologi Yang Digunakan

- **Frontend**: HTML5, Vanilla CSS3 (Custom Variables, Flexbox/Grid, Glassmorphic System), Modern JavaScript ES6+
- **Icons & Fonts**: FontAwesome 6, Google Fonts (*Inter* & *Plus Jakarta Sans*)
- **Database**: Firebase Firestore (Web SDK v10 Modular via CDN) & LocalStorage API
