const {
  Client,
  ActivityType,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
require("dotenv").config();
var botSettings = require("./settings.json")

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./handlers/eventHandler");

client.events = new Collection();
client.commands = new Collection();
loadEvents(client);

client.on("messageCreate", (message) => {
  if (message.content == "|m") {
    message.channel.send("🗿");
  }
  if (message.content == "stfu bitch") {
    message.channel.send("no");
  }
});

client.on("guildMemberAdd", async (member) => {
  const roleToAdd = await member.guild.roles.cache.get(botSettings.libRole.roleAutoRoleID);
  if (botSettings.libRole.roleAutoToggle === true) {
    if (botSettings.libRole.roleAutoRoleID = "") return console.log("EHS: [libRole] Role ID for AutoRole is missing.");
    else await member.roles.add(roleToAdd)
      .catch(() => { console.log("EHS: [libRole] Failed to assign role due to role hierarchy.") });
  }
});

client
  .login(process.env.TOKEN)
  .then(() => {
    client.user.setAvatar(botSettings.botAvatarImg.filePath);
    client.user.setUsername("The ChaOS");
    client.user.setActivity(botSettings.devUserInfo.devUserNickname, { type: ActivityType.Listening });
  });
