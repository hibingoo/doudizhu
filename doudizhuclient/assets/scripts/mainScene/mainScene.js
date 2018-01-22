
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:
    onLoad: function () {
        let socket = io('http://localhost:3000');
        socket.on('welcome',function (data) {
            console.log('data = ' + data);

        })
        socket.on('name',function (data) {
            console.log('name = ' + data);

        })


    }

});
