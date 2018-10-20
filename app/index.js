const program = require("commander")
const {version, description} = require('../package.json')
let result = [];
let commandList = require("./src/commandList.js")(result)

program
    .version(version)
    .description(description)

commandList.forEach(({command, option}) => {
    program.command(command)
    option.forEach(({tags, description, action}) => 
        program.option(tags, description, action)
        )
});

program.parse(process.argv);

console.info(result);