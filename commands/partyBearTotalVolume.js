const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('partybear-total-volume')
		.setDescription('Replies with PartyBear Total Volume Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/445484/846592/8ee65823-ab4e-4fe9-a67a-85774181e2c6');
	},
};