const EventEmitter = require("events");
exports.timer = new EventEmitter(); 

process.on("exit", function(e){
    console.log("Bye!"); 
});

let counter = 0;
console.clear();
exports.timer.emit('tick'); // 이벤트 발생 

setInterval(()=> {
    if(counter > 10) process.exit(0); 
    console.clear();
    exports.timer.emit('tick');
    counter++; 
}, 1000)