const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    Client,
    GatewayIntentBits
} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;

const clienter = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
});

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pong")
        .setDescription("Will respond with ping."),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction) {
        interaction.reply({ content: `Ping: ${clienter.ws.ping} ms` });
    },
};
