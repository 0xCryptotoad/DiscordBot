const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('walkers-total-sales')
		.setDescription('Replies with Cryptowalkers Total Sales Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/978721/1695370/b4621644-6600-4d4f-99eb-70dc00b81b21');
	},
};