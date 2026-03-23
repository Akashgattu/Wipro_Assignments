const chalk = require('chalk');
const figlet = require('figlet');

const data = figlet.textSync('Welcome to Node.js');

console.log(chalk.blue(data));