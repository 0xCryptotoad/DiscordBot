const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fluf-total-volume')
		.setDescription('Replies with Fluf Total Volume Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/445309/846473/f4f1e3ca-fac3-4630-8d51-5521d9606e65');
	},
};