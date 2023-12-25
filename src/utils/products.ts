export async function getProducts(url: URL) {
    try {
        const res = await fetch(url);
        const jsonRes = await res.json();
        return jsonRes
    } catch (err) {
        console.log(err)
    }
}


export function getAndSetProducts({ searchString, page, size, selectedCategories, setProducts, setTotalProductsFound }: any) {
    const url = new URL('/api/products', process.env.NEXT_PUBLIC_HOST)
    url.searchParams.set('page', `${page}`);
    url.searchParams.set('size', `${size}`);
    url.searchParams.set('searchstring', `${searchString}`);
    url.searchParams.set('categories', JSON.stringify(selectedCategories));

    const productList = getProducts(url)
        .then((res) => {
            setProducts(res.products);
            setTotalProductsFound(res.count)
        })
}


export async function getProduct(id: string) {
    try {
        const url = new URL(`/api/products/${id}`, process.env.NEXT_PUBLIC_HOST)
        let res: any = await fetch(url)
        res = await res.json()
        return res.body.product
    } catch (err) {
        console.log(err)
        return null
    }
}