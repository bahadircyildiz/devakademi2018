const {get} = require("axios")
module.exports = function(endpoint, data) {
    const home = "https://devakademi.sahibinden.com/api/";
    return get(home+endpoint+"?"+Object.entries(data)
        .filter(([key, val]) => {
            if(val != null) return [key, val]
        })
        .map(([key, val]) => `${key}=${val}`).join('&'))
}