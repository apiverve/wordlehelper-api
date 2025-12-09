/**
 * Basic Example - Wordle Helper API
 *
 * This example demonstrates how to use the Wordle Helper API.
 * Make sure to set your API key in the .env file or replace '[YOUR_API_KEY]' below.
 */

require('dotenv').config();
const wordlehelperAPI = require('../index.js');

// Initialize the API client
const api = new wordlehelperAPI({
    api_key: process.env.API_KEY || '[YOUR_API_KEY]'
});

// Example query
var query = {
  green: "A1,E5",
  yellow: "R2,O3",
  gray: "STLN",
  pattern: "A___E",
  limit: 25
};

// Make the API request using callback
console.log('Making request to Wordle Helper API...\n');

api.execute(query, function (error, data) {
    if (error) {
        console.error('Error occurred:');
        if (error.error) {
            console.error('Message:', error.error);
            console.error('Status:', error.status);
        } else {
            console.error(JSON.stringify(error, null, 2));
        }
        return;
    }

    console.log('Response:');
    console.log(JSON.stringify(data, null, 2));
});
