const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second)

writeFileSync('./content/write-sync.txt','here is the first and second files :' 
+ first +second, { flag : 'a' })
