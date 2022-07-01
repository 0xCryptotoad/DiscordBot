const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('walkers-floor')
		.setDescription('Replies with Cryptowalkers Daily Floor Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/978555/1695115/47046a54-5b8d-433d-805c-c9efeb17bedc');
	},
};