const { SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits } = require("discord.js");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("mute")
        .setDefaultMemberPermissions(PermissionFlagsBits.MuteMembers)
        .setDescription("Mute members.")
        .addMentionableOption((opt) => opt
            .setName("member")
            .setDescription("Who do you want to mute today?")
            .setRequired(true)
        )
        .addStringOption((opt) => opt
            .setName("reason")
            .setDescription("Why do you want to mute them?")
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction) {
        const memberOption = interaction.options.getMember("member");
        const stringOption = interaction.options.getString("reason") || "No reason provided.";

        await interaction.deferReply();

        const memberMute = interaction.guild.members.fetch(memberOption.id);
        if (!memberMute) {
            await interaction.editReply(`[libRoot] User cannot be muted since they doesn't exist in this server.`);
            return;
        } else if (memberMute.id === interaction.guild.ownerId) {
            await interaction.editReply(`[libRoot] User cannot be muted since they are the owner of this server.`);
            return;
        }
        const targetUserRolePosition = (await memberMute).roles.highest.position;
        const requestUserRolePosition = interaction.member.roles.highest.position;
        const botRolePosition = interaction.guild.members.me.roles.highest.position;

        if (targetUserRolePosition >= requestUserRolePosition) {
            await interaction.editReply(`[libRoot] You can't mute the user becuse they are on different level.`);
            return;
        }
        else if (targetUserRolePosition >= botRolePosition) {
            await interaction.editReply(`[libRoot] Muting this person would cause so much chaos.`);
            return;
        }
        try {
            await (await memberMute).timeout({ stringOption });
            await interaction.editReply(`[libRoot] Member succesfuly muted with reason: ${stringOption}  .`);
        } catch (error) {
            await interaction.editReply(`[libRoot] An error occured during muting: ${error}`);
        }
    }
}