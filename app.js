/* ==========================================================================
   CampusFlow - App Logic with Web Notifications & Editable Student Profile
   ========================================================================== */

document.addEventListener('DOMContentLoaded', async () => {
    // Current System Date (Dynamic based on browser / system time)
    const now = new Date();
    
    // Formatting Helper Functions
    const formatIndonesianDate = (dateObj) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return dateObj.toLocaleDateString('id-ID', options);
    };

    const getFormattedDateString = (dateObj) => {
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const getDayNameIndonesian = (dateObj) => {
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        return days[dateObj.getDay()];
    };

    const todayStr = getFormattedDateString(now);
    const todayDayName = getDayNameIndonesian(now);

    // Initial Sample Data Generator
    const getInitialSampleData = () => {
        const addDays = (d, days) => {
            const result = new Date(d);
            result.setDate(result.getDate() + days);
            return getFormattedDateString(result);
        };

        return {
            profile: {
                name: 'Ahmad Fauzi',
                role: 'Teknik Informatika - S1',
                avatar: 'fa-user-graduate'
            },
            seminars: [
                {
                    id: 'sem-1',
                    judul: 'Workshop Masterclass AI & Prompt Engineering for Academic Research 🚀',
                    tipe: 'Workshop',
                    penyelenggara: 'Dr. Ir. Rian Ardiansyah, M.T. (AI Researcher)',
                    tanggal: todayStr, // HARI INI
                    waktu: '13:30',
                    lokasi: 'https://zoom.us/j/9876543210 (Passcode: AI2026)',
                    linkSertifikat: 'https://drive.google.com/drive/folders/workshop-ai-materials',
                    catatan: 'Wajib membawa laptop & instalasi VS Code. E-Certificate & SKKM akan dibagikan.'
                },
                {
                    id: 'sem-2',
                    judul: 'National Tech Seminar: Future of Modern Web Development & Cloud AI',
                    tipe: 'Seminar',
                    penyelenggara: 'Agus Pratama (Senior Frontend Architect)',
                    tanggal: addDays(now, 2),
                    waktu: '09:00',
                    lokasi: 'Auditorium Utama Lt. 3 Kampus A',
                    linkSertifikat: '',
                    catatan: 'Gratis Snack, Lunch Box, dan Sertifikat Cetak.'
                },
                {
                    id: 'sem-3',
                    judul: 'Bootcamp & Webinar: Persiapan Karir UI/UX Designer & Portfolio Review 2026',
                    tipe: 'Webinar',
                    penyelenggara: 'Siti Rahma (Lead Product Designer)',
                    tanggal: addDays(now, 5),
                    waktu: '19:00',
                    lokasi: 'https://meet.google.com/xyz-abc-def',
                    linkSertifikat: '',
                    catatan: 'Sesi Q&A Interaktif dan Bedah Portfolio.'
                }
            ],
            tugas: [
                {
                    id: 'tug-1',
                    judul: 'Laporan Praktikum Pemrograman Web II (React & Node.js)',
                    matkul: 'Pemrograman Web II',
                    prioritas: 'Tinggi',
                    deadlineDate: addDays(now, 1),
                    deadlineTime: '23:59',
                    status: 'pending',
                    deskripsi: 'Upload file source code (Zip) dan link repository GitHub ke portal LMS Kampus.'
                },
                {
                    id: 'tug-2',
                    judul: 'Makalah Analisis Keamanan Sistem Informasi & Enkripsi',
                    matkul: 'Keamanan Komputer',
                    prioritas: 'Sedang',
                    deadlineDate: addDays(now, 3),
                    deadlineTime: '17:00',
                    status: 'in_progress',
                    deskripsi: 'Minimal 10 halaman dengan format standar IEEE beserta daftar pustaka.'
                },
                {
                    id: 'tug-3',
                    judul: 'Kuis Online Struktur Data & Tree Algoritma',
                    matkul: 'Struktur Data',
                    prioritas: 'Tinggi',
                    deadlineDate: todayStr,
                    deadlineTime: '12:00',
                    status: 'completed',
                    deskripsi: '20 soal pilihan ganda di LMS.'
                }
            ],
            jadwal: [
                {
                    id: 'jad-1',
                    matkul: 'Algoritma & Pemrograman II',
                    hari: 'Senin',
                    jamMulai: '08:00',
                    jamSelesai: '10:30',
                    dosen: 'Dr. Budi Santoso, M.Kom',
                    ruangan: 'Ruang Lab Komputer 3'
                },
                {
                    id: 'jad-2',
                    matkul: 'Struktur Data & Algoritma',
                    hari: 'Selasa',
                    jamMulai: '10:00',
                    jamSelesai: '12:30',
                    dosen: 'Prof. Tri Wahyuni',
                    ruangan: 'Ruang Teori 304'
                },
                {
                    id: 'jad-3',
                    matkul: 'Pemrograman Web II',
                    hari: 'Rabu',
                    jamMulai: '13:00',
                    jamSelesai: '15:30',
                    dosen: 'Ir. Eko Prasetyo, M.T.',
                    ruangan: 'Lab Komputer A'
                },
                {
                    id: 'jad-4',
                    matkul: 'Keamanan Komputer',
                    hari: 'Kamis',
                    jamMulai: '09:00',
                    jamSelesai: '11:30',
                    dosen: 'Dian Pertiwi, M.Kom',
                    ruangan: 'Ruang 201'
                },
                {
                    id: 'jad-5',
                    matkul: 'Basis Data Lanjut',
                    hari: 'Jumat',
                    jamMulai: '13:30',
                    jamSelesai: '16:00',
                    dosen: 'Farhan Hidayat, M.T.',
                    ruangan: 'Lab Komputer B'
                },
                {
                    id: 'jad-6',
                    matkul: 'Bahasa Inggris Akademik',
                    hari: 'Sabtu',
                    jamMulai: '08:30',
                    jamSelesai: '10:30',
                    dosen: 'Sarah Jenkins, M.A.',
                    ruangan: 'Online Zoom Meeting'
                }
            ]
        };
    };

    // Application State Management
    let state = {
        profile: {
            name: 'Ahmad Fauzi',
            role: 'Teknik Informatika - S1',
            avatar: 'fa-user-graduate'
        },
        seminars: [],
        tugas: [],
        jadwal: [],
        activeTab: 'dashboard',
        activeSeminarFilter: 'all',
        activeSeminarType: 'all',
        activeTugasFilter: 'all',
        activeTugasPriority: 'all',
        selectedDay: todayDayName,
        searchQuery: ''
    };

    // ==========================================================================
    // NOTIFICATION ENGINE (WEB NOTIFICATION API & ALARM CHECKER)
    // ==========================================================================
    let notifiedIds = new Set();

    const updateNotifBtnUI = () => {
        const btnIcon = document.getElementById('notif-btn-icon');
        const btnText = document.getElementById('notif-btn-text');
        const btn = document.getElementById('btn-toggle-notif');

        if (!btnIcon || !btnText || !btn) return;

        if ('Notification' in window && Notification.permission === 'granted') {
            btnIcon.className = 'fa-solid fa-bell text-green';
            btnText.textContent = 'Notifikasi Aktif 🔔';
            btn.title = 'Notifikasi HP / Browser sudah Aktif';
        } else if ('Notification' in window && Notification.permission === 'denied') {
            btnIcon.className = 'fa-solid fa-bell-slash text-pink';
            btnText.textContent = 'Notifikasi Ditolak 🚫';
            btn.title = 'Izin Notifikasi Ditolak di Browser';
        } else {
            btnIcon.className = 'fa-solid fa-bell-slash';
            btnText.textContent = 'Aktifkan Notifikasi HP';
            btn.title = 'Klik untuk mengaktifkan notifikasi pop-up HP';
        }
    };

    const requestNotificationPermission = async () => {
        if (!('Notification' in window)) {
            alert('Browser ini tidak mendukung Web Notifications API.');
            return;
        }

        const permission = await Notification.requestPermission();
        updateNotifBtnUI();

        if (permission === 'granted') {
            sendNativeNotification('Notifikasi CampusFlow Aktif! 🔔', 'Anda akan menerima pengingat otomatis untuk seminar, workshop, dan tugas perkuliahan.');
            showToast('Izin Notifikasi HP berhasil diaktifkan! 🎉', 'success');
        } else {
            showToast('Izin notifikasi ditolak oleh sistem browser.', 'danger');
        }
    };

    const sendNativeNotification = (title, body, iconUrl = '') => {
        if ('Notification' in window && Notification.permission === 'granted') {
            try {
                const options = {
                    body: body,
                    icon: iconUrl || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
                    vibrate: [200, 100, 200],
                    tag: 'campusflow-notification'
                };
                new Notification(title, options);
            } catch (err) {
                console.warn('Native notification execution error:', err);
            }
        }
    };

    // Background Schedule Checker (Runs every 30 seconds)
    const checkScheduleNotifications = () => {
        const currentDateStr = getFormattedDateString(new Date());
        const currentHours = String(new Date().getHours()).padStart(2, '0');
        const currentMins = String(new Date().getMinutes()).padStart(2, '0');
        const currentTimeStr = `${currentHours}:${currentMins}`;

        // Check Seminars & Workshops TODAY
        state.seminars.forEach(s => {
            if (s.tanggal === currentDateStr) {
                const notifKey = `sem-${s.id}-${currentTimeStr}`;
                if (!notifiedIds.has(notifKey)) {
                    if (s.waktu === currentTimeStr) {
                        sendNativeNotification(
                            `🚨 SEKARANG: ${s.tipe.toUpperCase()}!`,
                            `${s.judul} dimulai sekarang (${s.waktu} WIB). Lokasi: ${s.lokasi}`
                        );
                        notifiedIds.add(notifKey);
                    }
                }
            }
        });

        // Check Urgent Tasks TODAY
        state.tugas.filter(t => t.status !== 'completed').forEach(t => {
            if (t.deadlineDate === currentDateStr) {
                const notifKey = `tug-${t.id}-${currentTimeStr}`;
                if (!notifiedIds.has(notifKey)) {
                    if (t.deadlineTime === currentTimeStr) {
                        sendNativeNotification(
                            `🔥 DEADLINE TUGAS: ${t.matkul}!`,
                            `Tugas "${t.judul}" harus dikumpulkan sekarang (${t.deadlineTime} WIB)!`
                        );
                        notifiedIds.add(notifKey);
                    }
                }
            }
        });
    };

    setInterval(checkScheduleNotifications, 30000);

    // ==========================================================================
    // FIREBASE CLOUD DATABASE SERVICE INTEGRATION
    // ==========================================================================
    let db = null;
    let isCloudConnected = false;
    let fbDoc = null, fbSetDoc = null, fbDeleteDoc = null, fbGetDocs = null, fbCollection = null;

    const defaultFirebaseConfig = {
        apiKey: "AIzaSyDql30jY-BOeDY_CTkpCaIYKsGXHcxJjV4",
        authDomain: "web-belajar-2d77c.firebaseapp.com",
        projectId: "web-belajar-2d77c",
        storageBucket: "web-belajar-2d77c.firebasestorage.app",
        messagingSenderId: "749453715954",
        appId: "1:749453715954:web:91335d958fe0b1bd60a36b",
        measurementId: "G-YY28SLXB99"
    };

    let fbOnSnapshot = null;

    const initFirebaseCloud = async () => {
        const savedConfigStr = localStorage.getItem('campusflow_firebase_config');
        let fbConfig = null;

        if (savedConfigStr) {
            try { fbConfig = JSON.parse(savedConfigStr); } catch (e) { fbConfig = null; }
        }

        if (!fbConfig || !fbConfig.apiKey || fbConfig.apiKey.length < 20) {
            fbConfig = defaultFirebaseConfig;
            localStorage.setItem('campusflow_firebase_config', JSON.stringify(defaultFirebaseConfig));
        }

        if (fbConfig) {
            const apiEl = document.getElementById('fb-apiKey');
            if (apiEl) apiEl.value = fbConfig.apiKey || '';
            const authEl = document.getElementById('fb-authDomain');
            if (authEl) authEl.value = fbConfig.authDomain || '';
            const projEl = document.getElementById('fb-projectId');
            if (projEl) projEl.value = fbConfig.projectId || '';
            const storeEl = document.getElementById('fb-storageBucket');
            if (storeEl) storeEl.value = fbConfig.storageBucket || '';
            const appEl = document.getElementById('fb-appId');
            if (appEl) appEl.value = fbConfig.appId || '';
        }

        // ALWAYS load local data first for instant UI rendering
        loadFromLocalStorage();

        if (fbConfig && fbConfig.projectId && fbConfig.apiKey) {
            try {
                const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js');
                const { getFirestore, doc, setDoc, deleteDoc, getDocs, collection, onSnapshot } = await import('https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js');

                const app = initializeApp(fbConfig);
                db = getFirestore(app);

                fbDoc = doc;
                fbSetDoc = setDoc;
                fbDeleteDoc = deleteDoc;
                fbGetDocs = getDocs;
                fbCollection = collection;
                fbOnSnapshot = onSnapshot;

                isCloudConnected = true;
                updateDBStatusUI(true, 'Cloud Sync Active ☁️');
                
                // Enable Realtime Snapshots Listener across devices
                setupRealtimeListeners();
                return;
            } catch (err) {
                console.warn('Firebase Cloud connection failed, falling back to Local Storage:', err);
                isCloudConnected = false;
                updateDBStatusUI(false, 'Local Storage Mode');
            }
        } else {
            isCloudConnected = false;
            updateDBStatusUI(false, 'Local Storage Mode');
        }
    };

    // Deleted Items Tracker to prevent stale remote snapshots from resurrecting deleted items
    let deletedIds = new Set(JSON.parse(localStorage.getItem('campusflow_deleted_ids') || '[]'));

    const markAsDeleted = (id) => {
        deletedIds.add(id);
        localStorage.setItem('campusflow_deleted_ids', JSON.stringify(Array.from(deletedIds)));
    };

    const mergeSmartList = (localList, remoteList) => {
        const map = new Map();
        // Add local items first
        (localList || []).forEach(item => {
            if (item && item.id && !deletedIds.has(item.id)) {
                map.set(item.id, item);
            }
        });
        // Add remote items (overwrites local if updated, unless deleted)
        (remoteList || []).forEach(item => {
            if (item && item.id && !deletedIds.has(item.id)) {
                map.set(item.id, item);
            }
        });
        return Array.from(map.values());
    };

    // Realtime Cloud Listener Engine with Smart Union Merge
    const setupRealtimeListeners = () => {
        if (!db || !fbOnSnapshot) return;
        try {
            fbOnSnapshot(fbCollection(db, 'seminars'), (snapshot) => {
                const list = [];
                snapshot.forEach(doc => list.push(doc.data()));
                state.seminars = mergeSmartList(state.seminars, list);
                saveToLocalStorage();
                renderAll();
            });

            fbOnSnapshot(fbCollection(db, 'tugas'), (snapshot) => {
                const list = [];
                snapshot.forEach(doc => list.push(doc.data()));
                state.tugas = mergeSmartList(state.tugas, list);
                saveToLocalStorage();
                renderAll();
            });

            fbOnSnapshot(fbCollection(db, 'jadwal'), (snapshot) => {
                const list = [];
                snapshot.forEach(doc => list.push(doc.data()));
                state.jadwal = mergeSmartList(state.jadwal, list);
                saveToLocalStorage();
                renderAll();
            });
        } catch (e) {
            console.warn('Realtime snapshot listener notice:', e);
        }
    };

    const updateDBStatusUI = (connected, text) => {
        const pill = document.getElementById('db-status-pill');
        const dot = document.getElementById('status-dot');
        const textElem = document.getElementById('db-status-text');
        const badgeElem = document.getElementById('firebase-status-badge');

        if (connected) {
            dot.className = 'status-dot green';
            pill.style.borderColor = 'rgba(16, 185, 129, 0.3)';
            pill.style.background = 'rgba(16, 185, 129, 0.1)';
            textElem.textContent = text;
            badgeElem.textContent = 'Cloud Connected 🟢';
            badgeElem.className = 'badge badge-green';
        } else {
            dot.className = 'status-dot yellow';
            pill.style.borderColor = 'rgba(245, 158, 11, 0.3)';
            pill.style.background = 'rgba(245, 158, 11, 0.1)';
            textElem.textContent = text;
            badgeElem.textContent = 'LocalStorage Mode (Belum Konek Cloud)';
            badgeElem.className = 'badge badge-orange';
        }
    };

    // Load Data from Firebase Firestore (Merge Smartly with Local Data)
    const loadFromFirebase = async () => {
        if (!db) return;
        try {
            const semSnap = await fbGetDocs(fbCollection(db, 'seminars'));
            const tugSnap = await fbGetDocs(fbCollection(db, 'tugas'));
            const jadSnap = await fbGetDocs(fbCollection(db, 'jadwal'));

            const fetchedSeminars = [];
            semSnap.forEach(d => fetchedSeminars.push(d.data()));

            const fetchedTugas = [];
            tugSnap.forEach(d => fetchedTugas.push(d.data()));

            const fetchedJadwal = [];
            jadSnap.forEach(d => fetchedJadwal.push(d.data()));

            if (fetchedSeminars.length > 0) state.seminars = mergeSmartList(state.seminars, fetchedSeminars);
            if (fetchedTugas.length > 0) state.tugas = mergeSmartList(state.tugas, fetchedTugas);
            if (fetchedJadwal.length > 0) state.jadwal = mergeSmartList(state.jadwal, fetchedJadwal);
            
            saveToLocalStorage();
            await syncAllToCloud();
            renderAll();
        } catch (e) {
            console.error('Error fetching from Firestore:', e);
            renderAll();
        }
    };

    const loadFromLocalStorage = () => {
        const stored = localStorage.getItem('campusflow_data');
        const storedProfile = localStorage.getItem('campusflow_profile');

        if (storedProfile) {
            try { state.profile = JSON.parse(storedProfile); } catch (e) {}
        }

        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                state.seminars = (parsed.seminars || []).filter(item => !deletedIds.has(item.id));
                state.tugas = (parsed.tugas || []).filter(item => !deletedIds.has(item.id));
                state.jadwal = (parsed.jadwal || []).filter(item => !deletedIds.has(item.id));
            } catch (e) {
                const initial = getInitialSampleData();
                state.seminars = initial.seminars;
                state.tugas = initial.tugas;
                state.jadwal = initial.jadwal;
                state.profile = initial.profile;
                saveToLocalStorage();
            }
        } else {
            // First time launch -> seed sample data
            const initial = getInitialSampleData();
            state.seminars = initial.seminars;
            state.tugas = initial.tugas;
            state.jadwal = initial.jadwal;
            state.profile = initial.profile;
            saveToLocalStorage();
        }
        renderAll();
    };

    const saveToLocalStorage = () => {
        localStorage.setItem('campusflow_data', JSON.stringify({
            seminars: state.seminars.filter(item => !deletedIds.has(item.id)),
            tugas: state.tugas.filter(item => !deletedIds.has(item.id)),
            jadwal: state.jadwal.filter(item => !deletedIds.has(item.id))
        }));
        localStorage.setItem('campusflow_profile', JSON.stringify(state.profile));
    };

    const saveItemToCloud = async (collectionName, item) => {
        // If it was previously marked as deleted, unmark it
        if (deletedIds.has(item.id)) {
            deletedIds.delete(item.id);
            localStorage.setItem('campusflow_deleted_ids', JSON.stringify(Array.from(deletedIds)));
        }

        saveToLocalStorage();
        if (isCloudConnected && db) {
            try {
                await fbSetDoc(fbDoc(db, collectionName, item.id), item);
            } catch (e) {
                console.error(`Error saving to Firestore collection ${collectionName}:`, e);
            }
        }
        renderAll();
    };

    const deleteItemFromCloud = async (collectionName, id) => {
        markAsDeleted(id);
        saveToLocalStorage();
        if (isCloudConnected && db) {
            try {
                await fbDeleteDoc(fbDoc(db, collectionName, id));
            } catch (e) {
                console.error(`Error deleting from Firestore collection ${collectionName}:`, e);
            }
        }
        renderAll();
    };

    const syncAllToCloud = async () => {
        if (!isCloudConnected || !db) return;
        for (const s of state.seminars) await fbSetDoc(fbDoc(db, 'seminars', s.id), s);
        for (const t of state.tugas) await fbSetDoc(fbDoc(db, 'tugas', t.id), t);
        for (const j of state.jadwal) await fbSetDoc(fbDoc(db, 'jadwal', j.id), j);
        await fbSetDoc(fbDoc(db, 'settings', 'profile'), state.profile);
    };

    // Save Firebase Config Form Handler
    const formFbConfig = document.getElementById('form-firebase-config');
    if (formFbConfig) {
        formFbConfig.addEventListener('submit', async (e) => {
            e.preventDefault();
            const config = {
                apiKey: document.getElementById('fb-apiKey')?.value.trim() || '',
                authDomain: document.getElementById('fb-authDomain')?.value.trim() || '',
                projectId: document.getElementById('fb-projectId')?.value.trim() || '',
                storageBucket: document.getElementById('fb-storageBucket')?.value.trim() || '',
                appId: document.getElementById('fb-appId')?.value.trim() || ''
            };

            if (!config.apiKey || !config.projectId) {
                alert('Harap isi minimal API Key dan Project ID Firebase Anda!');
                return;
            }

            localStorage.setItem('campusflow_firebase_config', JSON.stringify(config));
            showToast('Konfigurasi Firebase tersimpan! Menghubungkan ke Cloud...', 'info');
            closeModal('modal-settings');
            await initFirebaseCloud();
        });
    }

    // Toast Notification System
    const showToast = (message, type = 'info') => {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        let iconClass = 'fa-info-circle text-purple';
        if (type === 'success') iconClass = 'fa-circle-check text-green';
        if (type === 'danger') iconClass = 'fa-triangle-exclamation text-pink';

        toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    };

    // ==========================================================================
    // RENDER ENGINE & PROFILE DISPLAY
    // ==========================================================================

    const renderProfile = () => {
        const name = state.profile.name || 'Mahasiswa Aktif';
        const role = state.profile.role || 'Teknik Informatika';
        const avatar = state.profile.avatar || 'fa-user-graduate';

        const nameElem = document.getElementById('sidebar-user-name');
        const roleElem = document.getElementById('sidebar-user-role');
        const avatarIconElem = document.getElementById('sidebar-avatar-icon');
        const greetingElem = document.getElementById('greeting-text');

        if (nameElem) nameElem.textContent = name;
        if (roleElem) roleElem.textContent = role;
        if (avatarIconElem) avatarIconElem.className = `fa-solid ${avatar}`;

        const firstName = name.split(' ')[0];
        if (greetingElem) greetingElem.textContent = `Selamat Datang, ${firstName}! 👋`;
    };

    const renderAll = () => {
        renderProfile();
        updateDateDisplays();
        renderHeroBanner();
        renderStats();
        renderDashboardToday();
        renderDashboardUrgentTasks();
        renderDashboardUpcomingSeminars();
        renderSeminarGrid();
        renderTugasList();
        renderJadwalList();
        updateBadges();
        updateNotifBtnUI();
    };

    // Header Dates
    const updateDateDisplays = () => {
        document.getElementById('full-date-display').innerHTML = `<i class="fa-regular fa-calendar"></i> ${formatIndonesianDate(now)}`;
        document.getElementById('today-name-badge').textContent = `Hari Ini (${todayDayName})`;
    };

    // Badges in Sidebar & Mobile Nav
    const updateBadges = () => {
        const todaySeminars = state.seminars.filter(s => s.tanggal === todayStr);
        const pendingTugas = state.tugas.filter(t => t.status !== 'completed');
        
        const semBadge = document.getElementById('seminar-count-badge');
        const mobSemBadge = document.getElementById('mobile-seminar-badge');
        const semText = todaySeminars.length > 0 ? `${todaySeminars.length} HARI INI` : state.seminars.length;
        if (semBadge) semBadge.textContent = semText;
        if (mobSemBadge) mobSemBadge.textContent = todaySeminars.length > 0 ? `${todaySeminars.length}` : state.seminars.length;

        if (semBadge) {
            if (todaySeminars.length > 0) semBadge.classList.add('alert');
            else semBadge.classList.remove('alert');
        }

        const tugBadge = document.getElementById('tugas-count-badge');
        const mobTugBadge = document.getElementById('mobile-tugas-badge');
        if (tugBadge) tugBadge.textContent = pendingTugas.length;
        if (mobTugBadge) mobTugBadge.textContent = pendingTugas.length;
    };

    // HERO BANNER RENDERER (PRIORITAS SEMINAR & WORKSHOP HARI INI)
    let countdownInterval = null;

    const renderHeroBanner = () => {
        const heroContainer = document.getElementById('hero-today-banner');
        
        const todaySeminars = state.seminars.filter(s => s.tanggal === todayStr);
        const upcomingSeminars = state.seminars
            .filter(s => s.tanggal >= todayStr)
            .sort((a, b) => (a.tanggal + a.waktu).localeCompare(b.tanggal + b.waktu));

        if (todaySeminars.length > 0) {
            const featuredEvent = todaySeminars[0];
            const isZoom = featuredEvent.lokasi.toLowerCase().includes('http') || featuredEvent.lokasi.toLowerCase().includes('zoom') || featuredEvent.lokasi.toLowerCase().includes('meet');
            
            heroContainer.className = 'hero-banner';
            heroContainer.innerHTML = `
                <div class="hero-content">
                    <div class="hero-top-tag">
                        <i class="fa-solid fa-fire"></i> JADWAL HARI INI: ${featuredEvent.tipe.toUpperCase()}
                    </div>
                    <div class="hero-body">
                        <div class="hero-info">
                            <h2>${featuredEvent.judul}</h2>
                            <div class="hero-details">
                                <span><i class="fa-solid fa-clock"></i> Pukul ${featuredEvent.waktu} WIB</span>
                                <span><i class="fa-solid fa-user"></i> ${featuredEvent.penyelenggara || 'Panitia / Kampus'}</span>
                                <span><i class="fa-solid ${isZoom ? 'fa-video' : 'fa-location-dot'}"></i> ${featuredEvent.lokasi}</span>
                            </div>
                        </div>
                        <div class="countdown-box">
                            <div>
                                <div class="countdown-title">Mulai Dalam</div>
                                <div class="countdown-digits" id="live-hero-timer">00 : 00 : 00</div>
                            </div>
                        </div>
                    </div>
                    <div class="hero-actions">
                        ${isZoom ? `<a href="${featuredEvent.lokasi.split(' ')[0]}" target="_blank" class="btn btn-purple"><i class="fa-solid fa-video"></i> Buka Link Meeting / Zoom</a>` : ''}
                        ${featuredEvent.linkSertifikat ? `<a href="${featuredEvent.linkSertifikat}" target="_blank" class="btn btn-secondary"><i class="fa-solid fa-folder-open"></i> Material / Link</a>` : ''}
                        <button class="btn btn-secondary switch-tab" data-target="seminar"><i class="fa-solid fa-eye"></i> Detail Event</button>
                    </div>
                </div>
            `;

            startLiveCountdown(featuredEvent.tanggal, featuredEvent.waktu);

        } else if (upcomingSeminars.length > 0) {
            const nextEvent = upcomingSeminars[0];
            const eventDate = new Date(nextEvent.tanggal + 'T' + nextEvent.waktu);
            const dateFormatted = eventDate.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' });
            const isZoom = nextEvent.lokasi.toLowerCase().includes('http') || nextEvent.lokasi.toLowerCase().includes('zoom');

            heroContainer.className = 'hero-banner empty-today';
            heroContainer.innerHTML = `
                <div class="hero-content">
                    <div class="hero-top-tag">
                        <i class="fa-solid fa-calendar-check"></i> EVENT MENDATANG TERDEKAT
                    </div>
                    <div class="hero-body">
                        <div class="hero-info">
                            <h2>${nextEvent.judul}</h2>
                            <div class="hero-details">
                                <span><i class="fa-solid fa-calendar-day"></i> ${dateFormatted} (${nextEvent.waktu} WIB)</span>
                                <span><i class="fa-solid fa-user"></i> ${nextEvent.penyelenggara || 'Penyelenggara'}</span>
                                <span><i class="fa-solid ${isZoom ? 'fa-video' : 'fa-location-dot'}"></i> ${nextEvent.lokasi}</span>
                            </div>
                        </div>
                    </div>
                    <div class="hero-actions">
                        <button class="btn btn-primary switch-tab" data-target="seminar"><i class="fa-solid fa-chalkboard-user"></i> Lihat Semua Workshop & Seminar</button>
                    </div>
                </div>
            `;
            if (countdownInterval) clearInterval(countdownInterval);

        } else {
            heroContainer.className = 'hero-banner empty-today';
            heroContainer.innerHTML = `
                <div class="hero-content">
                    <div class="hero-top-tag"><i class="fa-solid fa-info-circle"></i> TIPS PENGINGAT MAHASISWA</div>
                    <div class="hero-body">
                        <div class="hero-info">
                            <h2>Belum Ada Jadwal Seminar / Workshop Hari Ini</h2>
                            <p class="section-desc">Tambahkan jadwal seminar, workshop, atau webinar pengembangan diri Anda agar tidak ketinggalan!</p>
                        </div>
                    </div>
                    <div class="hero-actions">
                        <button class="btn btn-purple" id="btn-hero-add-seminar"><i class="fa-solid fa-plus"></i> Tambah Seminar Baru</button>
                    </div>
                </div>
            `;
            if (countdownInterval) clearInterval(countdownInterval);
            document.getElementById('btn-hero-add-seminar')?.addEventListener('click', () => openModal('modal-seminar'));
        }
    };

    const startLiveCountdown = (dateStr, timeStr) => {
        if (countdownInterval) clearInterval(countdownInterval);
        const targetTime = new Date(`${dateStr}T${timeStr}:00`).getTime();

        const updateTimer = () => {
            const nowTime = new Date().getTime();
            const diff = targetTime - nowTime;

            const timerElem = document.getElementById('live-hero-timer');
            if (!timerElem) return;

            if (diff <= 0) {
                timerElem.textContent = 'BERLANGSUNG!';
                timerElem.style.color = '#10b981';
                return;
            }

            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            timerElem.textContent = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
        };

        updateTimer();
        countdownInterval = setInterval(updateTimer, 1000);
    };

    // STATS OVERVIEW CARDS
    const renderStats = () => {
        const todaySeminars = state.seminars.filter(s => s.tanggal === todayStr);
        const pendingTugas = state.tugas.filter(t => t.status !== 'completed');
        const completedTugas = state.tugas.filter(t => t.status === 'completed');
        const urgentTugas = pendingTugas.filter(t => t.prioritas === 'Tinggi' || t.deadlineDate <= todayStr);
        const todayClasses = state.jadwal.filter(j => j.hari === todayDayName);

        document.getElementById('stat-total-seminar').textContent = `${state.seminars.length} Event`;
        document.getElementById('stat-today-seminar').textContent = `${todaySeminars.length} event hari ini`;

        document.getElementById('stat-pending-tugas').textContent = `${pendingTugas.length} Tugas`;
        document.getElementById('stat-urgent-tugas').textContent = `${urgentTugas.length} tugas mendesak`;

        document.getElementById('stat-today-classes').textContent = `${todayClasses.length} Matkul`;
        document.getElementById('stat-next-class').textContent = todayClasses.length > 0 ? `Matkul hari ${todayDayName}` : 'Libur hari ini 🎉';

        const totalTugas = state.tugas.length;
        const progressPct = totalTugas > 0 ? Math.round((completedTugas.length / totalTugas) * 100) : 0;
        document.getElementById('stat-completed-tugas').textContent = `${completedTugas.length}/${totalTugas}`;
        document.getElementById('stat-progress-bar').style.width = `${progressPct}%`;
    };

    // DASHBOARD TODAY COMBINED SCHEDULE LIST
    const renderDashboardToday = () => {
        const container = document.getElementById('dashboard-today-list');
        
        const todaySeminars = state.seminars
            .filter(s => s.tanggal === todayStr)
            .map(s => ({
                type: 'seminar',
                title: s.judul,
                timeStart: s.waktu,
                timeEnd: 'Event',
                sub: `Penyelenggara: ${s.penyelenggara || 'Kampus'}`,
                location: s.lokasi,
                category: s.tipe
            }));

        const todayClasses = state.jadwal
            .filter(j => j.hari === todayDayName)
            .map(j => ({
                type: 'kuliah',
                title: j.matkul,
                timeStart: j.jamMulai,
                timeEnd: j.jamSelesai,
                sub: `Dosen: ${j.dosen || 'N/A'}`,
                location: j.ruangan,
                category: 'Mata Kuliah'
            }));

        const combined = [...todaySeminars, ...todayClasses].sort((a, b) => a.timeStart.localeCompare(b.timeStart));

        if (combined.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-mug-hot"></i>
                    <h4>Tidak Ada Agenda Hari Ini</h4>
                    <p>Hari ini tidak ada kelas kuliah atau workshop yang terjadwal. Nikmati waktu luang Anda!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = combined.map(item => `
            <div class="today-item ${item.type === 'seminar' ? 'is-workshop' : 'is-kuliah'}">
                <div class="today-time">
                    <span class="time-start">${item.timeStart}</span>
                    <span class="time-end">${item.timeEnd}</span>
                </div>
                <div class="today-details">
                    <div style="display:flex; gap:0.5rem; align-items:center; margin-bottom:0.2rem;">
                        <span class="badge ${item.type === 'seminar' ? 'badge-purple' : 'badge-blue'}">${item.category}</span>
                    </div>
                    <h4>${item.title}</h4>
                    <div class="today-meta">
                        <span><i class="fa-solid fa-circle-info"></i> ${item.sub}</span>
                        <span><i class="fa-solid fa-location-dot"></i> ${item.location}</span>
                    </div>
                </div>
            </div>
        `).join('');
    };

    // DASHBOARD URGENT TASKS
    const renderDashboardUrgentTasks = () => {
        const container = document.getElementById('dashboard-urgent-tasks');
        const urgent = state.tugas
            .filter(t => t.status !== 'completed')
            .sort((a, b) => (a.deadlineDate + a.deadlineTime).localeCompare(b.deadlineDate + b.deadlineTime))
            .slice(0, 4);

        if (urgent.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-circle-check text-green"></i>
                    <h4>Semua Tugas Selesai!</h4>
                    <p>Tidak ada beban tugas pending saat ini. Kerja bagus!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = urgent.map(t => {
            const isToday = t.deadlineDate === todayStr;
            return `
                <div class="today-item" style="border-left: 4px solid ${t.prioritas === 'Tinggi' ? 'var(--accent-pink)' : 'var(--accent-orange)'}">
                    <div class="today-details">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span class="badge ${t.prioritas === 'Tinggi' ? 'badge-pink' : 'badge-orange'}">${t.matkul}</span>
                            <span class="task-deadline ${isToday ? 'urgent' : ''}">
                                <i class="fa-solid fa-clock"></i> ${isToday ? 'HARI INI ' + t.deadlineTime : t.deadlineDate}
                            </span>
                        </div>
                        <h4 style="margin-top:0.4rem;">${t.judul}</h4>
                    </div>
                </div>
            `;
        }).join('');
    };

    // DASHBOARD UPCOMING SEMINARS CAROUSEL
    const renderDashboardUpcomingSeminars = () => {
        const container = document.getElementById('dashboard-upcoming-seminars');
        const list = state.seminars
            .sort((a, b) => (a.tanggal + a.waktu).localeCompare(b.tanggal + b.waktu))
            .slice(0, 6);

        if (list.length === 0) {
            container.innerHTML = `
                <div class="empty-state" style="width:100%;">
                    <i class="fa-solid fa-chalkboard-user"></i>
                    <p>Belum ada seminar/workshop yang didaftarkan.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = list.map(s => `
            <div class="seminar-mini-card">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                        <span class="badge badge-purple">${s.tipe}</span>
                        <span class="badge ${s.tanggal === todayStr ? 'badge-pink' : 'badge-info'}">${s.tanggal === todayStr ? 'Hari Ini' : s.tanggal}</span>
                    </div>
                    <h4 style="font-size:0.95rem; font-weight:700; line-height:1.3; color:white;">${s.judul}</h4>
                </div>
                <div style="margin-top:1rem; font-size:0.8rem; color:var(--text-muted);">
                    <div><i class="fa-solid fa-clock text-purple"></i> ${s.waktu} WIB</div>
                    <div><i class="fa-solid fa-location-dot text-purple"></i> ${s.lokasi}</div>
                </div>
            </div>
        `).join('');
    };

    // ==========================================================================
    // SEMINAR & WORKSHOP TAB MAIN GRID
    // ==========================================================================
    const renderSeminarGrid = () => {
        const grid = document.getElementById('seminar-main-grid');
        
        let filtered = state.seminars.filter(s => {
            if (state.activeSeminarFilter === 'today' && s.tanggal !== todayStr) return false;
            if (state.activeSeminarFilter === 'upcoming' && s.tanggal < todayStr) return false;
            if (state.activeSeminarFilter === 'completed' && s.tanggal >= todayStr) return false;

            if (state.activeSeminarType !== 'all' && s.tipe !== state.activeSeminarType) return false;

            if (state.searchQuery) {
                const q = state.searchQuery.toLowerCase();
                return s.judul.toLowerCase().includes(q) || s.penyelenggara.toLowerCase().includes(q) || s.lokasi.toLowerCase().includes(q);
            }

            return true;
        });

        filtered.sort((a, b) => (a.tanggal + a.waktu).localeCompare(b.tanggal + b.waktu));

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <i class="fa-solid fa-chalkboard-user"></i>
                    <h4>Tidak Ada Seminar / Workshop Ditemukan</h4>
                    <p>Gunakan tombol di atas untuk membuat jadwal event seminar baru.</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = filtered.map(s => {
            const isToday = s.tanggal === todayStr;
            const isZoom = s.lokasi.toLowerCase().includes('http') || s.lokasi.toLowerCase().includes('zoom') || s.lokasi.toLowerCase().includes('meet');
            
            return `
                <div class="seminar-card ${isToday ? 'is-today' : ''}">
                    <div>
                        <div class="seminar-header">
                            <span class="badge badge-purple">${s.tipe}</span>
                            <span class="badge ${isToday ? 'badge-pink' : 'badge-info'}">${isToday ? 'Hari Ini 🔥' : s.tanggal}</span>
                        </div>
                        <h3>${s.judul}</h3>
                        
                        <div class="seminar-meta-list">
                            <div class="seminar-meta-item">
                                <i class="fa-solid fa-clock"></i>
                                <span>Pukul ${s.waktu} WIB</span>
                            </div>
                            <div class="seminar-meta-item">
                                <i class="fa-solid fa-user"></i>
                                <span>${s.penyelenggara || 'Panitia / Organisasi'}</span>
                            </div>
                            <div class="seminar-meta-item">
                                <i class="fa-solid ${isZoom ? 'fa-video' : 'fa-location-dot'}"></i>
                                <span>${s.lokasi}</span>
                            </div>
                            ${s.catatan ? `<div class="seminar-meta-item"><i class="fa-solid fa-note-sticky"></i> <span>${s.catatan}</span></div>` : ''}
                        </div>
                    </div>

                    <div class="seminar-footer">
                        <div class="card-actions">
                            ${isZoom ? `<a href="${s.lokasi.split(' ')[0]}" target="_blank" class="btn btn-purple btn-sm"><i class="fa-solid fa-video"></i> Join</a>` : ''}
                            ${s.linkSertifikat ? `<a href="${s.linkSertifikat}" target="_blank" class="btn btn-secondary btn-sm" title="Material / Sertifikat"><i class="fa-solid fa-link"></i> File</a>` : ''}
                        </div>
                        <div class="card-actions">
                            <button class="btn-icon btn-edit-seminar" data-id="${s.id}" title="Edit Event"><i class="fa-solid fa-pen"></i></button>
                            <button class="btn-icon btn-delete-seminar" data-id="${s.id}" title="Hapus Event"><i class="fa-solid fa-trash text-pink"></i></button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        grid.querySelectorAll('.btn-edit-seminar').forEach(btn => {
            btn.addEventListener('click', () => editSeminar(btn.dataset.id));
        });
        grid.querySelectorAll('.btn-delete-seminar').forEach(btn => {
            btn.addEventListener('click', () => deleteSeminar(btn.dataset.id));
        });
    };

    // ==========================================================================
    // TUGAS KULIAH TAB MAIN LIST
    // ==========================================================================
    const renderTugasList = () => {
        const container = document.getElementById('tugas-main-list');

        let filtered = state.tugas.filter(t => {
            if (state.activeTugasFilter !== 'all' && t.status !== state.activeTugasFilter) return false;
            if (state.activeTugasPriority !== 'all' && t.prioritas !== state.activeTugasPriority) return false;
            if (state.searchQuery) {
                const q = state.searchQuery.toLowerCase();
                return t.judul.toLowerCase().includes(q) || t.matkul.toLowerCase().includes(q);
            }
            return true;
        });

        filtered.sort((a, b) => (a.deadlineDate + a.deadlineTime).localeCompare(b.deadlineDate + b.deadlineTime));

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-list-check"></i>
                    <h4>Tidak Ada Tugas Kuliah</h4>
                    <p>Semua tugas terdaftar telah diselesaikan atau tidak ada data pencarian yang cocok.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(t => {
            const isCompleted = t.status === 'completed';
            const isToday = t.deadlineDate === todayStr;

            return `
                <div class="task-item ${isCompleted ? 'completed' : ''}">
                    <div class="task-checkbox btn-toggle-tugas" data-id="${t.id}">
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <div class="task-content">
                        <div class="task-title">${t.judul}</div>
                        <div class="task-meta">
                            <span class="badge ${t.prioritas === 'Tinggi' ? 'badge-pink' : 'badge-orange'}">${t.matkul}</span>
                            <span class="badge badge-info">Prioritas: ${t.prioritas}</span>
                            <span class="task-deadline ${isToday && !isCompleted ? 'urgent' : ''}">
                                <i class="fa-regular fa-clock"></i> Deadline: ${t.deadlineDate} (${t.deadlineTime})
                            </span>
                            ${t.deskripsi ? `<span><i class="fa-solid fa-align-left"></i> ${t.deskripsi}</span>` : ''}
                        </div>
                    </div>
                    <div class="card-actions">
                        <button class="btn-icon btn-edit-tugas" data-id="${t.id}" title="Edit Tugas"><i class="fa-solid fa-pen"></i></button>
                        <button class="btn-icon btn-delete-tugas" data-id="${t.id}" title="Hapus Tugas"><i class="fa-solid fa-trash text-pink"></i></button>
                    </div>
                </div>
            `;
        }).join('');

        container.querySelectorAll('.btn-toggle-tugas').forEach(btn => {
            btn.addEventListener('click', () => toggleTugasStatus(btn.dataset.id));
        });
        container.querySelectorAll('.btn-edit-tugas').forEach(btn => {
            btn.addEventListener('click', () => editTugas(btn.dataset.id));
        });
        container.querySelectorAll('.btn-delete-tugas').forEach(btn => {
            btn.addEventListener('click', () => deleteTugas(btn.dataset.id));
        });
    };

    // ==========================================================================
    // JADWAL KULIAH TAB MAIN LIST
    // ==========================================================================
    const renderJadwalList = () => {
        const container = document.getElementById('jadwal-main-list');
        const dayClasses = state.jadwal
            .filter(j => j.hari === state.selectedDay)
            .sort((a, b) => a.jamMulai.localeCompare(b.jamMulai));

        document.querySelectorAll('#day-selector-tabs .day-btn').forEach(btn => {
            if (btn.dataset.day === state.selectedDay) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        if (dayClasses.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-calendar-day"></i>
                    <h4>Tidak Ada Kuliah di Hari ${state.selectedDay}</h4>
                    <p>Hari ${state.selectedDay} tidak memiliki perkuliahan rutin.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = dayClasses.map(j => `
            <div class="schedule-card">
                <div class="schedule-time-box">
                    <div class="start">${j.jamMulai}</div>
                    <div class="end">s/d ${j.jamSelesai} WIB</div>
                </div>
                <div class="schedule-info">
                    <h3>${j.matkul}</h3>
                    <div class="schedule-details">
                        <span><i class="fa-solid fa-user-tie text-blue"></i> ${j.dosen || 'Dosen Pengampu'}</span>
                        <span><i class="fa-solid fa-location-dot text-blue"></i> ${j.ruangan || 'Ruangan'}</span>
                    </div>
                </div>
                <div class="card-actions">
                    <button class="btn-icon btn-edit-jadwal" data-id="${j.id}"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn-icon btn-delete-jadwal" data-id="${j.id}"><i class="fa-solid fa-trash text-pink"></i></button>
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.btn-edit-jadwal').forEach(btn => {
            btn.addEventListener('click', () => editJadwal(btn.dataset.id));
        });
        container.querySelectorAll('.btn-delete-jadwal').forEach(btn => {
            btn.addEventListener('click', () => deleteJadwal(btn.dataset.id));
        });
    };

    // ==========================================================================
    // CRUD OPERATIONS FOR SEMINAR, TUGAS, JADWAL
    // ==========================================================================
    const formSeminar = document.getElementById('form-seminar');
    formSeminar.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id = document.getElementById('seminar-id').value;
        const newSeminar = {
            id: id || 'sem-' + Date.now(),
            judul: document.getElementById('seminar-judul').value,
            tipe: document.getElementById('seminar-tipe').value,
            penyelenggara: document.getElementById('seminar-penyelenggara').value,
            tanggal: document.getElementById('seminar-tanggal').value,
            waktu: document.getElementById('seminar-waktu').value,
            lokasi: document.getElementById('seminar-lokasi').value,
            linkSertifikat: document.getElementById('seminar-link-sertifikat').value,
            catatan: document.getElementById('seminar-catatan').value
        };

        if (id) {
            const idx = state.seminars.findIndex(s => s.id === id);
            if (idx !== -1) state.seminars[idx] = newSeminar;
            showToast('Event Seminar/Workshop diperbarui', 'success');
        } else {
            state.seminars.push(newSeminar);
            showToast('Event Seminar/Workshop baru tersimpan! 🚀', 'success');
        }

        await saveItemToCloud('seminars', newSeminar);
        closeModal('modal-seminar');
        formSeminar.reset();
    });

    const editSeminar = (id) => {
        const item = state.seminars.find(s => s.id === id);
        if (!item) return;

        document.getElementById('modal-seminar-title').innerHTML = '<i class="fa-solid fa-pen text-purple"></i> Edit Seminar / Workshop';
        document.getElementById('seminar-id').value = item.id;
        document.getElementById('seminar-judul').value = item.judul;
        document.getElementById('seminar-tipe').value = item.tipe;
        document.getElementById('seminar-penyelenggara').value = item.penyelenggara || '';
        document.getElementById('seminar-tanggal').value = item.tanggal;
        document.getElementById('seminar-waktu').value = item.waktu;
        document.getElementById('seminar-lokasi').value = item.lokasi;
        document.getElementById('seminar-link-sertifikat').value = item.linkSertifikat || '';
        document.getElementById('seminar-catatan').value = item.catatan || '';

        openModal('modal-seminar');
    };

    const deleteSeminar = async (id) => {
        if (confirm('Apakah Anda yakin ingin menghapus event seminar/workshop ini?')) {
            state.seminars = state.seminars.filter(s => s.id !== id);
            await deleteItemFromCloud('seminars', id);
            showToast('Seminar/Workshop dihapus', 'danger');
        }
    };

    const formTugas = document.getElementById('form-tugas');
    formTugas.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id = document.getElementById('tugas-id').value;
        const newTugas = {
            id: id || 'tug-' + Date.now(),
            judul: document.getElementById('tugas-judul').value,
            matkul: document.getElementById('tugas-matkul').value,
            prioritas: document.getElementById('tugas-prioritas').value,
            deadlineDate: document.getElementById('tugas-deadline-date').value,
            deadlineTime: document.getElementById('tugas-deadline-time').value,
            status: document.getElementById('tugas-status').value,
            deskripsi: document.getElementById('tugas-deskripsi').value
        };

        if (id) {
            const idx = state.tugas.findIndex(t => t.id === id);
            if (idx !== -1) state.tugas[idx] = newTugas;
            showToast('Tugas kuliah diperbarui', 'success');
        } else {
            state.tugas.push(newTugas);
            showToast('Tugas baru ditambahkan', 'success');
        }

        await saveItemToCloud('tugas', newTugas);
        closeModal('modal-tugas');
        formTugas.reset();
    });

    const toggleTugasStatus = async (id) => {
        const task = state.tugas.find(t => t.id === id);
        if (task) {
            task.status = task.status === 'completed' ? 'pending' : 'completed';
            await saveItemToCloud('tugas', task);
            showToast(task.status === 'completed' ? 'Selamat! Tugas diselesaikan 🎉' : 'Status tugas dikembalikan');
        }
    };

    const editTugas = (id) => {
        const item = state.tugas.find(t => t.id === id);
        if (!item) return;

        document.getElementById('modal-tugas-title').innerHTML = '<i class="fa-solid fa-pen text-pink"></i> Edit Tugas Kuliah';
        document.getElementById('tugas-id').value = item.id;
        document.getElementById('tugas-judul').value = item.judul;
        document.getElementById('tugas-matkul').value = item.matkul;
        document.getElementById('tugas-prioritas').value = item.prioritas;
        document.getElementById('tugas-deadline-date').value = item.deadlineDate;
        document.getElementById('tugas-deadline-time').value = item.deadlineTime;
        document.getElementById('tugas-status').value = item.status;
        document.getElementById('tugas-deskripsi').value = item.deskripsi || '';

        openModal('modal-tugas');
    };

    const deleteTugas = async (id) => {
        if (confirm('Hapus tugas ini?')) {
            state.tugas = state.tugas.filter(t => t.id !== id);
            await deleteItemFromCloud('tugas', id);
            showToast('Tugas dihapus', 'danger');
        }
    };

    const formJadwal = document.getElementById('form-jadwal');
    formJadwal.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id = document.getElementById('jadwal-id').value;
        const newJadwal = {
            id: id || 'jad-' + Date.now(),
            matkul: document.getElementById('jadwal-matkul').value,
            hari: document.getElementById('jadwal-hari').value,
            jamMulai: document.getElementById('jadwal-jam-mulai').value,
            jamSelesai: document.getElementById('jadwal-jam-selesai').value,
            dosen: document.getElementById('jadwal-dosen').value,
            ruangan: document.getElementById('jadwal-ruangan').value
        };

        if (id) {
            const idx = state.jadwal.findIndex(j => j.id === id);
            if (idx !== -1) state.jadwal[idx] = newJadwal;
            showToast('Jadwal matkul diperbarui', 'success');
        } else {
            state.jadwal.push(newJadwal);
            showToast('Jadwal matkul ditambahkan', 'success');
        }

        await saveItemToCloud('jadwal', newJadwal);
        closeModal('modal-jadwal');
        formJadwal.reset();
    });

    const editJadwal = (id) => {
        const item = state.jadwal.find(j => j.id === id);
        if (!item) return;

        document.getElementById('modal-jadwal-title').innerHTML = '<i class="fa-solid fa-pen text-blue"></i> Edit Jadwal Kuliah';
        document.getElementById('jadwal-id').value = item.id;
        document.getElementById('jadwal-matkul').value = item.matkul;
        document.getElementById('jadwal-hari').value = item.hari;
        document.getElementById('jadwal-jam-mulai').value = item.jamMulai;
        document.getElementById('jadwal-jam-selesai').value = item.jamSelesai;
        document.getElementById('jadwal-dosen').value = item.dosen || '';
        document.getElementById('jadwal-ruangan').value = item.ruangan || '';

        openModal('modal-jadwal');
    };

    const deleteJadwal = async (id) => {
        if (confirm('Hapus jadwal mata kuliah ini?')) {
            state.jadwal = state.jadwal.filter(j => j.id !== id);
            await deleteItemFromCloud('jadwal', id);
            showToast('Jadwal dihapus', 'danger');
        }
    };

    // ==========================================================================
    // PROFILE EDIT FORM HANDLERS
    // ==========================================================================
    const openProfileModal = () => {
        document.getElementById('profile-name').value = state.profile.name || '';
        document.getElementById('profile-role').value = state.profile.role || '';
        
        // Active Avatar Icon Option
        document.querySelectorAll('#avatar-selector .avatar-option').forEach(btn => {
            if (btn.dataset.icon === state.profile.avatar) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        openModal('modal-profile');
    };

    document.querySelectorAll('#avatar-selector .avatar-option').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#avatar-selector .avatar-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.profile.avatar = btn.dataset.icon;
        });
    });

    document.getElementById('form-profile').addEventListener('submit', async (e) => {
        e.preventDefault();
        state.profile.name = document.getElementById('profile-name').value.trim();
        state.profile.role = document.getElementById('profile-role').value.trim();

        saveToLocalStorage();
        if (isCloudConnected && db) {
            try {
                await fbSetDoc(fbDoc(db, 'settings', 'profile'), state.profile);
            } catch (err) {
                console.error('Error saving profile to cloud:', err);
            }
        }

        renderProfile();
        closeModal('modal-profile');
        showToast('Profil Mahasiswa berhasil diperbarui! 👤', 'success');
    });

    document.getElementById('user-profile-trigger').addEventListener('click', openProfileModal);
    document.getElementById('btn-edit-profile-mini').addEventListener('click', openProfileModal);

    // Notifications Event Listeners
    document.getElementById('btn-toggle-notif').addEventListener('click', requestNotificationPermission);
    document.getElementById('btn-test-notif').addEventListener('click', () => {
        sendNativeNotification('Uji Coba Notifikasi CampusFlow 🔔', 'Selamat! Notifikasi pop-up HP & Browser Anda telah berfungsi dengan baik.');
        showToast('Notifikasi uji coba dikirimkan!', 'success');
    });

    // ==========================================================================
    // MODALS & NAVIGATION HANDLERS
    // ==========================================================================

    const openModal = (modalId) => {
        document.getElementById(modalId)?.classList.add('show');
    };

    const closeModal = (modalId) => {
        document.getElementById(modalId)?.classList.remove('show');
    };

    document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => closeModal(btn.dataset.close));
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal.id);
        });
    });

    const switchTab = (tabName) => {
        state.activeTab = tabName;
        document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(nav => {
            if (nav.dataset.tab === tabName) {
                nav.classList.add('active');
            } else {
                nav.classList.remove('active');
            }
        });

        document.querySelectorAll('.tab-content').forEach(content => {
            if (content.id === `tab-${tabName}`) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(item.dataset.tab);
        });
    });

    document.addEventListener('click', (e) => {
        const switchBtn = e.target.closest('.switch-tab');
        if (switchBtn) {
            e.preventDefault();
            switchTab(switchBtn.dataset.target);
        }
    });

    const quickAddBtn = document.getElementById('btn-quick-add');
    const quickAddMenu = document.getElementById('quick-add-menu');

    quickAddBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        quickAddMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => quickAddMenu.classList.remove('show'));

    quickAddMenu.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            if (action === 'add-seminar') {
                formSeminar.reset();
                document.getElementById('seminar-id').value = '';
                document.getElementById('seminar-tanggal').value = todayStr;
                document.getElementById('modal-seminar-title').innerHTML = '<i class="fa-solid fa-chalkboard-user text-purple"></i> Tambah Seminar / Workshop';
                openModal('modal-seminar');
            } else if (action === 'add-tugas') {
                formTugas.reset();
                document.getElementById('tugas-id').value = '';
                document.getElementById('tugas-deadline-date').value = todayStr;
                document.getElementById('modal-tugas-title').innerHTML = '<i class="fa-solid fa-list-check text-pink"></i> Tambah Tugas Kuliah';
                openModal('modal-tugas');
            } else if (action === 'add-jadwal') {
                formJadwal.reset();
                document.getElementById('jadwal-id').value = '';
                document.getElementById('modal-jadwal-title').innerHTML = '<i class="fa-solid fa-calendar-days text-blue"></i> Tambah Jadwal Kuliah';
                openModal('modal-jadwal');
            }
        });
    });

    document.getElementById('btn-add-seminar').addEventListener('click', () => {
        formSeminar.reset();
        document.getElementById('seminar-id').value = '';
        document.getElementById('seminar-tanggal').value = todayStr;
        openModal('modal-seminar');
    });

    document.getElementById('btn-add-tugas').addEventListener('click', () => {
        formTugas.reset();
        document.getElementById('tugas-id').value = '';
        document.getElementById('tugas-deadline-date').value = todayStr;
        openModal('modal-tugas');
    });

    document.getElementById('btn-add-jadwal').addEventListener('click', () => {
        formJadwal.reset();
        document.getElementById('jadwal-id').value = '';
        openModal('modal-jadwal');
    });

    document.querySelectorAll('#day-selector-tabs .day-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            state.selectedDay = btn.dataset.day;
            renderJadwalList();
        });
    });

    document.querySelectorAll('#seminar-filter-tabs .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#seminar-filter-tabs .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.activeSeminarFilter = btn.dataset.filter;
            renderSeminarGrid();
        });
    });

    document.getElementById('seminar-type-filter').addEventListener('change', (e) => {
        state.activeSeminarType = e.target.value;
        renderSeminarGrid();
    });

    document.querySelectorAll('#tugas-filter-tabs .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#tugas-filter-tabs .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.activeTugasFilter = btn.dataset.filter;
            renderTugasList();
        });
    });

    document.getElementById('tugas-priority-filter').addEventListener('change', (e) => {
        state.activeTugasPriority = e.target.value;
        renderTugasList();
    });

    document.getElementById('global-search').addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderSeminarGrid();
        renderTugasList();
    });

    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('campusflow_theme') || 'dark';

    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        themeBtn.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('campusflow_theme', isLight ? 'light' : 'dark');
        showToast(`Modus tampilan diubah ke ${isLight ? 'Terang' : 'Gelap'}`);
    });

    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const closeBtn = document.getElementById('sidebar-close-btn');

    const toggleSidebar = () => {
        const isOpen = sidebar.classList.toggle('open');
        if (overlay) {
            overlay.classList.toggle('show', isOpen);
        }
    };

    const closeSidebar = () => {
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('show');
    };

    const mobileToggle = document.getElementById('mobile-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSidebar();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeSidebar);
    }

    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }

    document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                closeSidebar();
            }
        });
    });

    document.getElementById('settings-btn')?.addEventListener('click', () => openModal('modal-settings'));
    document.getElementById('db-status-pill')?.addEventListener('click', () => openModal('modal-settings'));

    document.getElementById('btn-reset-sample')?.addEventListener('click', async () => {
        if (confirm('Atur ulang seluruh data ke data contoh awal?')) {
            const initial = getInitialSampleData();
            state.seminars = initial.seminars;
            state.tugas = initial.tugas;
            state.jadwal = initial.jadwal;
            state.profile = initial.profile;
            await syncAllToCloud();
            saveToLocalStorage();
            renderAll();
            closeModal('modal-settings');
            showToast('Data berhasil di-reset ke data awal!', 'success');
        }
    });

    document.getElementById('btn-export-data')?.addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `campusflow_backup_${todayStr}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        showToast('File backup JSON berhasil diunduh!', 'success');
    });

    document.getElementById('input-import-file')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = async (event) => {
            try {
                const imported = JSON.parse(event.target.result);
                if (imported.seminars && imported.tugas && imported.jadwal) {
                    state.seminars = imported.seminars;
                    state.tugas = imported.tugas;
                    state.jadwal = imported.jadwal;
                    if (imported.profile) state.profile = imported.profile;
                    await syncAllToCloud();
                    saveToLocalStorage();
                    renderAll();
                    closeModal('modal-settings');
                    showToast('Data berhasil dipulihkan dari file JSON!', 'success');
                } else {
                    alert('Format file JSON tidak valid!');
                }
            } catch (err) {
                alert('Gagal membaca file JSON: ' + err.message);
            }
        };
        reader.readAsText(file);
    });

    // Initialize Firebase & App
    await initFirebaseCloud();
});
