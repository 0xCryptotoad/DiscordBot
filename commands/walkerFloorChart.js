const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('walkers-floor-chart')
		.setDescription('Replies with Cryptowalkers Daily Floor Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/978555/1695121/5d4ac536-9c1c-402b-9105-accd4b2dfac9');
	},
};