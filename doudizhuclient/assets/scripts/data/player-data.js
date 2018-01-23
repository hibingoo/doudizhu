let PlayData = function () {
    let that = {};
    that.uid = undefined;
    that.uniqueID = '10000';
    that.nicdName = "小明";
    that.avataUrl = 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=e6b8c4d7c1fdfc03f175ebeab556ecf1/3c6d55fbb2fb43164366485322a4462309f7d399.jpg';
    that.houseCardCount = 0;
    for (let i = 0 ; i<7 ; i++){
        that.uniqueID += Math.floor(Math.random()*10);
    };
    that.wxLoinSuccess = function (data) {
        that.uniqueID = data.uniqueID;
        that.nicdName = data.nicdName;
        that.avataUrl = data.avataUrl;
    };
    that.loginSuccess = function () {
        console.log('data = ' + JSON.stringify(data));

    };
    return that;
};
//console.log(PlayData());
export default PlayData;
