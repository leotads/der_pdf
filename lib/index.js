const PDFDocument = require('pdfkit')
const fs = require("fs");

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('der.pdf'));

doc.text('Hello World!');

doc.end();