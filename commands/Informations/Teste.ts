import Command from "../../structures/Command.js";
import { ApplicationCommandType } from "discord.js";

export default new Command({
  type: ApplicationCommandType.ChatInput,
  async execute(interaction) {
    interaction.reply(`My ping is: ${client.ws.ping}ms!`);
  },
});