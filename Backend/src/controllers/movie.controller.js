import BookingModel from "../models/booking.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/AsynHandler.js";

// Store Booking
export const storeBooking = asyncHandler(async (req, res) => {
  const { movie, slot, seats } = req.body;

  if (!movie || !slot || !seats) {
    throw new ApiError(400, "All fields (movie, slot, seats) are required.");
  }

  const myData = new BookingModel({ movie, slot, seats });
  const data = await myData.save();

  return new ApiResponse(200, data, "Booking successful").send(res);
});

// Get Last Booking
export const getBooking = asyncHandler(async (req, res) => {
  const data = await BookingModel.find().sort({ _id: -1 }).limit(1);

  if (!data || data.length === 0) {
    throw new ApiError(404, "No previous booking found!");
  }

  return new ApiResponse(200, data, "Last booking").send(res);
});
