const BaseService = require('./BaseService')

export default class PlayUrl extends BaseService {
  async getSongUrl (mid, br, headers) {
    return this.commonRequest(`http://127.0.0.1:5000/kuwo/song/url?mid=${mid}&br=${br}`, headers)
  }
}
