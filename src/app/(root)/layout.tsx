'use client'

import { useState } from 'react';

import searchContext from '@/utils/searchContext'
import NavBar from "@/components/Navbar";
import { Category } from '../../../global_types';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [searchString, setSearchString] = useState('');
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(20);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [products, setProducts] = useState<null | []>(null);
    const [totalProductsFound, setTotalProductsFound] = useState(0);
    const [categories, setCategories] = useState<Category[]>([]);

    return (
        <searchContext.Provider value={{
            searchString,
            setSearchString,
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
            categories,
            setCategories,
        }}>
            <NavBar />
            {children}
        </searchContext.Provider>
    )
}