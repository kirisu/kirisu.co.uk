#! /usr/bin/env node
const path = require('path');
const fs = require('fs');

const DESTINATION = path.join(__dirname, '..', 'out', 'CNAME');

fs.writeFileSync(DESTINATION, 'kirisu.co.uk');
