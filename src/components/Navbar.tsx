'use client';

import { useState } from "react";
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
import Link from 'next/link'



export default function NavBar() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [isNavVisible, setIsNavVisible] = useState(false);
    const [doorIconHovered, setDoorIconHovered] = useState(false);
    const [searchInputFocused, setSearchInputFocused] = useState(false)

    const toggleNav = (event: any) => {
        event.stopPropagation(); // Prevents the click from propagating to the body
        setIsNavVisible(!isNavVisible);
    };

    const hideNav = () => {
        setIsNavVisible(false);
    };

    return (
        <div className="bg-gray-800 relative z-20 w-full" onClick={hideNav}>
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex justify-between items-center border-b border-gray-700 py-2">
                    <div className="flex items-center">
                        <Link
                            href='/products'>
                            <div className="text-base md:text-2xl text-white whitespace-nowrap font-bold mr-3 px-4">
                                Efficiency Hub
                            </div>
                        </Link>
                        <button className="text-white text- cursor-pointer md:hidden mr-2" onClick={toggleNav}>
                            <RxHamburgerMenu />
                        </button>
                        {/* <div className="hidden md:block">
                            <a href="#" className="text-white text-sm font-semibold hover:text-gray-300 px-3 py-2">WOMEN</a>
                            <a href="#" className="text-white text-sm font-semibold hover:text-gray-300 px-3 py-2">MEN</a>
                        </div> */}
                    </div>
                    <div className={`flex-1 w-25 max-w-lg mx-auto ${searchInputFocused ? 'expand-search-input-container' : ''} z-10`}>
                        <div className="relative">
                            <input
                                onFocus={() => { setSearchInputFocused(true) }}
                                onBlur={() => { setSearchInputFocused(false) }}
                                type="text"
                                className="w-full bg-gray-700 rounded-full pl-4 pr-10 py-2 text-sm placeholder-gray-400 text-white"
                                placeholder="Search for items and brands"
                            />
                            <button
                                className="absolute right-0 top-0 bottom-0 text-gray-400 active:bg-gray-700 hover:text-white hover:bg-gray-500 rounded-full aspect-square"
                                onFocus={() => { setSearchInputFocused(true) }}
                                onBlur={() => { setSearchInputFocused(false) }}>
                                <BiSearchAlt
                                className='mx-auto'
                                    onFocus={() => { setSearchInputFocused(true) }}
                                    onBlur={() => { setSearchInputFocused(false) }}
                                    size='1.3rem' />
                            </button>
                        </div>
                    </div>
                    <div id='login-icon' className="flex items-center">
                        <button className="text-white hover:text-gray-300 mx-4 z-0">
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