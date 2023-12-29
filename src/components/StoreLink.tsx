import { useState, useEffect } from "react";
import Image from 'next/image';
import { PiShoppingCartFill } from "react-icons/pi";
import { PiShoppingCartBold } from "react-icons/pi";

import { IStore } from "../../global_types";
import { fetchOpenGraphData } from "../utils/shops";
import { logos } from '../utils/shops';

export default function ShopJsx({ store }: { store: IStore }) {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')


    useEffect(() => {
        fetchOpenGraphData(store.link)
            .then((res) => {
                const title = res.title?.split(' ').slice(0, 3).join(' ')
                setTitle( title + '...')
                setImage(res.image as string)
            })
    }, [])

    return (
        <a target="_blank" href={store.link}
            className="p-0 m-0 block w-[125px] border-grey border">
            <div className="w-[100%] h-[100%] flex flex-col items-center">
                <Image
                    src={logos[store.name] as string}
                    width={90}
                    height={90}
                    alt={'shop image'}
                    className="p-0 m-0"
                />
                <Image
                    src={image}
                    width={120}
                    height={120}
                    alt={title}
                    className="p-0 m-0"
                />
            </div>
            <div className="text-xs text-ellipsis overflow-clip text-blue-800 px-2 pb-2">
                {title}
            </div>
            <div
                className="flex flex-nowrap items-center py-2 px-1"
                style={{ backgroundImage: 'linear-gradient(to bottom,#f8e6b8 0,#f3d686 6%,#ebb62c 100%)' }}
            >
                <PiShoppingCartBold />
                <span className="text-xs">Shop now</span>
            </div>
        </a>


    );
}