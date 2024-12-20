import express from 'express';
import { storeBooking, getBooking } from "../Controller/movieController.js";

const router = express.Router();

router.post("/booking", storeBooking);
router.get("/booking", getBooking);

export default router;
