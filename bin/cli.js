#!/usr/bin/env node
const lib = require('../dist/{name-package}.js');

try {
  lib.cli(process);
} catch (e) {
  console.error(e);
  process.exit(0);
}
