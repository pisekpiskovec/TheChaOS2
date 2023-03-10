const { SlashCommandBuilder, ChatInputCommandInteraction } = require("discord.js");
const botSettings = require("../../settings.json");
const editJsonFile = require("edit-json-file");
let file = editJsonFile("settings.json");

module.exports = {
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
        
        file.append("libRole.roleToggleRoles.roleNames", stringOption);
        file.append("libRole.roleToggleRoles.roleIDs", roleOption.id);
        file.save();
    }
}