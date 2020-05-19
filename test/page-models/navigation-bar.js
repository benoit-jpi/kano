import VueSelector from 'testcafe-vue-selectors'
import BasePage from './base-page'

export default class NavigationBar extends BasePage {
  constructor () {
    super()
    this.navigationBar = VueSelector('k-navigation-bar')
  }

  async isVisible () {
    const exists = await this.navigationBar.exists
    if (!exists) return false
    return this.navigationBar.visible
  }
}
