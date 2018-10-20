module.exports = function(result){
    let methods = require("./methods.js")(result)
    return [
        {
            command: "ads",
            option:[
                {
                    tags: "-id, --id <id>",
                    description: "Find ad by ID",
                    command: (id) => methods.getAds
                },
                {
                    tags: "-a, --all",
                    description: "Get all Ads",
                    command: () => methods.getAds
                }
            ]
        }
    ]
}