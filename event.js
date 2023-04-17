/*
    on() 이벤트 연결 - addEventListener, onClick 등과 같음
    emit() 이벤트실행 - api
*/

process.on("exit", function(e){
    console.log("Bye!"); 
});

process.emit('exit') //이벤트만 발생시킴 , 실제 종료는 안됨

setTimeout(() => {
    process.exit(0); // 0 - 정상종료, 나머지숫자는 에러      
},5000)