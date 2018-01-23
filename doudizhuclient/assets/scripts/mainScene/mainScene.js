import golbal from './global'
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:
    /*onLoad: function () {
        let socket = io('http://localhost:3000');
        socket.on('welcome',function (data) {
            console.log('data = ' + data);

        })
        socket.on('name',function (data) {
            console.log('name = ' + data);

        })

    }*/
    onLoad(){
        //这里的socket局部使用
        //let socket = io('http://localhost:3000');
        //socket.on('welcome',function (data) {
        //    console.log('data = ' + data);

       // })
       //这里socket全局调用
        golbal.socket.init();
    },
    //按钮回调新写法，按钮上家点击事件
    buttonClick(event,customData){
        console.log('custom data = ' + customData);
        switch (customData){
            case 'wxlogin':
                golbal.socket.login(
                    golbal.ctrplaydata.PlayData.uniqueID,
                    golbal.ctrplaydata.PlayData.nicdName,
                    golbal.ctrplaydata.PlayData.avataUrl, function (err,data) {
                        if (err){
                            console.log('login err' + err);

                        }else {
                            console.log('login data = ' + JSON.stringify(data));
                        }
                        });

                break;
            default:
                break

        }
    }

});
