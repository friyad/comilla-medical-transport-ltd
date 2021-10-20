import React, { useState } from 'react';
import ResponsiveHeader from 'dna-responsive-nav'
import 'semantic-ui-css/semantic.min.css'
import 'dna-responsive-nav/dist/dna-rn.css'
import { NavLink } from 'react-router-dom';
import logoPNG from '../../images/logo.png'
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router';

const Header = () => {
    const { user, handleLogOut } = useAuth()
    const [navbar, setNavbar] = useState(false)
    const [showProfileManu, setShowprofileMenu] = useState(false)
    const history = useHistory()

    const handleNavbar = () => {
        if (window.scrollY >= 400) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', handleNavbar)


    const handleLogOutRedirects = () => {
        handleLogOut()
        history.push("/")
    }


    const activeStyle = {
        color: '#62dafb',
        background: 'none'
    }

    const links = (
        <ul>
            <li>
                <NavLink activeStyle={activeStyle} className="transition w-full mr-5 lg:m-0 lg:p-0 inline-block rounded-md md:pl-6 md:p-3"
                    to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink activeStyle={activeStyle} className="transition mr-3 lg:m-0 lg:p-0 w-full inline-block rounded-md md:pl-6 md:p-3"
                    to="/services">Services </NavLink>
            </li>
            <li>
                <NavLink activeStyle={activeStyle} className="transition mr-3 lg:m-0 lg:p-0 w-full inline-block rounded-md md:pl-6 md:p-3"
                    to="/products">Our Medical Products</NavLink>
            </li>
            <li>
                <NavLink activeStyle={activeStyle} className="transition mr-3 lg:m-0 lg:p-0 w-full inline-block rounded-md md:pl-6 md:p-3"
                    to="/gallery">Gallery</NavLink>
            </li>
            <li>
                <NavLink activeStyle={activeStyle} className="transition mr-3 lg:m-0 lg:p-0 w-full inline-block rounded-md md:pl-6 md:p-3"
                    to="/about">About</NavLink>
            </li>
            {!user
                ? <div className="lg:hidden xl:hidden 2xl:hidden 3xl:hidden sm:block md:block">
                    <li>
                        <NavLink activeStyle={activeStyle} className="transition mr-3 w-full inline-block rounded-md md:pl-6 md:p-3"
                            to="/login">Log In</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={activeStyle} className="transition mr-3 w-full inline-block rounded-md md:pl-6 md:p-3"
                            to="/signUp">Sign Up</NavLink>
                    </li>
                </div>
                : (user.email || user.displayName) &&
                <li className="lg:hidden xl:hidden 2xl:hidden 3xl:hidden sm:block md:block">
                    <button onClick={handleLogOut} className="transition mr-3 w-full inline-block rounded-md md:pl-6 md:p-3 py-8 lg:py-0 xl:py-0 text-left "
                    >Log Out</button>
                </li>
            }
        </ul>
    )

    return (
        <div className="relative">
            <div className={navbar ? "fixed top-0 w-full transition" : "sticky"}
                style={{ zIndex: '99999' }}>
                <ResponsiveHeader
                    siteName='CMTL'
                    links={links}
                    logo={logoPNG}
                />

            </div>
            <div className={user ? "w-1/12 absolute sm:hidden md:hidden text-xl text-white top-6 right-16"
                : "w-2/12 absolute text-xl text-white top-6 right-16 sm:hidden md:hidden lg:right-1"}
                style={{ zIndex: '999999' }}>
                {!user
                    ? <div className="flex justify-between w-10/12 lg:w-full">
                        <NavLink activeStyle={activeStyle} className="transition text-white hover:text-white mr-3 w-full inline-block rounded-md md:pl-6 md:p-3"
                            to="/login">Log In</NavLink>
                        <NavLink activeStyle={activeStyle} className="transition text-white hover:text-white mr-3 w-full inline-block rounded-md md:pl-6 md:p-3"
                            to="/signUp">Sign Up</NavLink>
                    </div>
                    :
                    (user.email || user.displayName) &&
                    <div>
                        <div className="absolute -top-3 lg:-right-8 sm:hidden md:hidden lg:block xl:block 2xl:block 3xl:block">
                            {user &&
                                user.photoURL
                                ? <div onClick={() => setShowprofileMenu(!showProfileManu)} className="rounded-full w-14 h-14">
                                    <img src={user.photoURL} alt="" className="rounded-full" />
                                </div>
                                : <div onClick={() => setShowprofileMenu(!showProfileManu)} className="rounded-full w-14 h-14 bg-gray-600 p-3 flex justify-center items-center select-none">
                                    <h1>{user.displayName?.slice(0, 1)}</h1>
                                </div>
                            }
                        </div>
                        {showProfileManu &&
                            <div className="pt-5 absolute text-left top-16 rounded-md w-56
                            right-10 pb-10 lg:-right-10"
                                style={{ backgroundColor: '#023047' }} data-aos="fade-up">
                                <button className="w-full text-left hover:bg-gray-800 py-4 pl-4 m-0"><i class="fas fa-user-circle mr-2"></i> {user.displayName}</button>
                                <button onClick={handleLogOutRedirects} className="w-full text-left pl-4 hover:bg-gray-800 py-3 m-0">
                                    <i class="fas fa-sign-out-alt mr-2"></i>
                                    Sign Out</button>
                            </div>}
                    </div>
                }
            </div>
        </div >
    );
};

export default Header;