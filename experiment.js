const fs = require('fs/promises');

const array = [1,2,3,4,5]
fs.readFile(`${__dirname}/hi1.txt`).then(smth => {
    let arr = JSON.parse(smth.toString());
    arr = [...arr, arr.length]
    fs.writeFile(`${__dirname}/hi1.txt`, JSON.stringify(arr)).then(() => console.log("DONE"))
})