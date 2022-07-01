const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fluf-sales-24hrs')
		.setDescription('Replies with Fluf Sales Last 24 Hrs Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/445309/846470/bd00cfc9-73ee-408e-8bec-a1010d858655');
	},
};