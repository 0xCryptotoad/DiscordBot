const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('walkers-sales-24hrs')
		.setDescription('Replies with Cryptowalkers Sales Last 24 Hrs Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/978721/1695371/109611c7-3849-4e32-b5fd-2a66aa1e2b15');
	},
};