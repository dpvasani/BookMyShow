# Backend-Template

This repository provides a production-grade backend template for Node.js applications using Express.js and MongoDB. It includes a foundational structure, environment configuration, and a basic User model to help jump start backend development.

## Features

- **Production-Grade Setup**: Configured for scalability, security, and performance.
- **Express.js**: Minimalist web framework for routing and middleware.
- **MongoDB**: Integrated with Mongoose ORM for schema management and database operations.
- **User Model**: Pre-configured with basic fields like `name`, `email`, and `password`.
- **Prettier**: Code formatting with custom rules for maintaining code consistency.
- **Environment Configuration**: `.env` file for secure storage of sensitive data (e.g., database credentials, API keys).
- **Git Best Practices**: `.gitignore` for keeping sensitive files out of version control.

## Folder Structure

```bash
Backend-Template/
├── public/                    # Public assets (if any)
│   └── temp/                  # Temporary files or uploads
├── src/                       # Main application code
│   ├── controllers/           # Route controllers (business logic)
│   ├── models/                # Mongoose models (database schema)
│   ├── routes/                # Route definitions (API endpoints)
│   ├── middlewares/           # Custom middleware (e.g., authentication)
│   ├── config/                # Configuration files (e.g., database setup)
│   ├── services/              # Service logic (e.g., external API calls, utilities)
│   └── app.js                 # Main application file
├── .env                       # Environment variables
├── .gitignore                 # Ignored files for version control
├── .prettierignore            # Files ignored by Prettier
├── .prettierrc                # Prettier configuration
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Lockfile for consistent dependency versions
└── README.md                  # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or cloud instance)
- Environment variables configured in a `.env` file

### Environment Variables

Create a `.env` file in the root directory and add the following:

```bash
# Example .env file

DB_CONNECTION_STRING=mongodb://localhost:27017/your-db-name
PORT=3000
JWT_SECRET=your-secret-key
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dpvasani/Backend-Template.git
   cd Backend-Template
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your MongoDB connection in the `.env` file.

4. Start the server:

   ```bash
   npm run start
   ```

### Running in Production

To run in production, make sure your environment is correctly configured, and use a process manager like **PM2** for managing the application in production environments:

```bash
npm install -g pm2
pm2 start src/app.js --name backend-template
```

## Contributing

Feel free to open issues or create pull requests if you have suggestions for improvements!

## License

This project is licensed under the MIT License.
