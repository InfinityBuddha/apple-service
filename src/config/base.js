import Rebase from 're-base'
import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyBbb_UCKIvp5j9Gsodv2_rdUxd4-y9x9Wg",
    authDomain: "repairbox-buddy.firebaseapp.com",
    databaseURL: "https://repairbox-buddy.firebaseio.com",
    projectId: "repairbox-buddy",
    storageBucket: "repairbox-buddy.appspot.com",
    messagingSenderId: "897078972264"
};

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export {base}
