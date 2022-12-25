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

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./handlers/eventHandler");

client.events = new Collection();
loadEvents(client);


client.on("messageCreate", (message) => {
  if (message.content == "|m") {
    message.channel.send("🗿");
  }
  if (message.content == "stfu bitch") {
    message.channel.send("no");
  }
});

client
  .login(process.env.TOKEN)
  .then(() => {
    client.user.setAvatar("./resources/alpha1.jpg");
    client.user.setUsername("The ChaOS 2nd Generation");
    client.user.setActivity("Pisek", { type: ActivityType.Listening });
    //client.user.setActivity("Pisek", {type: ActivityType.Competing});
    //client.user.setActivity("Nora", {type: ActivityType.Watching});
  })
  .catch((err) => {
    console.log("Cyclops: Captain, some systems need attention!");
    console.log(`Cyclops > ${err}`);
  });
