import productModel from "../models/ProductModel.js";

export const createProduct = async (req, response) => {

    // const productname = req.body.name;
    // const price = req.body.price;
    // const description = req.body.descrption;

    const { name, price, category, description } = req.body;

    try {

        const product = new productModel();
        product.name = name;
        product.price = price;
        product.description = description;
        product.category = category;
        await product.save();

        return response.status(201).json(product);
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
};

export async function getProducts(req, response) {

    const product = await productModel.find();

    return response.status(200).json(product)

}

export const updateProduct = async (req, resp) => {

    const { id } = req.params;
    const { name, price, category, description } = req.body;

    try {

        const product = await productModel.findById(id);

        if (!product) {
            return resp.status(404).json({ message: "Product not Found" });
        }

        product.name = name;
        product.price = price;
        product.description = description;
        product.category = category;

        await product.save();


        return resp.status(200).json(product);
    } catch (error) {
        return resp.status(500).json({ message: error.message });
    }
};