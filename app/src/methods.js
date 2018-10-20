const call = require("./apicall.js");

module.exports = function(res){
    return {
        getAds: (id=null) => {
            console.info("Getting Ads");
            call(id ? "ads/findById" : "ads/findAll", {id: id}).then( response => {
                res = response
            })   
        },
        getByBidPrice: (bidPrice) => {
            call("ads/getByBidPrice", {byBidPriceKurus: bidPrice}).then( response => {
                res = response
            })   
        }
    }
}