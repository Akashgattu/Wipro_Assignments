// Import nothing needed (using global objects)

// Log Node.js version
console.log("Node.js Version:", process.version);

// Log current file name and directory
console.log("File Name:", __filename);
console.log("Directory:", __dirname);

// Welcome message every 3 seconds
const interval = setInterval(() => {
    console.log("Welcome to Node.js!");
}, 3000);

// Stop after 10 seconds (Bonus)
setTimeout(() => {
    clearInterval(interval);
    console.log("Stopped after 10 seconds");
}, 10000);