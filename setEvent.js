let modern = require('./makeEvent');

modern.timer.on('tick', function(e){
    console.log(new Date());
});