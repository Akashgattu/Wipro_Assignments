const fs = require('fs').promises;

// Read → Write using Promises
fs.readFile('input.txt', 'utf8')
    .then(data => {
        return fs.writeFile('output.txt', data);
    })
    .then(() => {
        console.log("File copied successfully!");
    })
    .catch(err => {
        console.error("Error:", err);
    });