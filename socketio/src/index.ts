import * as http from "http"
import * as io from "socket.io"

let server = http.createServer()
let io_ins = io(server)

io_ins.on("connection", (client) => {
    client.on('event', (data: string)=>{
        console.log(data)
    })

    client.on("disconnect", () => {
        console.log("disconnect")
    })

})

server.listen(8080)
