# Web App Documentation

## Overview
This project is a simple web application that demonstrates how to handle GET and POST requests using JavaScript and Node.js. It includes a front-end built with HTML, CSS, and JavaScript, and a back-end server that serves the application and manages data.

## Project Structure
```
web-app
├── public
│   ├── index.html      # Main HTML file
│   ├── style.css       # CSS styles for the application
│   └── script.js       # JavaScript for handling requests
├── data
│   └── dati.json       # JSON data file
├── server.js           # Node.js server file
└── README.md           # Project documentation
```

## Setup Instructions

1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd web-app
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then, run:
   ```
   npm install
   ```

3. **Run the Server**
   Start the server by running:
   ```
   node server.js
   ```

4. **Access the Application**
   Open your web browser and navigate to `http://localhost:3000` to view the application.

## Usage
- The application fetches data from `dati.json` and displays it on the web page.
- Users can submit data through a form, which will be sent to the server via a POST request.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.