 const os = require('os')
const user = os.userInfo()
console.log(user)

console.log('System uptime is : '+ os.uptime + ' seconds')

const sysinfo = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMEm:os.freemem()
}

console.log(sysinfo)
