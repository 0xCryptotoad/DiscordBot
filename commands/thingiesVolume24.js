const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thingies-volume-24hrs')
		.setDescription('Replies with Thingies Volume Last 24Hrs Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/445434/846525/4638367e-6ed8-4609-a4ef-9e0e6076d39a');
	},
};