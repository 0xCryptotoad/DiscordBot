const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('partybear-top-holders')
		.setDescription('Replies with PartyBear top holders query!'),
	async execute(interaction) {
		await interaction.reply('https://dune.com/embeds/425211/810615/4309035a-1112-4066-8980-4358c28e7f69');
	},
};