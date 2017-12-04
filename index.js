var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8080;
var matches = [];

function deleteMatch(matchToDelete){
	let index = matches.indexOf(matchToDelete);
	if(index > -1) matches.splice(index, 1);
}

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname+'/public/index.html');
})

server.listen(port, (err) => {
	if(err) console.error("No se ha podido inicializar el servidor. Error: "+err);
	else console.info("El servidor se ha inicializado en el puerto "+port+"!!");
});

io.on('connection', (socket) => {

	socket.on('matches', () => {
		socket.emit('matches', matches);
	});

	socket.on('new match', (match) => {
		matches.push(match);
		socket.join(match);
		socket.emit('matches', matches);
	});

	socket.on('join match', (match) => {
		socket.join(match);
		let conectados = JSON.stringify(io.sockets.adapter.rooms[match]).replace('{"sockets":{"', '').replace('":true,"', ' ').replace('":true},"length":2}', '');
		let conectado1 = conectados.replace(/.{20}\s/,'');
		let conectado2 = conectados.replace(/\s.{20}/, '');
		
		deleteMatch(match);
		socket.emit('matches', matches);

		if(conectado1 != socket.id){ 
			socket.broadcast.to(conectado1).emit('someone is on room', socket.id);
			socket.emit('someone is on room', conectado1, socket.id);
		}else if(conectado2 != socket.id){
			socket.broadcast.to(conectado2).emit('someone is on room', socket.id);
			socket.emit('someone is on room', conectado2, socket.id);
		}
	});

	socket.on('turn', (html, enemy, me) => {
		socket.broadcast.to(enemy).emit('turn', html, me);
		socket.emit('wait');
	});

	socket.on('someone has won', (winner, enemy, html) => {
		socket.emit('someone has won', winner, html);
		socket.broadcast.to(enemy).emit('someone has won', winner, html);
	});
});