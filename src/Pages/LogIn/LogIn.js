import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import swal from 'sweetalert';

const LogIn = () => {
    const {
        user,
        setReTypePassword,
        reTypePassword, password,
        setUser, setError, setEmail,
        setPassword, error,
        handleEmailPassLogIn,
        handleGoogleLogIn,
        handleFacebookLogIn,
        handleGithubLogIn,
        handleTwitterLogIn,
    } = useAuth()

    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/";

    const successAlert = () => { // SweetAlert for use all sing in method--
        return swal({
            title: "Log In Successfull!",
            text: "Thanks for Log In at CMTL!",
            icon: "success",
            button: "Ok, Thanks!",
        });
    }
    /*    if user loged in but refresh the Privet Route page and
       redirect to the log in page then log in page will redirect again user into the redirect_url*/
    if (user) {
        history.push(redirect_url)
    }

    //Log in with Log In btn event handler 
    const handleEmailPassRedirect = e => {
        e.preventDefault()
        if (password === reTypePassword) {
            handleEmailPassLogIn()
                .then(() => {
                    history.push(redirect_url)
                    setError('')
                    successAlert()
                })
                .catch(error => {
                    setError(error.message)
                })
            setError('')
        }
        else {
            setError("Your Password did not match")
        }
    }

    const handleGoogleLogInRedirect = () => {//------------ Google------------
        handleGoogleLogIn()
            .then(result => {
                setUser(result.user)
                history.push(redirect_url)
                setError('')
                successAlert()
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleFacebookLoginRedirect = () => { //------------ Facebook------------
        handleFacebookLogIn()
            .then(result => {
                setUser(result.user)
                history.push(redirect_url)
                setError('')
                successAlert()
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleGithubLogInRedirect = () => {//------------ Github------------
        handleGithubLogIn()
            .then(result => {
                setUser(result.user)
                history.push(redirect_url)
                setError('')
                successAlert()
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleTwitterLogInRedirect = () => {//------------ Twitter------------
        handleTwitterLogIn()
            .then(result => {
                setUser(result.user)
                history.push(redirect_url)
                setError('')
                successAlert()
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // to get the all input value------
    const handleLogInEmailInput = e => setEmail(e.target.value)
    const handleLogInPassInput = e => setPassword(e.target.value)
    const handleLogInRetypePassInput = e => setReTypePassword(e.target.value)

    return (
        <div className="p-12 pt-8 rounded-lg w-3/12 mx-auto mt-24 mb-96 text-white
        sm:w-11/12
        md:w-6/12
        lg:w-5/12
        "
            style={{ backgroundColor: '#023047' }}>

            <h1 className="text-left">Please Log In</h1>
            <hr className="mb-5 border-gray-300" />
            <form onSubmit={handleEmailPassRedirect} action="" method="get">

                {/* Email input with Design------------- */}
                <p className="text-left text-xl font-bold m-0 mb-1">E-mail:</p>
                <div className="relative text-white">
                    <div className="absolute bg-gray-800 p-2 text-3xl rounded-full flex justify-center items-center" style={{ marginTop: '2px', marginLeft: '2px' }}> <i class="fas fa-envelope"></i>
                    </div>
                    <input onBlur={handleLogInEmailInput} className="w-full pl-14 p-3 text-xl text-black rounded-full" type="email" placeholder="Type your email" required />
                </div>

                {/* Password input with design--------------- */}
                <p className="text-left text-xl font-bold m-0 mb-1 mt-3">Password:</p>
                <div className="relative text-white">
                    <div className="absolute bg-gray-800 text-2xl rounded-full flex justify-center items-center" style={{ marginTop: '2px', marginLeft: '2px', padding: '10px' }}> <i class="fas fa-lock"></i>
                    </div>
                    <input onBlur={handleLogInPassInput} className="w-full pl-14 p-3 text-xl text-black rounded-full" type="password" placeholder="Type your password" required />
                </div>

                {/* Re type password input with design------------- */}
                <p className="text-left text-xl font-bold m-0 mb-1 mt-3">Re-Type Password:</p>
                <div className="relative text-white">
                    <div className="absolute bg-gray-800 text-2xl rounded-full flex justify-center items-center" style={{ marginTop: '2px', marginLeft: '2px', padding: '10px' }}> <i class="fas fa-lock"></i>
                    </div>
                    <input onBlur={handleLogInRetypePassInput} className="w-full pl-14 p-3 text-xl text-black rounded-full" type="password" placeholder="Re-Type your password" required />
                </div>

                {/* Log In btn with Sign Up Route Link-------- */}
                <p className="text-xl mt-3">New user? <Link to="/signUp">Sign Up </Link></p>
                <button type="submit" className="py-3  rounded-lg text-xl w-full"
                    style={{ backgroundColor: '#3063ae' }}>Log In</button>
            </form>

            {/* Error---- */}
            <p className="text-xl font-bold text-red-500 mt-5">{error}</p>

            {/* Log In with all others social media---- */}
            <hr className="mt-10 border-gray-400" />
            <div className="mt-3 flex justify-between">
                <button onClick={handleGoogleLogInRedirect} className="text-4xl border-2 p-3 rounded-md">
                    <i class="fab fa-google"></i></button>
                <button onClick={handleFacebookLoginRedirect} className="text-4xl border-2 p-3 rounded-md">
                    <i class="fab fa-facebook"></i></button>
                <button onClick={handleGithubLogInRedirect} className="text-4xl border-2 p-3 rounded-md">
                    <i class="fab fa-github"></i></button>
                <button onClick={handleTwitterLogInRedirect} className="text-4xl border-2 p-3 rounded-md">
                    <i class="fab fa-twitter"></i></button>
            </div>
        </div>
    );
};

export default LogIn;