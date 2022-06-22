import * as admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';
// Initialize the default app
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}
export const db = admin.firestore();
export const fieldValue = admin.firestore.FieldValue;
// for token 32 caracters https://generate-secret.vercel.app/32
// for token 64 caracters https://generate-secret.vercel.app/64
// please change this token by an example above
export const token =  "7f59ba5f69d5b4e588e0ab0d4f8e1634";
// please change this token by an example above
export const encryptkey =  "c8f761d962dca2a5286dc846f04ddac643f5395d27d09b451f42410f3bc70571";