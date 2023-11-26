const { log } = require('console');
const os = require('os')//this is built in module so no need to install it . for some external modules it is necessary to install the module

//info about the current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds

console.log(`the system uptime is ${os.uptime()} seconds`);


const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)