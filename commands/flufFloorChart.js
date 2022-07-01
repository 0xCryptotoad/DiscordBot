const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fluf-floor-chart')
		.setDescription('Replies with Fluf Daily Floor Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/422217/804688/90b331d1-a1a5-4a28-bc58-b8b36557cf20');
	},
};