#!/usr/bin/env node
import build from './build';
import devServer from './dev-server';

const args = process.argv.slice(2);
console.log(args);

if(args[0] === 'build') build();
else if(args[0] === '') devServer();
else console.log('Unknown command');