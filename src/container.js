class Container {
  constructor() {
    this.services = {};
  }

  register(name, instance) {
    this.services[name] = instance;
  }

  get(name) {
    if (!this.services[name]) {
      throw new Error(`Service ${name} not found`);
    }
    return this.services[name];
  }
}

module.exports = new Container();
