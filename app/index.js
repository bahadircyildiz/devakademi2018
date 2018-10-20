import program from "commander"
import {main} from "./src/main.js"
import CommandList from "./src/commandList.js"
let {version, description} = require('../package.json');

program
    .version(version)
    .description(description)

commandList.forEach(cL => {
    program
        .command(cL.command)
        .option(cL.option.tags, cL.option.description)
        .action(a);
});

program.parse(process.argv);