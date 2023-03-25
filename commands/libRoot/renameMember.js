const { SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits, ChannelType } = require("discord.js");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("rename_member")
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames)
        .setDescription("Rename member.")
        .addMentionableOption((opt) => opt
            .setName("member")
            .setDescription("Who do you want to rename?")
            .setRequired(true)
        )
        .addStringOption((opt) => opt
            .setName("new_name")
            .setDescription("How the member should be called?")
            .setRequired(true)
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction) {
        const memberOption = interaction.options.getMember("member");
        const stringOption = interaction.options.getString("new_name");

    }
}