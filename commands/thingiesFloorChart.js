const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thingies-floor-chart')
		.setDescription('Replies with Thingies Daily Floor Dune Query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/422223/804899/16f8a284-51ed-47e3-882f-44df58786d5f');
	},
};