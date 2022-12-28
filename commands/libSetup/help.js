const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require("discord.js");
var botSettings = require("../../settings.json");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Shows all shell-supported commands."),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction) {
        const helpEmbed = new EmbedBuilder()
            .setColor(botSettings.botAvatarImg.imageColor)
            .setTitle("Help command")
            .addFields(
                { name: "**From library:** libSetup", value: '`pong` - Will respond with ping\n`reload` - Reloads the Commander or Event Handlering System.\n`about` - About The ChaOS\n`help` - Shows all shell-supported commands.' }
            );


        interaction.reply({ embeds: [helpEmbed] })
    },
};
