import fs from 'fs';
import RestEvent from './structures/RestEvent';
import {
  Client,
  Collection,
  GatewayIntentBits,
  Partials
} from 'discord.js';

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.GuildMembers, 
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [
    Partials.Channel,
  ],
});

client.commands = new Collection();

fs.readdir("./events", (err, files) => {
  files.forEach(async events => {
    const event = (await import(`./events/${events.replace(".ts", ".js")}`))?.default;

    if (event instanceof RestEvent)
      client.rest.on(event.name, event.execute); 
    else
      client.on(event.name, event.execute); 
    
    console.log(`\x1b[35mLoaded ${event.name} ${event instanceof RestEvent ? "rest" : "client"} event.\x1b[0m`);
  });
});

client.login();
export default client;