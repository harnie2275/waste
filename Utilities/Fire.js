import firebase from 'firebase';
require("firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyB7VnLOQ4-HOSUop4MLN_0egswuj8eOWD0",
    authDomain: "blueko-9ecad.firebaseapp.com",
    databaseURL: "https://blueko-9ecad.firebaseio.com",
    projectId: "blueko-9ecad",
    storageBucket: "blueko-9ecad.appspot.com",
  };
  
  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }
  

  class Fire {
    
    uploadPhotoAsync = async (uri, filename) => {
        return new Promise(async (res, rej) => {
            const response = await fetch(uri);
            const file = await response.blob();

            let upload = firebase
                .storage()
                .ref(filename)
                .put(file)
            upload.on(
                "state_changed",
                snapshot => {},
                err => {
                    rej(err);
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                }
            )
        })
    }

    signOut = () => {
        firebase.auth().signOut();
    }

    agencySubscription = async subscription => {
        try {
            let db = this.firestore.collection("Agency Subscription").doc(this.uid)

            db.set({
                status: true
            })
        }catch (error) {
            alert ("Error: Something Went Wrong", error)
        }
    };

    createUser = async user => {
        let remoteUri = null

        try {
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)

            let db= this.firestore.collection("users").doc(this.uid)

            db.set({
                name: user.name,
                email: user.email,
                avatar: null,
                address: user.address,
                phone: user.phone,
            })
            if(user.avatar) {
                remoteUri = await this.uploadPhotoAsync(user.avatar, `avatars/${this.uid}`)

                db.set({ avatar: remoteUri }, { merge: true })
            }
        }catch (error) {
            alert ("Error: Something Went Wrong", error)
        }
    }

    get uid() {
        return( firebase.auth().currentUser  || {} ).uid;
    }
    get firestore() {
        return firebase.firestore();
    }
    
  }

  Fire.shared = new Fire();
  export default Fire;