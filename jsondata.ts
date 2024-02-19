import * as fs from 'fs';
import * as path from 'path';

// Specify the path to your JSON file
const jsonFilePath = path.join(__dirname, 'example.json'); // Adjust the filename as needed

// Read the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading JSON file: ${err.message}`);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Iterate over the properties of the JSON object
    console.log("Iterating over object properties:");
    for (const key in jsonData) {
      if (Object.prototype.hasOwnProperty.call(jsonData, key)) {
        const value = jsonData[key];
        console.log(`${key}: ${value}`);
      }
    }

    // Iterate over the elements of an array in the JSON object
    if (Array.isArray(jsonData.exampleArray)) {
      console.log("\nIterating over array elements:");
      for (const element of jsonData.exampleArray) {
        console.log(element);
      }
    }
  } catch (parseError) {
    console.error(`Error parsing JSON: ${parseError.message}`);
  }
});

