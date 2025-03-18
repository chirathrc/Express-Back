import CategoryModel from "../models/CategoryModel.js";  // Correct path

export const createCategory = async (req, res) => {
    const { name } = req.body;  // Destructure name from the body

    try {
        // Create a new category instance
        const category = new CategoryModel();
        category.name = name;

        // Save to the database
        await category.save();

        return res.status(201).json(category);  // Return the created category
    } catch (error) {
        return res.status(500).json({ message: error.message });  // Return error if any
    }
};

export const getCategories = async (req, res) => {
    try {
        // Retrieve all categories from the database
        const categories = await CategoryModel.find();
        return res.status(200).json(categories);  // Return the categories
    } catch (error) {
        return res.status(500).json({ message: error.message });  // Return error if any
    }
};
