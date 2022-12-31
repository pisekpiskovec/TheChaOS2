const { SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits } = require("discord.js");
const botSettings = require("../../settings.json");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("role_auto")
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
        .setDescription("Role manager")
        .addSubcommandGroup((opt) => opt
            .setName("auto")
            .setDescription("T01")
            .addSubcommand((opt) => opt
                .setName("toggle")
                .setDescription("T01")
                .addBooleanOption((opt) => opt
                    .setName("bool")
                    .setDescription("T01")
                    .setRequired(true)
                )
            )
            .addSubcommand((opt) => opt
                .setName("role")
                .setDescription("T01")
                .addRoleOption((opt) => opt
                    .setName("role")
                    .setDescription("T01")
                    .setRequired(true)
                )
            )
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction) {
        interaction.reply({ content: "T01" });
    }
}