'use client';

import { useState, useContext, useRef } from "react";
import { FaDoorClosed } from "react-icons/fa6";
import { FaDoorOpen } from "react-icons/fa6";
import { RiHeartFill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCancelCircle } from "react-icons/im";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import searchContext from "@/utils/searchContext";
import { setPro } from "@/utils/products";



export default function NavBar() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const inputRef = useRef(null)

    const [isNavVisible, setIsNavVisible] = useState(false);
    const [doorIconHovered, setDoorIconHovered] = useState(false);
    const {
        searchString,
        setSearchString,
        page,
        size,
        selectedCategories,
        setProducts,
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
            <div className="max-w-screen-xl mx-auto">
                <div className="flex justify-between items-center border-b border-gray-700 py-2">
                    <div className="flex items-center">
                        <Link
                            href='/products'>
                            <div className="text-sm md:text-2xl text-white whitespace-nowrap font-bold mr-1 px-3">
                                Efficiency Hub
                            </div>
                        </Link>
                        <button className="text-white cursor-pointer mr-5 md:hidden md:mr-0" onClick={toggleNav}>
                            <RxHamburgerMenu />
                        </button>
                    </div>
                    <div className='flex-1 w-25 max-w-lg z-10 mx-auto expand-search-input-container'>
                        <div className="relative mx-auto">
                            <input
                            ref={inputRef}
                                type="text"
                                spellCheck="true"
                                className={`w-full bg-gray-700 rounded-full ${searchString.length > 0? 'pl-8' :'pl-3' }  py-2 text-sm placeholder-gray-400 text-white`}
                                placeholder="Search Products"
                                value={searchString}
                                onChange={e => {
                                    setSearchString(e.target.value)
                                }}
                                onKeyUp={e => {
                                    if (e.key === 'Enter') {
                                        setPro({ searchString, page, size, selectedCategories, setProducts, setTotalProductsFound })
                                    }
                                }}
                            />
                            <button
                                className="absolute right-0 top-0 bottom-0 text-gray-400 active:bg-gray-700 hover:text-white hover:bg-gray-500 rounded-full aspect-square"
                            >
                                <BiSearchAlt
                                    className='mx-auto'
                                    size='1.3rem'
                                    onClick={() => setPro({ searchString, page, size, selectedCategories, setProducts, setTotalProductsFound })}
                                />
                            </button>
                            {
                                searchString.length === 0 ?
                                    null
                                    :
                                    <button
                                        className="absolute left-0 top-0 bottom-0 text-gray-400 active:bg-gray-700 hover:text-white hover:bg-gray-500 rounded-full aspect-square"
                                    >
                                        <ImCancelCircle
                                            className='mx-auto'
                                            size='1.3rem'
                                            onClick={() =>{
                                                (inputRef.current as unknown as HTMLInputElement).focus()
                                                setSearchString('')
                                            }
                                            }
                                        />
                                    </button>
                            }

                        </div>
                    </div>
                    <div id='login-icon' className="flex items-center ml-5">
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