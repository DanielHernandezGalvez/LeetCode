async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
    try {
        const result1 = await promise1;
        const result2 = await promise2
        return result1 + result2
    } catch (error) {
        throw error;
    }
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */