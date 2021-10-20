import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import swal from 'sweetalert';

const SignUp = () => {
    const {
        setReTypePassword,
        reTypePassword, password,
        setUser, setEmail, setError,
        setPassword, setName, error,
        setPhoneNumber,
        handleEmailPassSignUp,
        handleUserProfileUpdate,
        handleGoogleLogIn,
        handleFacebookLogIn,
        handleGithubLogIn,
        handleTwitterLogIn,
    } = useAuth()
    // UseStates for Password Validation
    const [passError, setPassError] = useState(false)
    const [digits, setDigits] = useState(false)
    const [letters, setLetters] = useState(false)
    const [letters2, setLetters2] = useState(false)
    const [numbers, setNumbers] = useState(false)

    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/";

    // SewetAler function for use all Sing Up
    const successAlert = () => {
        return swal({
            title: "Sign Up Successfull!",
            text: "Thanks for Sign Up at CMTL!",
            icon: "success",
            button: "Ok, Thanks!",
        });
    }


    const passOnBlur = e => {
        setPassError(!passError)
        if (digits && letters && letters2 && numbers === true) {
            setPassword(e.target.value)
            setError('')
        }
        else {
            setError('Please Select a strong password with our requirements')
        }
    }
    // Event handler on Sing Up btn to Sign Up
    const handleSignUpRedirect = e => {
        e.preventDefault()
        if (digits && letters && letters2 && numbers === true) { // check all regex pass validation
            if (password === reTypePassword) { // check password and retypepassword
                handleEmailPassSignUp()
                    .then(() => {
                        handleUserProfileUpdate()
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
        else { // if do not full fill all regex condition
            setError('Please Select a strong password with our requirements')
        }
    }

    const handleGoogleLogInRedirect = () => { // for -------Google------- Sign Up
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
    const handleFacebookLoginRedirect = () => { // for -------Facebook------- Sign Up
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
    const handleGithubLogInRedirect = () => { // for-------- Github------- Sign Up
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
    const handleTwitterLogInRedirect = () => { // for ---------Twitter--------- Sign Up
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

    // Get all input vlues
    const handleNameInput = e => setName(e.target.value)
    const handlePhoneInput = e => setPhoneNumber(e.target.value);
    const handleEmailInput = e => setEmail(e.target.value);
    const handleReTypePassInput = e => setReTypePassword(e.target.value)

    // get Password value and check on regex by condition
    const handlePassInput = e => {
        const digitReg = new RegExp("(?=.{8,})");
        digitReg.test(e.target.value) ? setDigits(true)
            : setDigits(false)
        const letterReg = new RegExp("(?=.*[a-z])");
        letterReg.test(e.target.value) ? setLetters(true)
            : setLetters(false)
        const letter2Reg = new RegExp("(?=.*[A-Z])");
        letter2Reg.test(e.target.value) ? setLetters2(true)
            : setLetters2(false)
        const numberReg = new RegExp("(?=.*[0-9])");
        numberReg.test(e.target.value) ? setNumbers(true)
            : setNumbers(false)
    };

    return (
        <div className="p-12 pt-8 rounded-lg w-3/12 mx-auto mt-24 mb-96 text-white
         sm:w-11/12
        md:w-6/12
        lg:w-5/12
        xl:w-4/12
        "
            style={{ backgroundColor: '#023047' }}>
            <h1 className="text-left">Please Sign Up</h1>
            <hr className="mb-5 border-gray-300" />

            <form onSubmit={handleSignUpRedirect} action="" method="get">
                {/* Name Input with Design------------ */}
                <p className="text-left text-xl font-bold m-0 mb-1">Name:</p>
                <div className="relative text-white">
                    <div className="absolute bg-gray-800 p-2 text-3xl rounded-full flex justify-center items-center" style={{ marginTop: '2px', marginLeft: '2px' }}> <i className="fas fa-user-circle" ></i>
                    </div>
                    <input onBlur={handleNameInput} className="w-full pl-14 p-3 text-xl text-black rounded-full" type="text" placeholder="Type your name" required />
                </div>

                {/* Phone Number Input with Design------------- */}
                <p className="text-left text-xl font-bold m-0 mb-1 mt-3">Phone Number:</p>
                <div className="relative text-white">
                    <div className="absolute bg-gray-800 p-2 text-3xl rounded-full flex justify-center items-center" style={{ marginTop: '2px', marginLeft: '2px' }}><i className="fas fa-phone-alt"></i>
                    </div>
                    <input onBlur={handlePhoneInput} className="w-full pl-14 p-3 text-xl text-black rounded-full" type="number" placeholder="Type your phone number" required />
                </div>

                {/* Email Input with Design------------------ */}
                <p className="text-left text-xl font-bold m-0 mb-1 mt-3">E-mail:</p>
                <div className="relative text-white">
                    <div className="absolute bg-gray-800 p-2 text-3xl rounded-full flex justify-center items-center" style={{ marginTop: '2px', marginLeft: '2px' }}> <i className="fas fa-envelope"></i>
                    </div>
                    <input onBlur={handleEmailInput} className="w-full pl-14 p-3 text-xl text-black rounded-full" type="email" placeholder="Type your email" required />
                </div>

                {/* Password Input with Design------------------ */}
                <div className="relative text-white mt-3">
                    <p className="text-left text-xl font-bold m-0 mb-1 mt-3">Password:</p>
                    <div className="absolute bg-gray-800 text-2xl rounded-full flex justify-center items-center" style={{ marginTop: '2px', marginLeft: '2px', padding: '10px' }}> <i className="fas fa-lock"></i>
                    </div>
                    {/* some extra event handler for regex */}
                    <input onFocus={() => setPassError(!passError)}
                        onBlur={passOnBlur}
                        onChange={handlePassInput}
                        className="w-full pl-14 p-3 text-xl text-black rounded-full" type="password" placeholder="Type your password" required />
                    {/* Regex Password validation div in a pupup-------- */}
                    <div className="absolute -top-10 -left-80 w-64 text-left " >
                        {
                            passError &&
                            <div className="p-6 bg-gray-800
                                rounded-lg" data-aos="flip-left">
                                <h3>Password should be:</h3>
                                <ul>
                                    <p className={digits ? "text-green-600" : "text-white"} >
                                        <i className={digits ? "fas fa-check-circle mr-2" : "fas fa-times-circle mr-2"}></i>
                                        At Least total 8 digits</p>
                                    <p className={letters ? "text-green-600" : "text-white"} >
                                        <i className={letters ? "fas fa-check-circle mr-2" : "fas fa-times-circle mr-2"}></i>
                                        At least 1 lower case (a-z) </p>
                                    <p className={letters2 ? "text-green-600" : "text-white"} >
                                        <i className={letters2 ? "fas fa-check-circle mr-2" : "fas fa-times-circle mr-2"}></i>
                                        At least 1 upper case (A-Z) </p>
                                    <p className={numbers ? "text-green-600" : "text-white"} >
                                        <i className={numbers ? "fas fa-check-circle mr-2" : "fas fa-times-circle mr-2"}></i>
                                        At least 1 Numbers (0-9) </p>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                {/* Re Type Password input with design------------ */}
                <div className="relative text-white mt-3">
                    <p className="text-left text-xl font-bold m-0 mb-1 mt-3">Re-Type Password:</p>
                    <div className="absolute bg-gray-800 text-2xl rounded-full flex justify-center items-center" style={{ marginTop: '2px', marginLeft: '2px', padding: '10px' }}> <i className="fas fa-lock"></i>
                    </div>
                    <input onBlur={handleReTypePassInput}
                        className="w-full pl-14 p-3 text-xl text-black rounded-full" type="password" placeholder="Re-Type your password" required />
                </div>
                {/* Sign Up btn with Log in Route Link */}
                <p className="text-xl mt-3">Already have an account? <Link to="/login">Log in </Link></p>
                <button type="submit" className="py-3  rounded-lg text-xl w-full"
                    style={{ backgroundColor: '#3063ae' }}>Sign Up</button>
            </form >
            {/* Error------------ */}
            <p className="text-red-500 text-xl mt-5">{error}</p>

            {/* Other log in with social media------ */}
            <hr className="mt-10 border-gray-400" />
            <div className="mt-3 flex justify-between">
                <button onClick={handleGoogleLogInRedirect} className="text-4xl border-2 p-3 rounded-lg">
                    <i className="fab fa-google"></i></button>
                <button onClick={handleFacebookLoginRedirect} className="text-4xl border-2 p-3 rounded-lg">
                    <i className="fab fa-facebook"></i></button>
                <button onClick={handleGithubLogInRedirect} className="text-4xl border-2 p-3 rounded-lg">
                    <i className="fab fa-github"></i></button>
                <button onClick={handleTwitterLogInRedirect} className="text-4xl border-2 p-3 rounded-lg">
                    <i className="fab fa-twitter"></i></button>
            </div>
        </div >
    );
};

export default SignUp;