import * as exp from "express"

const app = exp()
app.get('/login', (req, res) => {
   res.send("hello") 
})

import * as http from "http"
import * as io from "socket.io"

let server = http.createServer(app)
let io_ins = io(server)

// io_ins.on("connection", (client) => {
//     console.log("connected")
//     client.on('event', (data: string, callback: (string:string)=>{})=>{
//         console.log(data)
//         callback("client-respsonse: " + data)
//     })

//     client.on("disconnect", () => {
//         console.log("disconnect")
//     })

// })


var jwtAuth = require('socketio-jwt');
var SECRETS: { [id: string]: string } = {
    "el": "elx"
}

var SECRETS_SET = [ "abc", "cde" ]

io_ins.on("connection", jwtAuth.authorize({
    /*secret: function(req:any, token: string, callback: (error: string, success:string)=>{}){
        console.log(token)
        callback(null, "success") 
    }*/
    secret: "cde",
    timeout: 15000
}))

/*
io_ins.use(jwtAuth.authorize({
    sectet: function(req: any, token: string, callback: (error: string, success: string)=>{}) {
        console.log("auth")
        if (token === "cde") {
            callback(null, "success")
        } else {
            callback("fail", null)
        }
    }
}))
*/
server.listen(8088)
