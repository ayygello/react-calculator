class StateModule {
  constructor(store, name) {
    this.store = store;
    this.name = name;
  }

  /**
   * Начальное состояние
   * @return {Object}
   */
  initState() {
    return {};
  }

  getState() {
    return this.store.getState()[this.name];
  }

  setState(newState) {
    this.store.setState({
      ...this.store.getState(),
      [this.name]: newState,
    });
  }
}

export default StateModule;
