module.exports = {
	name: 'greet',
    description: 'Ping!',
    args: true,
    usage: '<user>',
    guildOnly: true,
	execute(msg, args) {
        const taggedUser = msg.mentions.users.first();
		msg.channel.send(`Hey ${taggedUser.username}, ${msg.author.username} says hi!`);
	},
};