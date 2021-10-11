import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import initFirebaseAuth from "../components/Firebase/firebase.init";

initFirebaseAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    //sign in

    const signInWithGoogle = () => {
        return signInWithPopup(auth, GoogleProvider)

    }

    //sing out
    const signOutWithGoogle = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    //Observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    return {
        user,
        signInWithGoogle,
        signOutWithGoogle
    }
}

export default useFirebase;