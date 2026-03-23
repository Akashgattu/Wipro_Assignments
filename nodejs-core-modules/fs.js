const fs = require('fs').promises;

async function handleFile() {
  try {
    const data = "Node.js is awesome!";

    // Write to file
    await fs.writeFile('feedback.txt', data);
    console.log("Data written successfully.");

    // Read from file
    console.log("Reading file...");
    const fileData = await fs.readFile('feedback.txt', 'utf8');
    console.log(fileData);

  } catch (err) {
    console.error("Error:", err);
  }
}

handleFile();