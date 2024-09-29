const xyz = require('./people');

console.log(xyz);
console.log(xyz.people, xyz.ages);
console.log(xyz.people);
console.log(xyz.ages);

const { people } = require('./people');

console.log(people)

const os = require('os');

console.log(os.platform(), os.homedir());
console.log(__dirname)