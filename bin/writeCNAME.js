#! /usr/bin/env node
const path = require('path');
const fs = require('fs');

const DESTINATION = path.join(__dirname, '..', 'out', 'CNAME');

fs.writeFileSync(DESTINATION, 'www.kirisu.co.uk');

console.log(`Wrote CNAME file to ${DESTINATION}`);
