const { SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits } = require("discord.js");
const botSettings = require("../../settings.json");
const editJsonFile = require("edit-json-file");
let file = editJsonFile("settings.json");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("autoban")
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setDescription("Automatically ban members.")
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
            .setName("string")
            .setDescription("T01")
            .addStringOption((opt) => opt
                .setName("sensitive_string")
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
        const boolOption = interaction.options.getBoolean("bool");
        const roleOption = interaction.options.getRole("role");
        switch (subCommand) {
            case "toggle":
                //file.set("libRole.roleAutoToggle", boolOption);
                //interaction.reply(`[libRole] ${interaction.guild.members.cache.get(interaction.member.id).displayName} toggled ${boolOption} on Auto Role`).then(() => {
                //    console.log(`Cyclops: [libRole] ${interaction.guild.members.cache.get(interaction.member.id).displayName} toggled ${boolOption} on Auto Role`);
                //});
                break;
            case "role":
                //file.set("libRole.roleAutoRoleID", roleOption.id)
                //interaction.reply(`[libRole] ${interaction.guild.members.cache.get(interaction.member.id).displayName} set role ${roleOption.name} on Auto Role`).then(() => {
                //    console.log(`Cyclops: [libRole] ${interaction.guild.members.cache.get(interaction.member.id).displayName} set role ${roleOption.name} on Auto Role`);
                //});
                break;
        }
        file.save();
    }
}