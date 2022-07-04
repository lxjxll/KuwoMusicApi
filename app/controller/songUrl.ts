const BaseController = require('./BaseController')

export default class SongUrl extends BaseController {
  async index () {
    const {
      ctx,
      service,
    } = this
    const { mid } = ctx.query
    let { br } = ctx.query
    if (!br) {
      br = 'flac'
    }
    if (!mid) {
      ctx.body = {
        code: 500,
        message: '参数错误',
        result: null,
        success: false,
      }
      return false
    }
    console.log('分界线.....')
    console.log(ctx.req.headers)
    ctx.body = await service.songUrl.getSongUrl(mid, br, {
      headers: ctx.req.headers,
    })
    console.log('分界线.....')
  }
}
