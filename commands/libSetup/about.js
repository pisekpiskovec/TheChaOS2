const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder
} = require("discord.js");
var botSettings = require("../../settings.json");
var nodeVersions = require("../../package.json");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("about")
        .setDescription("About TheChaOS"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction) {
        const aboutEmbed = new EmbedBuilder()
            .setTitle("About The ChaOS")
            .setDescription(`The ChaOS - developer codename **${botSettings.botVersions.botCodename}**
A Discord bot written in JavaScript with some useful features (originaly made for Simp Club)`)
            .setFooter({ text: "Made with LOVE by Pisek" })
            .setAuthor({ name: "Písek Pískovec", iconURL: "https://avatars.githubusercontent.com/u/77384152?v=4", url: "https://github.com/pisekpiskovec" })
            .setColor(botSettings.botAvatarImg.imageColor)
            .addFields(
                { name: "Library", value: `Discord.js ${nodeVersions.dependencies["discord.js"]}`, inline: true },
                { name: "The ChaOS Version", value: botSettings.botVersions.botChaOS + ` "${botSettings.botVersions.botCodename}"`, inline: true },
                { name: "Commander Version", value: botSettings.botVersions.botCommander, inline: true },
                { name: "Event Handlering System Version", value: botSettings.botVersions.botEventHandleringSystem, inline: true },
                { name: "The Cyclops Version", value: botSettings.botVersions.botCyclops, inline: true },
                //{ name: "\u200B", value: "\u200B" },

            )
        interaction.reply({ embeds: [aboutEmbed] });
    },
};
