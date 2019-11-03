import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyD7l-DI2v2is4HO1q-xXi93w0KL84c5MtA",
  authDomain: "album-4f489.firebaseapp.com",
  databaseURL: "https://album-4f489.firebaseio.com",
  projectId: "album-4f489",
  storageBucket: "album-4f489.appspot.com",
  messagingSenderId: "21688066510",
  appId: "1:21688066510:web:faa9b7829887a05fe0cb9f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();

export const storage = firebase.storage();

export function snapshotToArray(snapshot) {
  const updated_array = [];
  snapshot.forEach(s => {
    const data = s.data();
    data.id = s.id;
    updated_array.push(data);
  });
  return updated_array;
}
