  import firebase from 'firebase/app'
  import 'firebase/storage'
  import 'firebase/firestore'
  
  // Config Firebase de l'app
  var firebaseConfig = {
    apiKey: "AIzaSyDh1q0-nlpBQCPVZHc7ZbCjggEsEDLaomQ",
    authDomain: "erinn-stagram-a20f7.firebaseapp.com",
    databaseURL: "https://erinn-stagram-a20f7.firebaseio.com",
    projectId: "erinn-stagram-a20f7",
    storageBucket: "erinn-stagram-a20f7.appspot.com",
    messagingSenderId: "952352828228",
    appId: "1:952352828228:web:263dc5988a142505a78511"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  // firebase.analytics();

  // Utiliser le storage de firebase
  const projectStorage = firebase.storage()
  // Utiliser la database de firebase
  const projectFirestore = firebase.firestore()

  export { projectStorage, projectFirestore }