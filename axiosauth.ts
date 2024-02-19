import axios from 'axios';

// Replace 'yourUsername' and 'yourPassword' with your actual credentials
const username = 'yourUsername';
const password = 'yourPassword';

// Encode the credentials in base64
const base64Credentials = btoa(`${username}:${password}`);

// Set up the Axios request with the Authorization header
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${base64Credentials}`,
  },
});

// Example GET request
axiosInstance.get('/some-endpoint')
  .then(response => {
    // Handle the response
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });

