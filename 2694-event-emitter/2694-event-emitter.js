class EventEmitter {
	constructor() {
		this.events = {};
	}

	/**
	 * @param {string} eventName
	 * @param {Function} callback
	 * @return {Object}
	 */
	subscribe(eventName, callback) {
		if (!this.events[eventName]) {
			this.events[eventName] = [];
		}

		const subscription = { callback, eventName };
		this.events[eventName].push(subscription);

		return {
			unsubscribe: () => {
				const index = this.events[eventName].indexOf(subscription);
				if (index !== -1) {
					this.events[eventName].splice(index, 1);
				}
			}
		};
	}

	/**
	 * @param {string} eventName
	 * @param {Array} args
	 * @return {Array}
	 */
	emit(eventName, args = []) {
		if (!this.events[eventName]) {
			return [];
		}

		const results = this.events[eventName].map(subscription => subscription.callback(...args));
		return results;
	}
}


/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */