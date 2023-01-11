const { SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits } = require("discord.js");
const botSettings = require("../../settings.json");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("autorole")
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
        .setDescription("Automatic Role manager")
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
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction) {
        const subCommand = interaction.options.getSubcommand();
        switch (subCommand) {
            case "toggle":
                console.log(`Cyclops: [libRole] {} toggled on Auto Role`);
                break;
            case "role":
                console.log(`Cyclops: [libRole] {} set role on Auto Role`);
                break;
        }
    }
}