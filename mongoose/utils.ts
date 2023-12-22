import Product from "./productmodel";

export async function getProducts(query:any = {}, page: number | undefined = 1, size = 20) {
  const skip = (page - 1) * size;

  let documentPipeline = []
  if (query.$text) {
    documentPipeline = [
      { $addFields: { score: { $meta: "textScore" } } },
      { $sort: { score: { $meta: "textScore" } } },
      { $skip: skip },
      { $limit: size },
    ]
  } else {
    documentPipeline = [
      { $skip: skip },
      { $limit: size },
    ]
  }

  const result = await Product.aggregate([
    { $match: query },
    {
      $facet: {
        documents: documentPipeline,
        count: [{ $count: 'count' }],
      },
    }
  ]);

  const products = result[0].documents;
  const count = result[0].count[0].count;

  return { products, count };
}
