const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('partybear-sales-24hrs')
		.setDescription('Replies with PartyBear Sales Last 24 Hrs Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/445484/846591/a2872c71-c88b-4acc-bc3e-7bb65baab272');
	},
};