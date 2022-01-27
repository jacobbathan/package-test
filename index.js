#!/usr/bin/env node

"use strict";

console.log("THIS LOG IS FROM THE NODE PACKAGE DISREGARD OR CELEBRATE");

process.on("unhandledRejection", (err) => {
  throw err;
});

const args = process.argv.slice(2);
console.log("ARG", args);
