# Full Stack Web App

## Description
This is a full-stack web application built with [React](https://reactjs.org/) for the frontend and [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/) for the backend. The application integrates with MongoDB for data storage.

## Getting Started

Follow the steps below to set up and run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB Compass](https://www.mongodb.com/try/download/compass) (for managing MongoDB databases)

### Installation Steps

1. **Create a new folder**:
   ```
   mkdir your-folder-name
   cd your-folder-name
2. Initialize a new Git repository:
   ```
   git init
3. Clone the repository:
   ```
   git clone https://github.com/krunal1999/Full_Stack_Web_App.git
4. Navigate to the project directory:
   ```
   cd Full_Stack_Web_App/
5. Set up environment variables:
   Go to the Frontend/demoProject/ directory and rename .env.sample to .env:
    ```
    cd Frontend/demoProject/
    mv .env.sample .env
    ```
    
   Go to the Backend/ directory and rename .env.sample to .env:
    ```
    cd ../Backend/
    mv .env.sample .env
    ```
   Add your MongoDB Compass URL to the .env file.
   Make sure to:
   - Remove the / from the end of the link.
   - Optionally, change the ACCESS_TOKEN_SECRET and ACCESS_TOKEN_EXPIRY values.
     
6. Install dependencies and run the application:
    - Go back to the Full_Stack_Web_App directory:
    ```
    cd ..
    ```
    
    - Install and run the frontend:
    ```
    cd Frontend/demoProject/
    npm install
    npm run dev
    ```
    
    - In a new terminal, install and run the backend:
    ```
    cd ../Backend/
    npm install
    npm run dev
    ```
7. Usage
- Once the application is running, you can access the frontend in your web browser at http://localhost:5173
