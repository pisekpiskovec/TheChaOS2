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
        const stringOption = interaction.options.getString("sensitive_string");
        switch (subCommand) {
            case "toggle":
                file.set("libRoot.autoBanToggle", boolOption);
                interaction.reply(`[libRoot] ${interaction.guild.members.cache.get(interaction.member.id).displayName} toggled ${boolOption ? "on" : "off"} Auto Ban`).then(() => {
                    console.log(`Cyclops: [libRoot] ${interaction.guild.members.cache.get(interaction.member.id).displayName} (${interaction.guild.members.cache.get(interaction.member.id).id}) toggled ${boolOption ? "on" : "off"} Auto Ban`);
                });
                break;
            case "string":
                file.append("libRoot.autoBanRules", stringOption)
                interaction.reply(`[libRoot] ${interaction.guild.members.cache.get(interaction.member.id).displayName} added rule ${stringOption} to Auto Ban list.`).then(() => {
                    console.log(`Cyclops: [libRoot] ${interaction.guild.members.cache.get(interaction.member.id).displayName} (${interaction.guild.members.cache.get(interaction.member.id).id}) added rule ${stringOption} to Auto Ban list.`);
                });
                break;
        }
        file.save();
    }
}