const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('walkers-volume-24hrs')
		.setDescription('Replies with Cryptowalkers Volume Last 24Hrs Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/978721/1695384/ac029d1b-0f10-4722-80c2-2bcd24977c8a');
	},
};