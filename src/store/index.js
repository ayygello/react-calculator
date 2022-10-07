import * as modules from './exports';

class Store {
  constructor() {
    // Состояние приложения (данные)
    this.state = {};

    // Слушатели изменений state
    this.listeners = [];

    // Модули
    this.modules = {};
    for (const name of Object.keys(modules)) {
      // Экземпляр модуля. Передаем ему ссылку на store и название модуля
      this.modules[name] = new modules[name](this, name);

      // По названию модуля устанавливается свойство с начальным состоянием от модуля
      this.state[name] = this.modules[name].initState();
    }
  }

  /**
   * Доступ к модулю состояния
   * @param name {String} Название модуля
   */
  get(name) {
    return this.modules[name];
  }

  /**
   * Выбор state
   * @return {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка state
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;

    // Оповещаем всех подписчиков об измении state
    for (const listener of this.listeners) {
      listener();
    }
  }

  /**
   * Подписка на изменение state
   * @param callback {Function}
   * @return {Function} Функция для отписки
   */
  subscribe(callback) {
    this.listeners.push(callback);

    // Возвращаем функцию для удаления слушателя
    return () => {
      this.listeners = this.listeners.filter((item) => item !== callback);
    };
  }
}

export default Store;
