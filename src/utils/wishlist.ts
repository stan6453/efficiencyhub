export async function getWishList() {
    try {
        const url = new URL('/api/users/me/wishlist', process.env.NEXT_PUBLIC_HOST)
        let res: any = await fetch(url)
        if (!res.ok) {
            console.log('not logged in or some other error');
            console.log(res);
            return [];
        }
        res = await res.json()
        if (res.status == 401) {
            console.log('not logged in');
            return [];
        }
        return res.body.wishlist;
    } catch (err) {
        console.log(err)
        return [];
    }
}


export async function getWishlistProducts() {
    const url = new URL('/api/users/me/wishlist/products', process.env.NEXT_PUBLIC_HOST)
    const res = await fetch(url)
    return (await res.json()).body.wishlist;
}

export async function addToWishList(productId: string) {
    const url = new URL(`/api/users/me/wishlist/${productId}`, process.env.NEXT_PUBLIC_HOST)
    const res = await fetch(url, { method: 'POST' })
    console.log(res)
    if (res.redirected == true) {
        return null
    } else {
        return (await res.json()).body.wishlist;
    }
}

export async function removeFromWishlist(productId: string) {
    const url = new URL(`/api/users/me/wishlist/${productId}`, process.env.NEXT_PUBLIC_HOST)
    const res = await fetch(url, { method: 'DELETE' })
    return (await res.json()).body.wishlist;
}