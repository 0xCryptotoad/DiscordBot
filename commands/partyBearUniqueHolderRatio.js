const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('partybear-unique-holder-ratio')
		.setDescription('Replies with unique PartyBear holder ratio query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/418480/798160/d86fce1c-bdc5-459c-9ed3-85bbf470bcb2');
	},
};