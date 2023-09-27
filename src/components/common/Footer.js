import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="w-full mt-12">
            <footer className="bg-white dark:bg-gray-900">
                <div className=" p-6 mx-auto">
                    <div className="lg:flex">
                        <div className="w-full -mx-6 lg:w-2/5">
                            <div className="px-6">
                                <Link>
                                <p className="text-start text-lg">খেল গল্প</p>
                                </Link>

                                <p className="text-sm max-w-sm mt-2 text-gray-500 dark:text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>

                                <div className="flex mt-6 -mx-2">
                                    
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-2 lg:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white text-lg text-start">About</h3>
                                    <Link to="" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline text-start">Company</Link>
                                    <Link to="" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline text-start">community</Link>
                                    <Link to="" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline text-start">Careers</Link>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white text-lg text-start">Blog</h3>
                                    <Link to="" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline text-start">Tec</Link>
                                    <Link to="" className="text-start block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</Link>
                                    <Link to="" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline text-start">Videos</Link>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white text-lg text-start">Products</h3>
                                    <Link to="" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline text-start">Mega cloud</Link>
                                    <Link to="" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline text-start">Aperion UI</Link>
                                    <Link to="" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline text-start">Meraki UI</Link>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white text-lg text-start">Contact</h3>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline text-start">+1 526 654 8965</span>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline text-start">example@email.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

                    <div>
                        <p className=" text-sm text-center text-gray-500 dark:text-gray-400">© Brand 2020 - All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;