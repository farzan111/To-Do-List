module.exports.getDate = function () {

let today = new Date();
let option = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

return today.toLocaleDateString("en-us", option);

}

module.exports.getDay = function  () {

    let today = new Date();
    let option = {
        weekday: "long"
    };
    
    return today.toLocaleDateString("en-us", option);
     
    }