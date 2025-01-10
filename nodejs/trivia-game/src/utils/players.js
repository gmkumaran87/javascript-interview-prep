const players = [];

const addPlayer = ({ id, playerName, room }) => {
	try {
		if (!playerName || !room) {
			return { error: new Error('Please provide player and room') };
		}

		let player = playerName.trim().toLowerCase();
		room = room.trim().toLowerCase();

		const existingPlayer = players.find((el) => el.room === room && player === el.playerName);

		if (existingPlayer) {
			return {
				error: new Error('Player already exist...'),
			};
		}
		const newPlayer = { id, playerName, room };
		players.push(newPlayer);

		return { newPlayer };
	} catch (error) {}
};

const getPlayer = (id) => {
	try {
		console.log('GetTT', { id, players });
		const player = players.find((el) => el.id === id);

		if (!player) {
			return {
				error: new Error('Player not found!'),
			};
		}

		return { player };
	} catch (error) {}
};

// Get all players in a room
const getAllPlayers = (room) => players.filter((el) => el.room === room);

const removePlayer = (id) => {
	console.log('Remove player', id, players);
	return players.find((player, index) => {
		if (player.id === id) {
			return players.splice(index, 1)[0];
		}
		return false;
	});
};
console.log('Players', players);
module.exports = { addPlayer, getAllPlayers, getPlayer, removePlayer };
