import mongoose from "mongoose";
import { Guest } from "../schemas/guest.schema.js";

export const createGuest = async (request, response) => {
    const guest = new Guest(request.body);

    // Validation

    try {
		await guest.save();
		response.status(201).json({ success: true, data: guest });
	} catch (error) {
		console.error("Error in create guest:", error.message);
		response.status(500).json({ success: false, message: "Server Error" });
	}
};

export const getGuests = async (request, response) => {
	const { weddingId } = request.params;

    try {
		const guest = await Guest.find({ weddingId: weddingId })
        response.status(201).json({ success: true, data: guest });
	} catch (error) {
		console.error("Error in get guests:", error.message);
		response.status(500).json({ success: false, message: "Server Error" });
	}    
};

export const getGuest = async (request, response) => {
    const { guestId } = request.params;
    console.log(guestId);
    if (!mongoose.Types.ObjectId.isValid(guestId)) {
		return response.status(404).json({ success: false, message: "Invalid Id" });
	}

    try {
		console.log(guestId);
		const guest = await Guest.findById(guestId)
        response.status(201).json({ success: true, data: guest });
	} catch (error) {
		console.error("Error in get guest (" + guestId + "):", error.message);
		response.status(500).json({ success: false, message: "Server Error" });
	}    
};

export const editGuest = async (request, response) => {
    const { guestId } = request.params;
    
    if (!mongoose.Types.ObjectId.isValid(guestId)) {
		return response.status(404).json({ success: false, message: "Invalid Id" });
	}

    try {
		const guest = await Guest.findByIdAndUpdate(guestId, request.body, { new: true });
		response.status(200).json({ success: true, data: guest });
	} catch (error) {
		console.error("Error in edit guest (" + guestId + "):", error.message);
        response.status(500).json({ success: false, message: "Server Error" });
	}
};
