const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('partybear-floor')
		.setDescription('Replies with PartyBear Daily Floor Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/422396/805035/4abbaee9-4f92-44c5-b8e2-c62cd4dee210');
	},
};