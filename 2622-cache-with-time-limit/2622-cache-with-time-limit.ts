class TimeLimitedCache {
    private cache: Map<number, { value: number; expirationTime: number; timeout: NodeJS.Timeout }> = new Map();

    set(key: number, value: number, duration: number): boolean {
        const existingEntry = this.cache.get(key);

        if (existingEntry) {
            clearTimeout(existingEntry.timeout);
            existingEntry.value = value;
            existingEntry.expirationTime = Date.now() + duration;
            existingEntry.timeout = setTimeout(() => this.cache.delete(key), duration);
            return true;
        } else {
            const expirationTime = Date.now() + duration;
            const timeout = setTimeout(() => this.cache.delete(key), duration);
            this.cache.set(key, { value, expirationTime, timeout });
            return false;
        }
    }

    get(key: number): number {
        const entry = this.cache.get(key);
        if (entry && entry.expirationTime >= Date.now()) {
            return entry.value;
        }
        return -1;
    }

    count(): number {
        const currentTime = Date.now();
        let count = 0;
        for (const [key, entry] of this.cache.entries()) {
            if (entry.expirationTime >= currentTime) {
                count++;
            }
        }
        return count;
    }
}


/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */