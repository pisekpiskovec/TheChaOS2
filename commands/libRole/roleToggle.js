const { SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits } = require("discord.js");
const botSettings = require("../../settings.json");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("togglerole")
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
        .setDescription("Toggable Role manager")
        .addRoleOption((opt) => opt
            .setName("role")
            .setDescription("T02")
            .setRequired(true)
        )
        .addBooleanOption((opt) => opt
            .setName("toggle")
            .setDescription("T02")
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction) {
        interaction.reply({ content: "T02" });
    }
}