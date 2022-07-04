// app/middleware/gzip.js
import { Context, EggAppConfig } from 'egg'

const isJSON = require('koa-is-json')
const zlib = require('zlib')
/**
 * @param options
 * @param app
 */
export default function gzipMiddleWare (
  options: EggAppConfig['gzip'],
): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    await next()
    // 后续中间件执行完成后将响应体转换成 gzip
    let body = ctx.body
    if (!body) return

    // 支持 options.threshold
    if (options.threshold && ctx.length < options.threshold) return

    if (isJSON(body)) body = JSON.stringify(body)

    // 设置 gzip body，修正响应头
    const stream = zlib.createGzip()
    stream.end(body)
    ctx.body = stream
    ctx.set('Content-Encoding', 'gzip')
  }
}
