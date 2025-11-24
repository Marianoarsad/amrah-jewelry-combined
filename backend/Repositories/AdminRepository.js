import Admin from "../models/Admin.js";
import db from "../firebaseConfiguration.js";
import {collection, addDoc, getDocs, where, query } from "firebase/firestore";
// const now = () => new Date().toISOString();
const adminCollection = collection(db, 'admins');

export const findByUsername = async (username) => {
    let q = query(adminCollection, where("username", "==", username));
    const adminSnap = await getDocs(q);

    if(adminSnap.empty) return null;

    const firstDoc = adminSnap.docs[0];
    const admin = new Admin({ id:firstDoc.id, ...firstDoc.data()});
    return admin
}

export const saveAdmin = async (username, plainText) =>{
    let q = query(adminCollection, where("username", "==", username));
    const duplicate = await getDocs(q);

    if(!duplicate.empty) throw new Error(`Error saving admin: Username '${username}' already exists`);

    const admin = await Admin.create(username, plainText);
    const docSnap = await addDoc(adminCollection, admin.toFirestore());
    return docSnap.id;
}