const path = require('path')
console.log(path.sep)

const txt = path.join('/content', '/textcon', 'text file')
console.log(txt)

const base = path.basename(txt)
console.log(base)

const absolute = path.resolve(__dirname,'content','textcon','text file')
console.log(absolute)