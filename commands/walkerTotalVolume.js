const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('walkers-total-volume')
		.setDescription('Replies with Cryptowalkers Total Volume Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/978721/1695380/69987a1d-3cdd-4212-a213-0e8364e1c5e4');
	},
};