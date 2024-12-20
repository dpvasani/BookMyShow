import dotenv from "dotenv";
dotenv.config(); // Loads environment variables

import connectDB from "./db/dbconnect.js";
import app from "./app.js"; // Importing app instance

// Connect to DB and start the server
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error in Server Setup", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed", err);
  });
