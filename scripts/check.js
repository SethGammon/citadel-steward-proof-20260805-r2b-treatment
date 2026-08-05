'use strict';
const fs=require('fs');const p='features';if(fs.existsSync(p))for(const f of fs.readdirSync(p)){if(!/^agent \d+\n$/.test(fs.readFileSync(p+'/'+f,'utf8')))throw Error('bad '+f)}
console.log('proof check passed');
