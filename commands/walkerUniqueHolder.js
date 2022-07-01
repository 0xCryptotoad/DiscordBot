const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('walkers-unique-holders')
		.setDescription('Replies with number of unique Cryptowalkers holders query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/978597/1695186/81e743fd-0e06-4240-8dc1-713553f63b84');
	},
};