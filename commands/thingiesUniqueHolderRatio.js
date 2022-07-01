const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thingies-unique-holder-ratio')
		.setDescription('Replies with unique Thingies holder ratio query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/418508/798348/b2d1e332-b376-4773-bcf3-f2cbb22b3a38');
	},
};