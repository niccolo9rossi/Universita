// This file handles GET and POST requests, fetches data from dati.json, and sends data to the server.

const apiUrl = '/data'; // URL for the API endpoint

// Function to fetch data from dati.json
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Process the data as needed
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Function to send data to the server
async function sendData(data) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log('Data sent successfully:', result);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    fetchData(); // Fetch data when the DOM is fully loaded

    // Example of sending data
    const sampleData = { name: 'John Doe', age: 30 };
    sendData(sampleData);
});