$(document).ready(function () {
    $('.sidenav').sidenav();
    console.log("ready!");
    var websocketServerLocation = 'ws://127.0.01:8080';
    var socket;
    function start(websocketServerLocation){
        socket = new WebSocket(websocketServerLocation);
        socket.onmessage = function(event){
            console.log(JSON.parse(event.data));
        };
        socket.onclose = function(){
            $('nav').removeClass();
            setTimeout(function(){start(websocketServerLocation)},5000)
        };
        socket.onopen = function (event) {
            $('nav').addClass("green");
        };
    }
    start(websocketServerLocation);
});