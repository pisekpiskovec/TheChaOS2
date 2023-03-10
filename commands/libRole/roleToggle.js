const { SlashCommandBuilder, ChatInputCommandInteraction } = require("discord.js");
const botSettings = require("../../settings.json");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("togglerole")
        .setDescription("Toggable Role manager")
        .addStringOption((opt) => opt
            .setName("role")
            .setDescription("T02")
            .setRequired(true)
        )
        .addBooleanOption((opt) => opt
            .setName("toggle")
            .setDescription("T02")
            .setRequired(false)
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, member, client) {
        if (botSettings.libRole.roleToggleRoles.roleIDs.length < botSettings.libRole.roleToggleRoles.roleNames.length) return interaction.reply({ content: "Number of IDs does not match number of Roles" });
        if (botSettings.libRole.roleToggleRoles.roleIDs.length > botSettings.libRole.roleToggleRoles.roleNames.length) return interaction.reply({ content: "Number of IDs does not match number of Roles" });

        const stringOptionA = interaction.options.getString("role");
        const booleanOption = interaction.options.getBoolean("toggle");


        var roleID = botSettings.libRole.roleToggleRoles.roleNames.findIndex(v => v.includes(stringOptionA.toString()))
        switch (booleanOption) {
            case true:
                interaction.guild.members.cache.get(interaction.member.id).roles.add(botSettings.libRole.roleToggleRoles.roleIDs[roleID]);
                interaction.reply(`libRole: Added role ${stringOptionA} to you`).then(() => {
                    console.log(`Commander: Added role ${stringOptionA} to ${interaction.guild.members.cache.get(interaction.member.id).displayName}`)
                });
                break;
            case false:
                interaction.guild.members.cache.get(interaction.member.id).roles.remove(botSettings.libRole.roleToggleRoles.roleIDs[roleID]);
                interaction.reply(`libRole: Removed role ${stringOptionA} from you`).then(() => {
                    console.log(`Commander: Removed role ${stringOptionA} from ${interaction.guild.members.cache.get(interaction.member.id).displayName}`)
                });
                break;
            case null:
                if (interaction.guild.members.cache.get(interaction.member.id).roles.cache.has(botSettings.libRole.roleToggleRoles.roleIDs[roleID])) {
                    interaction.guild.members.cache.get(interaction.member.id).roles.remove(botSettings.libRole.roleToggleRoles.roleIDs[roleID]);
                    interaction.reply(`libRole: Removed role ${stringOptionA} from you`).then(() => {
                        console.log(`Commander: Removed role ${stringOptionA} from ${interaction.guild.members.cache.get(interaction.member.id).displayName}`)
                    });
                }
                else {
                    interaction.guild.members.cache.get(interaction.member.id).roles.add(botSettings.libRole.roleToggleRoles.roleIDs[roleID]);
                    interaction.reply(`libRole: Added role ${stringOptionA} to you`).then(() => {
                        console.log(`Commander: Added role ${stringOptionA} to ${interaction.guild.members.cache.get(interaction.member.id).displayName}`)
                    });

                }
        }
    }
}