import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { CiSettings, CiUser, CiSearch } from 'react-icons/ci';
import { GoReport, GoProjectSymlink } from 'react-icons/go';
import { MdTask, MdOutlineDashboardCustomize } from 'react-icons/md';
import { RxCross1 } from "react-icons/rx";
import { GiCricketBat } from "react-icons/gi";
import { BiFootball } from "react-icons/bi";
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
    
    return (
        <div className="w-full flex">
            <div className="w-1/4 sidebar">
                <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 sidebar">
                    <div className="flex flex-col justify-between flex-1 ">

                        <nav className="flex-1 -mx-3 space-y-3 ">

                            <Link to=""  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                                <AiOutlineHome className="text-md h-4 w-4"></AiOutlineHome>
                                <span className="mx-2 text-sm font-medium">হোম</span>
                            </Link>
                            <Link to="" className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                                <GiCricketBat className="text-md h-4 w-4"></GiCricketBat>
                                <span className="mx-2 text-sm font-medium">সব খেলা</span>
                            </Link>
                            <Link to="/cricket/news" className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                                <GiCricketBat className="text-md h-4 w-4"></GiCricketBat>

                                <span className="mx-2 text-sm font-medium">ক্রিকেট</span>
                            </Link>
                            <Link to="" className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                                <BiFootball className="text-md h-4 w-4"></BiFootball>

                                <span className="mx-2 text-sm font-medium">ফুটবল</span>
                            </Link>



                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                                <CiUser className="text-md h-4 w-4"></CiUser>
                                <span className="mx-2 text-sm font-medium">Users</span>
                            </Link>

                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                                <CiSettings className="text-md h-4 w-4"></CiSettings>
                                <span className="mx-2 text-sm font-medium">Setting</span>
                            </Link>
                        </nav>


                    </div>
                </aside>
            </div>
            <div className="w-3/4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;