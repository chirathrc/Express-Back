import mongoose, { Schema } from "mongoose";

// Define the category schema
const categorySchema = new Schema({
    name: {
        type: String,
        required: true,  // Ensure that name is a required field
    },
    createdAt: {
        type: Date,
        default: Date.now,  // Automatically set the creation time
    },
    updatedAt: {
        type: Date,
        default: Date.now,  // Automatically set the update time
    },
});

// Define the model based on the schema
const CategoryModel = mongoose.model('Category', categorySchema);

export default CategoryModel;  // Export the model for use in other files
