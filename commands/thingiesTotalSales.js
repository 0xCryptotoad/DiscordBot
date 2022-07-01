const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thingies-total-sales')
		.setDescription('Replies with Thingies Total Sales Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/445434/846508/78e2d5ac-357f-421b-be13-63658615c712');
	},
};