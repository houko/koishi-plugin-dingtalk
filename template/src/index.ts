import { Context, Schema } from 'koishi';

export const name = '@xiaomo/template';

export interface Config {
}

export const Config: Schema<Config> = Schema.object({});

export function apply(ctx: Context) {
  // write your plugin here
  ctx.command('template').action(() => {
    return 'this is a template for build koishi plugin';
  });
}
