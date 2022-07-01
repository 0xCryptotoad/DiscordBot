const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fluf-floor')
		.setDescription('Replies with Fluf Daily Floor Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/422217/804679/96460555-0784-4f32-9500-c43c62a3c6a4');
	},
};