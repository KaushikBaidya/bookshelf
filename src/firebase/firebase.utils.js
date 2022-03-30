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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const creatAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        creatAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
