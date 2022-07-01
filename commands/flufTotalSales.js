const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fluf-total-sales')
		.setDescription('Replies with Fluf Total Sales Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/445309/846467/b2e57f72-e345-4991-9fd4-ab426f1c5c81');
	},
};