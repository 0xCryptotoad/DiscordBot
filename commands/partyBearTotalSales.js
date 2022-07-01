const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('partybear-total-sales')
		.setDescription('Replies with PartyBear Total Sales Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/445484/846588/20f56ccb-318d-43a7-bda5-ebf2425efb57');
	},
};