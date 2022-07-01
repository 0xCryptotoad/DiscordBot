const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thingies-top-holders')
		.setDescription('Replies with Thingies top holders query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/425174/810569/1f338737-4778-4a4c-9029-9ee94a7300c2');
	},
};