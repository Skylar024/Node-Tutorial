const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----');
//     console.log(chunk);
//     writeStream.write('\nNEWCHUNK\n');
//     writeStream.write(chunk);
// });

//Piping (Does the same thing as the commented-out code above)
readStream.pipe(writeStream);