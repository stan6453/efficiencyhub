import Product from "./productmodel";

export async function getProducts(query = {}, page: number | undefined = 1, size = 20) {
    const skip = (page - 1) * size;
    const productList = await Product.find(query).skip(skip).limit(size).exec();
    return productList;
}
