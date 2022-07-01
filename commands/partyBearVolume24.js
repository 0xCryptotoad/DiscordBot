const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('partybear-volume-24hrs')
		.setDescription('Replies with PartyBear Volume Last 24Hrs Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/445484/846593/f9606a9c-8d0a-49fa-bf75-7bd9b490ff1f');
	},
};