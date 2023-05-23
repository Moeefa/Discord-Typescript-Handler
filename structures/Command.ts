import Discord, {
  ChatInputCommandInteraction,
  MessageContextMenuCommandInteraction,
  UserContextMenuCommandInteraction,
  CommandInteraction,
  ChatInputApplicationCommandData,
  PermissionResolvable,
  ApplicationCommandOptionData,
  LocalizationMap,
  ApplicationCommandType
} from 'discord.js';

export default class Command<T extends ApplicationCommandType> {
  type: ApplicationCommandType;
  name?: string;
  nameLocalizations?: LocalizationMap;
  description?: string;
  descriptionLocalizations?: LocalizationMap;
  category?: string;
  options?: ApplicationCommandOptionData[];
  defaultMemberPermissions?: PermissionResolvable | null;
  dmPermission?: boolean;
  refers?: string;
  execute?: (interaction: InteractionType<T>) => any;
  
  constructor(options: CommandData<T>) {
    Object.assign(this, options);
  };
};

interface CommandData<T extends ApplicationCommandType> {
  type: T;
  name?: string;
  nameLocalizations?: LocalizationMap;
  description?: string;
  descriptionLocalizations?: LocalizationMap;
  category?: string;
  options?: T extends ApplicationCommandType.ChatInput
		? ApplicationCommandOptionData[]
		: never;
  defaultMemberPermissions?: PermissionResolvable | null;
  dmPermission?: boolean;
  refers?: string;
  execute?: T extends ApplicationCommandType
		? (interaction: InteractionType<T>) => any
		: never;
}

type InteractionType<T extends ApplicationCommandType> =
	T extends ApplicationCommandType.ChatInput
		? ChatInputCommandInteraction
		: T extends ApplicationCommandType.Message
		? MessageContextMenuCommandInteraction
		: T extends ApplicationCommandType.User
		? UserContextMenuCommandInteraction
		: CommandInteraction;