const express = require('express');
const path = require('path');
const http = require('http');
const socket = require('socket.io');
const formatTime = require('./utils/formatText');
const { addPlayer, getAllPlayers, getPlayer, removePlayer } = require('./utils/players');
const formatText = require('./utils/formatText');
const { setGame } = require('./utils/game');

const app = express();
const server = http.createServer(app);
const io = socket(server);

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

io.on('connection', (socket) => {
	// listen for new connections to Socket.IO
	console.log('A new player just connected');

	socket.on('join', ({ playerName, room }, callback) => {
		// console.log('New player joined......!!!!', playerName, room);
		const { error, newPlayer } = addPlayer({ id: socket.id, playerName, room });
		// console.log('Error,player', { error, newPlayer });
		if (error) return callback(error.message);
		callback(); // The callback can be called without data.

		socket.join(newPlayer.room);

		socket.emit('message', formatText('Admin', 'Welcome!'));

		socket.broadcast.to(newPlayer.room).emit('message', formatText('Admin', `${newPlayer.playerName} has`));

		io.in(newPlayer.room).emit('room', {
			room: newPlayer.room,
			players: getAllPlayers(newPlayer.room),
		});
	});

	// Player disconnection message
	socket.on('disconnect', () => {
		const disconnected = removePlayer(socket.id);
		console.log('Player is disconnected', disconnected);
		if (disconnected?.playerName) {
			io.in(disconnected?.room).emit('message', formatText('Admin', `${disconnected?.playerName} has left!`));
		}
		io.in(disconnected?.room).emit('room', {
			room: disconnected?.room,
			players: getAllPlayers(disconnected?.room),
		});
	});

	socket.on('sendMessage', (message, callback) => {
		const { error, player } = getPlayer(socket.id);

		if (error) return callback(error.message);

		if (player) {
			io.to(player.room).emit('message', formatText(player.playerName, message));
			callback();
			// socket.emit('message', formatText(player.playerName, message));
		}
	});

	socket.on('getQuestion', async (data, callback) => {
		const { error, player } = getPlayer(socket.id);
		if (error) return callback(error.message);

		if (player) {
			const res = await setGame();
		}
	});
});

const port = process.env.port || 8080;

server.listen(port, () => console.log('App listens at ', port));
