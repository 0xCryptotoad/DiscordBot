const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('walkers-unique-holder-ratio')
		.setDescription('Replies with unique Cryptowalkers holder ratio query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/978597/1695188/78ab295b-8674-4580-81de-8f3d3fbd7f0b');
	},
};