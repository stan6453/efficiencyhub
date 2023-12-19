export async function getWishList() {
    try {
        const url = new URL('/api/users/me/wishlist', process.env.NEXT_PUBLIC_HOST)
        let res: any = await fetch(url)
        if (!res.ok) {
            console.log('not logged in or some other error');
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