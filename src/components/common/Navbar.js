import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import logo from '../../assets/logo.png'
const Navbar = () => {

    const [active, setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }
    return (
        <header className="absolute inset-x-0 top-0 z-50 lg:pl-2 lg:pr-2 lg:w-full mx-auto  lg:mr-5">
            <nav className="flex items-center justify-between pr-3 lg:py-4 lg:pr-0" aria-label="Global">
                <div className="flex flex-1">
                    <Link to="/">
                        <img
                            className=" ml-1 h-10 lg:ml-6 2xl:ml-10 lg:h-10 w-auto mt-2"
                            src={logo}
                            alt=""

                        />
                    </Link>
                    <p  className=" text-lg  text-gray-900 mt-4">খেল গল্প</p>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={showMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <FiMenu className="lg:hidden block h-6 w-8 cursor-pointer  "
                        />
                    </button>
                </div>
                <div class="hidden lg:ml-16 lg:flex lg:gap-x-6 2xl:gap-x-12">

                    <ul className="flex gap-8">
                        <li>
                            <Link to="/" className=" text-lg  text-gray-900 " >হোম</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-lg  text-gray-900  ">
                            সব খেলা
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-lg text-gray-900  ">
                            ক্রিকেট 
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-lg  text-gray-900  ">
                            ফুটবল 
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-lg  text-gray-900  ">
                            টেনিস
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-lg  text-gray-900  ">
                            অন্যান্য
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="/user-signin" className="text-sm  leading-6 text-gray-900">
                    একাউন্ট
                    </Link>
                </div>
            </nav>
            {/* for small devices */}
            <ul className={active ? '  border border-gray-200 flex-col flex fixed inset-0 left-1/4 lg:left-3/4 uppercase   gap-6  md: lg:block bg-white text-black text-start ml-16 ' : 'hidden'}>
                <div className="flex justify-between bg-teal-400 h-20">
                    <RxCross1 className="text-xl ml-5  mt-6 text-white" onClick={showMenu}></RxCross1>
                </div>
                <ul>
                    <li>
                        <Link to="/" className=" text-sm  text-gray-900 px-5    block " onClick={showMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/consultation" className="text-sm  text-gray-900 px-5 py-2   block " onClick={showMenu}>
                            Consultations
                        </Link>
                    </li>
                </ul>


            </ul>

        </header>
    );
};

export default Navbar;