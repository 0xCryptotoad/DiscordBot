const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fluf-unique-holder-ratio')
		.setDescription('Replies with unique Fluf holder ratio query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/418480/798160/d86fce1c-bdc5-459c-9ed3-85bbf470bcb2');
	},
};