import Command from '../../structures/Command';
import { CommandInteraction } from 'discord.js';

export default new Command({
  name: "Batata",
  description: "Mande batatas.",
  execute(interaction: CommandInteraction): void {
    console.log(this);
    interaction.reply("Magonha?");
  },
});