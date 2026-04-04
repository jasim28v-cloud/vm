// ==================== Firebase Configuration ====================
const firebaseConfig = {
    apiKey: "AIzaSyDCtfrPPikkAfFy0He_OHxFyiXsYeiTk0o",
    authDomain: "ftor-440ee.firebaseapp.com",
    databaseURL: "https://ftor-440ee-default-rtdb.firebaseio.com/",
    projectId: "ftor-440ee",
    storageBucket: "ftor-440ee.firebasestorage.app",
    appId: "1:402606714665:web:2c7701209387c6a89a5138"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Services
const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();

// Cloudinary
const CLOUD_NAME = 'dk9xej3cf';
const UPLOAD_PRESET = 'k30_mk';

// Agora
const AGORA_APP_ID = '4017f66ea15f4ce088e8d8993a072a5b';

// Admin Account
const ADMIN_EMAIL = 'jasim77v@gmail.com';
const ADMIN_PASSWORD = 'mm2314mm';

// Site Name
const SITE_NAME = 'NEXUS';

console.log('✅ NEXUS - Firebase, Cloudinary & Agora Ready');
