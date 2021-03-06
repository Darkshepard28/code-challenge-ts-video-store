#!/usr/bin/env node

import { Customer } from "./Customer";
import { MovieCollection } from "./Movie";
import { Category } from "./Category"; 

import { Command } from "commander";
import { statement } from "./statement";

const program: Command = require("commander");
const version: string = require("../package.json").version;

const customer: Customer = require("./data/customer.json");
const movies: MovieCollection = require("./data/movies.json");
const categories: Category = require("./data/categories.json");

program
  .version(version)
  .description("A CLI for generating customer statements");

program
  .command("statement")
  .description("Prints out a plain-text statement for the customer")
  .action(() => console.log(statement(customer, movies, categories, false)));
  
program
  .command("html-statement")
  .description("Prints out a HTML statement for the customer")
  .action(() => console.log(statement(customer, movies, categories, true)));
  
program.parse(process.argv);
