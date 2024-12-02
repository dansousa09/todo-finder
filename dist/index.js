#!/usr/bin/env node
import chalk from "chalk";
import fs from "fs";
import { glob } from "glob";
import path from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
// Define the CLI
const argv = yargs(hideBin(process.argv))
    .usage("Usage: $0 [options]")
    .option("directory", {
    alias: "d",
    describe: "Directory to analyze",
    default: ".",
    type: "string",
})
    .help("help")
    .alias("help", "h")
    .parseSync();
const scanDirectory = (directory) => {
    console.log(chalk.blue(`Scanning directory: ${directory}`));
    // Match all JavaScript and TypeScript files
    const files = glob.sync(`${directory}/**/*.{js,ts,jsx,tsx}`, {
        ignore: ["**/node_modules/**"],
    });
    const todoComments = [];
    files.forEach((file) => {
        const content = fs.readFileSync(file, "utf-8");
        const lines = content.split("\n");
        lines.forEach((line, index) => {
            const todoIndex = line.indexOf("// TODO:");
            if (todoIndex !== -1) {
                todoComments.push({
                    file: path.relative(directory, file),
                    line: index + 1,
                    content: line.trim(),
                });
            }
        });
    });
    return todoComments;
};
const directory = path.resolve(argv.directory);
const todos = scanDirectory(directory);
if (todos.length > 0) {
    console.log(chalk.green(`Found ${todos.length} TODO comments:`));
    todos.forEach((todo) => {
        console.log(`${chalk.yellow(todo.file)}:${chalk.cyan(todo.line)} - ${todo.content}`);
    });
}
else {
    console.log(chalk.red("No TODO comments found."));
}
