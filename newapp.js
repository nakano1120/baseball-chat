var express = require('express');
var app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 7000;
var siai=0
var team1=["田 DEN","田中","吉田","太田","島田","多田","飯田","田崎","田浦","井田","井田"]
var team2=["マウンテンズ","山田","山本","大山","山川","山中","山城","山内","山形","富山","富山"]
var kai=1
var ou="表"
var out=0
var strike=0
var ball=0
var point1=0
var point2=0
app.get('/' , function(req, res){
    res.sendFile(__dirname+'/index.html');
});
io.on('connection',function(socket){
    socket.on('message',function(msg){
        console.log('message: ' + msg);
        io.emit('message', msg);
    });
    setInterval(function(){
        if(siai==0){
            console.log("b:試合開始 "+team1[0]+" - "+team2[0]);
            io.emit('messageb', ("試合開始 "+team1[0]+" - "+team2[0]));
            siai=1
            kai=1
            ou="表"
            out=0
            strike=0
            ball=0
            io.emit('teammei',(team1[0]+","+team2[0]))
        }
        
        console.log("b:なん");
        io.emit('messageb', ("なん"));
    },10000);
    socket.on('messageb',function(msg){
        if(siai==0){
            console.log("b:試合開始 "+team1[0]+" - "+team2[0]);
            io.emit('messageb', ("試合開始 "+team1[0]+" - "+team2[0]));
            siai=1
            kai=1
            ou="表"
            out=0
            strike=0
            ball=0
            io.emit('teammei',(team1[0]+","+team2[0]))
        }
        console.log("b:なん");
        io.emit('messageb', (msg));
    });
});

http.listen(PORT, function(){
    console.log('server listening. Port:' + PORT);
});