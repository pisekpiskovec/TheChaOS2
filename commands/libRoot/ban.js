const { SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits } = require("discord.js");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setDescription("Ban members.")
        .addMentionableOption((opt) => opt
            .setName("member")
            .setDescription("Who do you want to ban today?")
            .setRequired(true)
        )
        .addStringOption((opt) => opt
            .setName("reason")
            .setDescription("Why do you want to ban them?")
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