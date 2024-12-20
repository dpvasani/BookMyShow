# Backend Setup for BookMyShow

This is the backend API for the BookMyShow application. The backend is built with Node.js and connects to MongoDB for storing data. The project includes standardized API responses, custom error handling, and asynchronous handling for better performance and error management.

## Project Structure

The backend is organized as follows:

```
Backend/
│
├── public/           # Static files (images, CSS, etc.)
├── src/              # Main source code
│   ├── controllers/  # Business logic for handling requests
│   ├── db/           # Database configurations and scripts
│   ├── models/       # Mongoose models (schemas)
│   ├── routes/       # API route definitions
│   ├── utils/        # Utility functions or helpers
│   ├── app.js        # Main app file, entry point for the server
│   ├── constants.js  # Constants used in the application
│   ├── index.js      # Starting point of the application
├── .env              # Environment variables
├── .gitignore        # Git ignore file
├── package.json      # Project metadata and dependencies
├── package-lock.json # Lock file for dependencies
└── Readme.md         # Project readme file
```

## Setup Instructions

Follow these steps to get the backend running locally:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone <repository-url>
cd BookMyShow/Backend
```

### 2. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following content:

```
PORT=4000
MONGODB_URL=<Your MongoDB connection URL>
CORS_ORIGIN=*
MODE=development
```

Make sure to replace `<Your MongoDB connection URL>` with your actual MongoDB connection string.

### 4. Start the Server

Run the server using the following command:

```bash
npm start
```

The server will start on port `4000` by default.

## Key Features Added

### 1. Standardized Response
The API uses a consistent response format by utilizing `ApiResponse` to ensure all responses follow the same structure. This improves the predictability of the API and simplifies client-side development.

### 2. Error Handling
Custom error handling is implemented with `ApiError`, allowing for more detailed error messages and better insight into issues that may arise during API requests.

### 3. Async Handling
All route controllers are wrapped in `asyncHandler` to ensure that asynchronous errors are handled correctly. This prevents unhandled promise rejections and improves the stability of the backend.

## Prettier Setup

Prettier is installed globally to ensure code consistency. You can format your code by running:

```bash
npx prettier --write .
```

This will automatically format all the code files in the project.

## Dependencies

- **Express**: Web framework for Node.js
- **Mongoose**: MongoDB object modeling
- **CORS**: Cross-Origin Resource Sharing middleware
- **dotenv**: Load environment variables from a `.env` file
- **Prettier**: Code formatter

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```