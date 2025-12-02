import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, ref as dbRef, set as dbSet, onValue as dbOnValue, push as dbPush } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSLVB1mcTx3fLA9DLul5qMP1ZBBiH8K44",
  authDomain: "homeworkmana.firebaseapp.com",
  projectId: "homeworkmana",
  databaseURL: "https://homeworkmana-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "homeworkmana.firebasestorage.app",
  messagingSenderId: "68560768642",
  appId: "1:68560768642:web:acde1badb9786caba86e9b",
  measurementId: "G-WM5KHFKD19"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const rtdb = getDatabase(app);
export const storage = getStorage(app);

export const rtdbSet = (path, value) => dbSet(dbRef(rtdb, path), value);
export const rtdbPush = (path, value) => dbPush(dbRef(rtdb, path), value);
export const rtdbSubscribe = (path, callback) => dbOnValue(dbRef(rtdb, path), snapshot => {
  callback(snapshot.exists() ? snapshot.val() : null);
});

export const uploadFile = async (path, file) => {
  const ref = storageRef(storage, path);
  const snapshot = await uploadBytes(ref, file);
  return getDownloadURL(snapshot.ref);
};
