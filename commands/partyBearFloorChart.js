const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('partybear-floor-chart')
		.setDescription('Replies with PartyBear Daily Floor Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/422396/805036/270d5d2a-5cee-4f01-b982-70233c19c616');
	},
};