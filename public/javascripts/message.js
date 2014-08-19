var upButton = document.getElementById("w");
var downButton = document.getElementById("s");
var rightButton = document.getElementById("d");
var leftButton = document.getElementById("a");

var socket = io.connect();
socket.on('news', function (data) {
    console.log(data);
    });
socket.on('control', function (data) {
    console.log(data);
});

upButton.onclick = function() {
    socket.emit('send', { move: 'up'});
};
downButton.onclick = function() {
    socket.emit('send', { move: 'down'});
};
rightButton.onclick = function() {
    socket.emit('send', { move: 'right'});
};
leftButton.onclick = function() {
    socket.emit('send', { move: 'left'});
};

function sendOperation(op, arg){
    socket.emit('send', {op: op,
                        arg: arg
    })
}

window.addEventListener('keydown',this.check,false);

function check(e) {
    var code = e.keyCode;
    switch (code) {
        case 87: console.log("Up");
        upButton.click();
        break; //W
        case 83: console.log("Down");
        downButton.click();
        break; //S
        case 68: console.log("Right");
        rightButton.click();
        break; //D
        case 65: console.log("Left");
        leftButton.click();
        break; //A
        default: console.log(code); //Everything else
    }
}

var webrtc = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: 'remotesVideos',
    // immediately ask for camera access
    autoRequestMedia: true
});

webrtc.on('readyToCall', function () {
    // you can name it anything
    webrtc.joinRoom('psuSEMtest');
});