const { SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits, ChannelType } = require("discord.js");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("rename_channel")
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels)
        .setDescription("Rename channel.")
        .addChannelOption((opt) => opt
            .setName("channel")
            .setDescription("What channel do you want to rename?")
            .setRequired(true)
        )
        .addStringOption((opt) => opt
            .setName("new_name")
            .setDescription("How the channel should be named?")
            .setRequired(true)
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction) {
        const channelOption = interaction.options.getChannel("channel");
        const stringOption = interaction.options.getString("new_name");

    }
}