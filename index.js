import fs from 'fs';


const text = fs.readFileSync('teste.txt', 'utf-8');
console.log(text);