const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thingies-sales-24hrs')
		.setDescription('Replies with Thingies Sales Last 24 Hrs Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/445434/846510/093ca033-e004-441f-b3ef-604c05c5cdac');
	},
};