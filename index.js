'use strict';

const fs = require('fs');
const path = require('path');

try {
    //  Try to parse the argument.
    const fileName = parseInt(process.argv[2]);
    if (isNaN(fileName)) {
        throw new Error(`${fileName} is not a number!`);
    } else {
        copyTemplate(fileName.toString());
    }
} catch (error) {
    // eslint-disable-next-line no-console
    console.log('Please enter a number!');
}

//  Make a copy of the template to modify.
function copyTemplate(fileName) {
    const templatePath = path.join(__dirname, './lib/template.js');
    const destination = path.join(process.cwd(), `./is${fileName}.js`);

    const readStream = fs.createReadStream(templatePath);
    readStream.once('error', (err) => {
        // eslint-disable-next-line no-console
        console.error(err);
    });
    readStream.pipe(fs.createWriteStream(destination));
    readStream.once('end', () => transformToX(destination, fileName));
}

//  Modify the copied file.
function transformToX(destination, fileName) {
    let file = fs.readFileSync(destination, {
        encoding: 'utf8'
    });
    file = file.replace('-9999999999999999', fileName);
    fs.writeFileSync(destination, file, {
        encoding: 'utf8'
    });
}