import mongoose from "mongoose";
import { weddingSchema } from "../schema/wedding.schema.js";

export const getWeddings = async (request, response) => {
    response.status(200).json("Get weddings called");
};

export const getWedding = async (request, response) => {
    const { id } = request.params;
    response.status(200).json("Get wedding called - id: " + id);
};

export const createWedding = async (request, response) => {
    response.status(200).json("Create wedding called")
};

export const editWedding = async (request, response) => {
    response.status(200).json("Edit wedding called - id: " + id);
};

export const deleteWedding = async (request, response) => {
    response.status(200).json("Delete wedding called - id: " + id);
};