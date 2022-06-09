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
export var db = admin.firestore();