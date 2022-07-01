const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fluf-volume-24hrs')
		.setDescription('Replies with Fluf Volume Last 24Hrs Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/445309/846476/36ba7afd-6a33-4610-bc6d-184be6f75f79');
	},
};