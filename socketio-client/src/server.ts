import * as http from "http"
import * as io from "socket.io"

let server = http.createServer()
let io_ins = io(server)

io_ins.on("connection", (client) => {
    client.on('event', (data: string, callback: (string:string)=>{})=>{
        console.log(data)
        callback("client-respsonse: " + data)
    })

    client.on("disconnect", () => {
        console.log("disconnect")
    })

})

server.listen(8088)