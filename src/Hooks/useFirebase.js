import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
    GithubAuthProvider,
    TwitterAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.initialize";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reTypePassword, setReTypePassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState("")
    const [error, setError] = useState('')
    const [name, setName] = useState("")

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    useEffect(() => { // for keep stay or keep loged in user data in user useState
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])


    const handleEmailPassSignUp = () => { // Email and Password ------Sign Up------
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleEmailPassLogIn = () => {// Email and Password ------Log In------
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleGoogleLogIn = () => {// ------Google------ Log In
        return signInWithPopup(auth, googleProvider)
    }
    const handleFacebookLogIn = () => { // ---------Faceboook-------log in
        return signInWithPopup(auth, facebookProvider)
    }
    const handleGithubLogIn = () => { // ------Github------ log in
        return signInWithPopup(auth, githubProvider)
    }
    const handleTwitterLogIn = () => { // ------Twitter------ Log in
        return signInWithPopup(auth, twitterProvider)
    }


    const handleUserProfileUpdate = () => { // for user profile update
        updateProfile(auth.currentUser, {
            displayName: name, phoneNumber: phoneNumber,
        })
    }

    const handleLogOut = () => { // for handle Log Out btn
        signOut(auth)
            .then(() => {
                setUser(null)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return {
        user,
        error,
        setEmail,
        setError,
        setUser,
        setPassword,
        setPhoneNumber,
        setName,
        handleEmailPassSignUp,
        handleEmailPassLogIn,
        handleLogOut,
        handleUserProfileUpdate,
        handleGoogleLogIn,
        handleFacebookLogIn,
        handleGithubLogIn,
        handleTwitterLogIn,
        setReTypePassword,
        reTypePassword,
        password,
    }
};

export default useFirebase;