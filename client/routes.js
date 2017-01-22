const { log } = require('./utils');
const components = require('./components');

class Router {
  init() {
    app.onPageInit('*', (page) => {
      if (page && page.name) {
        log(`${page.name} is loading.`);
        this.load(page.name, page.query);
      }
    });
  }

  static load(name, query) {
    const component = components.get(name);
    component.init(query);
    log(`${name} is initialized.`);
  }
}

const router = new Router();

module.exports = router;
