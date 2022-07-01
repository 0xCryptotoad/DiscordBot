const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('partybear-unique-holders')
		.setDescription('Replies with number of unique PartyBear holders query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/418480/798148/7efa622b-330d-499b-8e43-a3f1426b7926');
	},
};