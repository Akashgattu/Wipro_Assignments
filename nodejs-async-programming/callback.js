const fs = require('fs');

// Read file using callback
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    console.log("File Content:\n", data);

    // Bonus: Add delay
    setTimeout(() => {
        console.log("Read operation completed");
    }, 1000);
});