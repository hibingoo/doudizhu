let PlayData = function () {
    let that = {};
    that.uniqueID = '10000';
    that.hhname = "10000";
    for(let i = 0 ; i<7 ; i++){
        that.uniqueID += Math.floor(Math.random() * 10);
    };
    return that;

}
console.log(PlayData().uniqueID);
console.log(Math.random()*10);
