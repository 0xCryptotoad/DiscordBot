const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thingies-floor')
		.setDescription('Replies with Thingies Daily Floor Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/422223/804896/e8b7d86b-9120-437d-ae65-88748bb3abaa');
	},
};