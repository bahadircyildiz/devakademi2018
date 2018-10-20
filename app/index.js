let program = require("commander")
const {version, description} = require('../package.json')
let result = [];
let commandList = require("./src/commandList.js")(result)

program
    .version(version)
    .description(description)

commandList.forEach(cL => {
    program.command(cL.command)
    cL.options.forEach( o => 
        program.option(o.tags, o.description, o.action)
        )
});

program.parse(process.argv);

console.info(result);