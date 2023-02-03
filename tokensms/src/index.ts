import { Context, Schema } from 'koishi';

export const name = '@xiaomo/tokensms';

export interface Config {
}

export const Config: Schema<Config> = Schema.object({});

export function apply(ctx: Context) {
  // write your plugin here
  ctx.command('dingtalk').action(() => {
    return 'Hello, I\'m token sms! for Koishi!';
  });
}
