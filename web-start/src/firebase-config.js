/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: 'AIzaSyDeMfa3NKO5px5LpiG29yG5e0x3F2WYwi8',
  authDomain: 'friendlychat-3d6ad.firebaseapp.com',
  projectId: 'friendlychat-3d6ad',
  storageBucket: 'friendlychat-3d6ad.appspot.com',
  messagingSenderId: '147302459168',
  appId: '1:147302459168:web:54a6d23e4828a012c05945'
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
