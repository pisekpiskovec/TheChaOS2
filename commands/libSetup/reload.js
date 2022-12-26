const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    PermissionFlagsBits,
    Client } = require("discord.js");
const { loadCommands } = require("../../handlers/commandHandler");
const { loadEvents } = require("../../handlers/eventHandler");
module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("reload")
        .setDescription("Reloads the Commander or Event Handlering System.")
        //.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addSubcommand((options) => options
            .setName("ehs")
            .setDescription("Reloads Event Handlering System."))
        .addSubcommand((options) => options
            .setName("commander")
            .setDescription("Reloads Commander.")),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */
    execute(interaction, client) {
        const subCommand = interaction.options.getSubcommand();
        switch (subCommand) {
            case "ehs":
                {
                    console.log(`EHS > Status: Reloading`);
                    for (const [key, value] of client.events)
                        client.removeListener(`${key}`, value, true);
                    loadEvents(client);
                    interaction.reply({
                        content: "Event Handlering System > Status: Reloaded",
                    });
                }
                break;
            case "commander":
                {
                    console.log(`Commander > Status: Reloading`);
                    loadCommands(client);
                    interaction.reply({
                        content: "Commander > Status: Reloaded",
                    });
                }
                break;
        }
    },
};
