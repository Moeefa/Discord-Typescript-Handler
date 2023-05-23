import { RestEvents } from '@discordjs/rest';

export default class RestEvent<Key extends keyof RestEvents> {
  constructor(
    public name: Key,
    public execute: (...args: RestEvents[Key]) => any,
    public once?: Boolean,
  ) {};
};