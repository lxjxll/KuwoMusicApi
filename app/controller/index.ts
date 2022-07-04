const BaseController = require('./BaseController')

export default class Index extends BaseController {
  async index () {
    const { ctx } = this
    const data = { name: 'egg' }
    // render a template, path relate to `app/view`
    const headers = {
      'Content-Type': 'text/html; charset=utf-8',
    }
    ctx.set(headers)
    ctx.type = 'text/html; charset=utf-8'
    await ctx.render('index', data)
  }
}
