const { SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits } = require("discord.js");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("mute")
        .setDefaultMemberPermissions(PermissionFlagsBits.MuteMembers)
        .setDescription("Mute members.")
        .addMentionableOption((opt) => opt
            .setName("member")
            .setDescription("Who do you want to mute today?")
            .setRequired(true)
        )
        .addStringOption((opt) => opt
            .setName("reason")
            .setDescription("Why do you want to mute them?")
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction) {
        const memberOption = interaction.options.getMember("member");
        const stringOption = interaction.options.getString("reason");

    }
}