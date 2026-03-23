const moment = require('moment');

const name = process.argv[2];

if (!name) {
    console.log("Please provide your name");
} else {
    const formattedDate = moment().format('dddd, MMMM Do YYYY, h:mm A');
    console.log(`Hello, ${name}! Today is ${formattedDate}`);
}