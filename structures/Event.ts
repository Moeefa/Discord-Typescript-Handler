import { ClientEvents } from 'discord.js';

export default class Event<Key extends keyof ClientEvents> {
  constructor(
    public name: Key,
    public execute: (...args: ClientEvents[Key]) => any,
    public once?: Boolean,
  ) {};
};