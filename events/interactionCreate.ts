import client from '..';
import Event from '../structures/Event';

export default new Event("interactionCreate", async (interaction) => {
  if (interaction.user.bot) return;
  if (!interaction.isChatInputCommand() && !interaction.isContextMenuCommand()) return;
  
  const { commandName } = interaction;
  let command = client.commands.get(commandName);
  if (!command) return;

  if (command.refers) command = (await import(`../commands${command.refers}.js`))?.default;
  
  command.execute(interaction);
});