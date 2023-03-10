const { SlashCommandBuilder, ChatInputCommandInteraction } = require("discord.js");
const botSettings = require("../../settings.json");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("togglerole-add")
        .setDescription("Add roles to Toggable Role manager")
        .addRoleOption((opt) => opt
            .setName("role_to_add")
            .setDescription("What role do you want to add?")
            .setRequired(true))
        .addStringOption((opt) => opt
            .setName("name")
            .setDescription("Display name of the role")
            .setRequired(true)),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, member, client) {
        const stringOption = interaction.options.getString("name");
        const roleOption = interaction.options.getRole("role_to_add");
    }
}