import defines from "../mainScene/defines"

const SocketController = function () {
    let that = {};
    let _socket = undefined;
    that.init = function () {
        _socket = io(defines.serverUrl);

    };
    that.login = function (uniqe, nickname, avatar, cb) {
        _socket.emit('login',{
            uniqueID: uniqe,
            nicdName: nickname,
            avataUrl: avatar,
        });

    };
    return that;

};
export default SocketController;