const { ChatInputCommandInteraction, SlashCommandBuilder, Client, PermissionFlagsBits, EmbedBuilder } = require("discord.js");
var botSettings = require("../../../settings.json");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("flip")
        .setDefaultMemberPermissions(PermissionFlagsBits.AttachFiles)
        .setDescription("Will mirror text.")
        .addStringOption(opt => opt
            .setName("text")
            .setDescription("Enter text you want to mirror.")
            .setRequired(true)
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        if (botSettings.plugs.plgImaginator) {
            await interaction.deferReply();

            const defaultText = interaction.options.getString("text");
            var mirrorText = defaultText.split("").reverse().join("");

            const flipEmbed = new EmbedBuilder()
                .setTitle("Flip Text")
                .setColor(botSettings.libSetup.accentColor)
                .addFields(
                    { name: "Inserted text:", value: defaultText },
                    { name: "Mirrored text:", value: mirrorText },
                )

            await interaction.editReply({ embeds: [flipEmbed] });

        } else interaction.reply("Plugs: Pllugin not enabled.");
    }
};
