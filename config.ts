import { 
  ColorResolvable, 
  Snowflake, 
} from 'discord.js';

interface IConfig {
  readonly developerFolder: "Developer" | "Economy" | "Fun" | "Information" | "Economy" | "Moderation" | "System";
  readonly primaryColor: ColorResolvable;
  readonly owner: {
    id: Snowflake,
    guild: Snowflake,
  };
}

const config: IConfig = {
  developerFolder: "Developer",
  primaryColor: "#2f3136",
  owner: {
    id: "482224256730791967",
    guild: "484178304266403841",
  },
}

export default config;