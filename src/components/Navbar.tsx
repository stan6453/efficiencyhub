'use client';

import { useState, useContext } from "react";
import { FaDoorClosed } from "react-icons/fa6";
import { FaDoorOpen } from "react-icons/fa6";
import { RiHeartFill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link';

import searchContext from "@/utils/searchContext";
import { setPro } from "@/utils/products";



export default function NavBar() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [isNavVisible, setIsNavVisible] = useState(false);
    const [doorIconHovered, setDoorIconHovered] = useState(false);
    const { searchString,
        setSearch,
        page,
        setPage,
        size,
        setSize,
        selectedCategories,
        setSelectedCategories,
        products,
        setProducts,
        totalProductsFound,
        setTotalProductsFound,
    } = useContext(searchContext);

    const toggleNav = (event: any) => {
        event.stopPropagation(); // Prevents the click from propagating to the body
        setIsNavVisible(!isNavVisible);
    };

    const hideNav = () => {
        setIsNavVisible(false);
    };

    return (
        <div className="bg-gray-800 relative z-20 w-full" onClick={hideNav}>
            <div className="max-w-screen-xl mx-auto px-2">
                <div className="flex justify-between items-center border-b border-gray-700 py-2">
                    <div className="flex items-center">
                        <Link
                            href='/products'>
                            <div className="text-base md:text-2xl text-white whitespace-nowrap font-bold mr-1 px-3">
                                Efficiency Hub
                            </div>
                        </Link>
                        <button className="text-white cursor-pointer mr-5 md:hidden md:mr-0" onClick={toggleNav}>
                            <RxHamburgerMenu />
                        </button>
                    </div>
                    <div className={`flex-1 w-25 max-w-lg z-10 mx-auto expand-search-input-container`}>
                        <div className="relative mx-auto">
                            <input
                                type="text"
                                className="w-full bg-gray-700 rounded-full pl-4 pr-10 py-2 text-sm placeholder-gray-400 text-white"
                                placeholder="Search for items and brands"
                                value={searchString}
                                onChange={e => setSearch(e.target.value)}
                            />
                            <button
                                className="absolute right-0 top-0 bottom-0 text-gray-400 active:bg-gray-700 hover:text-white hover:bg-gray-500 rounded-full aspect-square"
                            >
                                <BiSearchAlt
                                    className='mx-auto'
                                    size='1.3rem'
                                    onClick={() => setPro({searchString, page, size, selectedCategories, setProducts, setTotalProductsFound})}
                                    />
                            </button>
                        </div>
                    </div>
                    <div id='login-icon' className="flex items-center">
                        <button className="text-white hover:text-gray-300 z-0">
                            <div>
                                <SignedIn>
                                    <UserButton
                                        afterSignOutUrl={`${pathname}?${searchParams}`}
                                    />
                                </SignedIn>
                                <SignedOut>
                                    <SignInButton
                                        mode="modal"
                                        redirectUrl={`${pathname}?${searchParams}`}
                                    >
                                        <div
                                            className="flex justify-evenly items-center"
                                            onMouseEnter={() => setDoorIconHovered(true)}
                                            onMouseLeave={() => setDoorIconHovered(false)}
                                        >
                                            <span className="text-sm mr-0.5">Login</span> {doorIconHovered ? <FaDoorOpen /> : <FaDoorClosed />}
                                        </div>
                                    </SignInButton>
                                </SignedOut>
                            </div>
                        </button>
                        <Link
                            className="text-white hover:text-gray-200 mx-4"
                            href="/wishlist"
                        >
                            <RiHeartFill
                                style={{ color: pathname === '/wishlist' ? 'red' : 'white' }}
                                size={pathname === '/wishlist' ? '2rem' : '1.3rem'}
                            />
                        </Link>
                    </div>
                </div>

                {/* Naviagtion links */}
                <div className={`flex flex-col md:flex-row justify-between items-center py-2 px-5 nav-menu shadow-lg ${isNavVisible ? 'responsive' : ''}`} onClick={e => e.stopPropagation()}>
                    <a href="#" className="text-gray-400 text-xs uppercase font-semibold hover:text-white hover:bg-gray-500 md:px-3 py-2 pl-8 w-[100%] md:text-center whitespace-nowrap">New in</a>
                    <a href="#" className="text-gray-400 text-xs uppercase font-semibold hover:text-white hover:bg-gray-500 md:px-3 py-2 pl-8 w-[100%] md:text-center">Clothing</a>
                    <a href="#" className="text-gray-400 text-xs uppercase font-semibold hover:text-white hover:bg-gray-500 md:px-3 py-2 pl-8 w-[100%] md:text-center">Gifting</a>
                    <a href="#" className="text-gray-400 text-xs uppercase font-semibold hover:text-white hover:bg-gray-500 md:px-3 py-2 pl-8 w-[100%] md:text-center">Shoes</a>
                    <a href="#" className="text-gray-400 text-xs uppercase font-semibold hover:text-white hover:bg-gray-500 md:px-3 py-2 pl-8 w-[100%] md:text-center">Sportswear</a>
                    <a href="#" className="text-gray-400 text-xs uppercase font-semibold hover:text-white hover:bg-gray-500 md:px-3 py-2 pl-8 w-[100%] md:text-center">Winter</a>
                    <a href="#" className="text-gray-400 text-xs uppercase font-semibold hover:text-white hover:bg-gray-500 md:px-3 py-2 pl-8 w-[100%] md:text-center">Brands</a>
                    <a href="#" className="text-gray-400 text-xs uppercase font-semibold hover:text-white hover:bg-gray-500 md:px-3 py-2 pl-8 w-[100%] md:text-center">Topman</a>
                    <a href="#" className="text-gray-400 text-xs uppercase font-semibold hover:text-white hover:bg-gray-500 md:px-3 py-2 pl-8 w-[100%] md:text-center">Marketplace</a>
                </div>
            </div>
        </div>
    );
}