const image = process.argv.slice(2);
const tesseract = require('tesseract.js');
//const fs = require('fs');

if(image.length <= 0) {
    console.log('You must define a path to an image');
} else {
    const path = image[0];

    tesseract.recognize(
        path,
        'eng',
        {logger: m => console.log(m)}
    ).then(({data: { text }}) => {
        console.log(text);
    });
}