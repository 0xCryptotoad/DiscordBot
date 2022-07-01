const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('walkers-top-holders')
		.setDescription('Replies with Cryptowalkers top holders query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/978669/1695298/baf37cc7-20aa-4b93-8e20-cffda29e30f2');
	},
};