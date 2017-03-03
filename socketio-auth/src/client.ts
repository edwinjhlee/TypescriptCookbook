import * as ioc from "socket.io-client"

let socket = ioc('http://localhost:8088');
socket.on('connect', function(){
    socket.emit("authenticate", "cde")
        .on("authenticated", function(){
            console.log("authenticated")
        })
        .on("unauthorized", function(msg: string){
            console.log("faile", msg)
        })
});

socket.on('event', function(data: string){ console.log(data); });
socket.emit('event', "new data", (data: string) => {
    console.log(data);
    socket.disconnect()
})
socket.on('disconnect', function(){});