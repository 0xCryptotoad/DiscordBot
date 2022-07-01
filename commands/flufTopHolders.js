const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fluf-top-holders')
		.setDescription('Replies with Fluf top holders query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/425128/810487/d4789058-ccbe-452f-87a4-cf97f9d337e4');
	},
};