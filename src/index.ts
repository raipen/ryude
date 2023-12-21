#!/usr/bin/env node
import getPost from './getPost.js';

const args = process.argv.slice(2);
console.log(args);
getPost();