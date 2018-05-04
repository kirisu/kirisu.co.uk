#! /usr/bin/env node
const path = require('path');
const fs = require('fs');

const DESTINATION = path.join(__dirname, '..', 'out', '.nojekyll');

fs.writeFileSync(DESTINATION, '');

console.log(`Wrote .nojekyll file to ${DESTINATION}`);
