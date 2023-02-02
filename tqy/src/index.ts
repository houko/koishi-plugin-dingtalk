import { Context, Schema } from 'koishi'

export const name = '@xiaomo/dingtalk-adapter'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  // write your plugin here
  ctx.command('tqy').action(() => {
    return "Hello tqy"
  })
}
