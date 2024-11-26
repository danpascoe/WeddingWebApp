import mongoose from "mongoose";
import { Wedding } from "../schemas/wedding.schema.js";

export const createWedding = async (request, response) => {
    const wedding = new Wedding(request.body);

    // Validation

    try {
		await wedding.save();
		response.status(201).json({ success: true, data: wedding });
	} catch (error) {
		console.error("Error in create wedding:", error.message);
		response.status(500).json({ success: false, message: "Server Error" });
	}
};

export const getWeddings = async (request, response) => {
    try {
		const weddings = await Wedding.find()
        response.status(201).json({ success: true, data: weddings });
	} catch (error) {
		console.error("Error in get weddings:", error.message);
		response.status(500).json({ success: false, message: "Server Error" });
	}    
};

export const getWedding = async (request, response) => {
    const { id } = request.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
		return response.status(404).json({ success: false, message: "Invalid Id" });
	}

    try {
		const wedding = await Wedding.findById(id)
        response.status(201).json({ success: true, data: wedding });
	} catch (error) {
		console.error("Error in get wedding (" + id + "):", error.message);
		response.status(500).json({ success: false, message: "Server Error" });
	}    
};

export const editWedding = async (request, response) => {
    const { id } = request.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
		return response.status(404).json({ success: false, message: "Invalid Id" });
	}

    try {
		const updatedWedding = await Wedding.findByIdAndUpdate(id, request.body, { new: true });
		response.status(200).json({ success: true, data: updatedWedding });
	} catch (error) {
		console.error("Error in edit wedding (" + id + "):", error.message);
        response.status(500).json({ success: false, message: "Server Error" });
	}
};
