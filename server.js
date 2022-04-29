import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

// import router

import router from "./routes/routes.js";

const app = express();
const htttpServer = http.createServer(app);

const io = new Server(htttpServer, {cors: {origin: "*"}}); 

app.use(cors());
app.use(router);

app.use("/static", express.static("./index.html"));

io.on('connection', (socket) => {
 
  console.log('connect socket client', socket.id)
  
socket.emit('news', { hello: 'world' }); 

});


htttpServer.listen(8080, () => {
  console.log("listen 8080");
});
