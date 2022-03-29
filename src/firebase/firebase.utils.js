import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyBZ8VQy-K2YlKoR4jHRFSVQF3FWmn_F2es',
  authDomain: 'bookshelf-e3d9a.firebaseapp.com',
  projectId: 'bookshelf-e3d9a',
  storageBucket: 'bookshelf-e3d9a.appspot.com',
  messagingSenderId: '779222753363',
  appId: '1:779222753363:web:d944afc1ebe441490766a6',
  measurementId: 'G-J8R2FN0H5T',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
