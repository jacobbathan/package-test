#!/usr/bin/env node

"use strict";

import "chalk";

console.log("THIS LOG IS FROM THE NODE PACKAGE DISREGARD OR CELEBRATE");

process.on("unhandledRejection", (err) => {
  console.log(chalk.bgRed.bold("ERROR"));
  throw err;
});

const args = process.argv.slice(2);
console.log("ARG", args);
if (!args) {
  console.log(chalk.bgYellow("NO ARGUMENTS PASSED."));
}

console.log(chalk.bgBlue("Initializing Test " + args));
