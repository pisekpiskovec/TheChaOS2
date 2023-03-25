const { SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits, ChannelType } = require("discord.js");
const botSettings = require("../../settings.json");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("announce")
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
        .setDescription("Annou")
        .addStringOption((opt) => opt
            .setName("announcement")
            .setDescription("Share your big news!")
            .setRequired(true)
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction) {
        const stringOption = interaction.options.getString("announcement");

    }
}