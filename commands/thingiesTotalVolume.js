const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thingies-total-volume')
		.setDescription('Replies with Thingies Total Volume Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/445434/846511/383f5416-5491-4009-aec0-8fbc794c1345');
	},
};