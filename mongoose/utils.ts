import Product from "./productmodel";

export async function getProducts(query = {}, page: number | undefined = 1, size = 20) {
    const skip = (page - 1) * size;

    const result = await Product.aggregate([
        { $match: query },
        {
            $facet: {
              documents: [{ $skip: skip }, { $limit: size }], // Adjust skip and limit as needed
              count: [{ $count: 'count' }],
            },
        }
      ]);

      const products = result[0].documents;
      const count = result[0].count[0].count;

    return {products, count};
}
