import { I18n } from "i18n";

declare module "discord.js" {
  interface Client {
    commands: Collection<string, any>;
    connectionTimeout: ReturnType<typeof setTimeout>;
  }

  interface CommandInteraction extends I18n {
    version: any;
  }
};