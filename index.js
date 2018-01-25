var app = require('express')();

var http = require('http').Server(app);

const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
    console.log('running');
});

io.on('connection', socket => {
    console.log('user connected', socket);

    socket.on('disconnect', () => {
        console.log('client disconnected', socket.client);
    });

    socket.on('chat message', msg => {
        console.log('message received', msg);
    })
});