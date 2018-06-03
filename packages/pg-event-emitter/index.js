export class Publisher {
  constructor() {
    this.listeners = new Map();
  }

  addListener(event, callback) {
    this.listeners.has(event) || this.listeners.set(event, []);
    const oldListeners = this.listeners.get(event);
    this.listeners.set(event, oldListeners.concat([callback]));

    return function unsubscribe() {
      this.listeners.set(event, oldListeners);
    };
  }

  emit(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(listener => listener(data));
      return true;
    }
    console.warn(`No listeners registered for event: ${event}.`);
    return false;
  }
}
