const { MongoClient } = require("mongodb");
let mongoose = require("mongoose");
require("dotenv").config();

// for production use this 
const mongoLiveURI = process.env.MONGO_LIVE_URL;

// for development use this
const mongoLocalURI = process.env.MONGO_URL;
// const mongoURI = "mongodb://localhost:27017/bookMovie" + "bookMovie"

const connectToMongo = async () => {
  // Connecting to database using connection string and speciying if there is any error or it was successfull
  mongoose
    .connect( mongoLiveURI, 
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }
    )
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Database connection error", err);
    });
};

exports.connection = connectToMongo;
