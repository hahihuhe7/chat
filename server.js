let http = require('http'); //웹서버용 
let fs = require('fs'); // 파일처리
let socket = require('socket.io'); // 데이터 통신

// 웹서버 
let server = http.createServer(function (request, response){
    fs.readFile("chat.html", function(error, data){
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.end(data);
    });
}).listen(8888, function(){
    console.log("server is running")

});

// 채팅서버
let io = socket.listen(server);
io.sockets.on('connection', function(socket){
    socket.on('msg', function(data){
        io.sockets.emit('clientMsg', data);        
    })
}); 

