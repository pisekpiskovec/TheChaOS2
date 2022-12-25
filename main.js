const { Client, ActivityType } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: ["Guilds"],
});

var rarities = [
  {
    msg: "Welcome aboard Captain, all systems online.",
    chance: 0,
  },
  {
    msg: "Welcome aboard Captain, some systems need attention.",
    chance: 20,
  },
  {
    msg: "Engine powering up...",
    chance: 35,
  },
  {
    msg: "You are the best captain on the planet, I'm not even squiddin'.",
    chance: 10,
  },
  {
    msg: "I love it when you come inside me.",
    chance: 5,
  },
];

function startMessage() {
  var filler =
    100 - rarities.map((r) => r.chance).reduce((sum, current) => sum + current);
  if (filler <= 0) {
    console.log("chances sum is higher than 100!");
    return;
  }
  var probability = rarities
    .map((r, i) => Array(r.chance === 0 ? filler : r.chance).fill(i))
    .reduce((c, v) => c.concat(v), []);
  var pIndex = Math.floor(Math.random() * 100);
  var rarity = rarities[probability[pIndex]];

  return rarity.msg;
}
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
    console.log(`Cyclops: ${startMessage()}`);
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
