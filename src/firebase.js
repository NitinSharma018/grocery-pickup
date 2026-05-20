import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// ✅ Use this ONLY for development (you can comment this out in production)
self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbnQ19PL2Ry67847tBGoWAxmHzLf61B7U",
  authDomain: "local-grocery-pickup-system.firebaseapp.com",
  projectId: "local-grocery-pickup-system",
  storageBucket: "local-grocery-pickup-system.appspot.com",
  messagingSenderId: "479313493423",
  appId: "1:479313493423:web:0ec46e0a14d7ccf6e6c35a",
  measurementId: "G-8Y6E791BEN",
  databaseURL: "https://local-grocery-pickup-system-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔒 You can enable App Check when deploying for production
// initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider('your-site-key-here'),
//   isTokenAutoRefreshEnabled: true,
// });

const auth = getAuth(app);
const database = getDatabase(app);

// Export Firebase modules
export { auth, database as db };

/**
 * Write user data to Realtime Database
 */
export function writeUserData(userId, name, email) {
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
  })
    .then(() => console.log("User data written successfully"))
    .catch((error) => console.error("Error writing user data:", error));
}

/**
 * Listen to users node for real-time updates
 */
export function listenToUsers() {
  const userRef = ref(db, 'users');
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    console.log("Realtime data received:", data);
  }, (error) => {
    console.error("Error listening to users:", error);
  });
}
