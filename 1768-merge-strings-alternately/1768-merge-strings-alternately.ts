function mergeAlternately(word1: string, word2: string): string {
    const merged: string[] = [];
    const minLength = Math.min(word1.length, word2.length);

    for (let i = 0; i < minLength; i++) {
        merged.push(word1[i], word2[i]);
    }

    if (word1.length > word2.length) {
        merged.push(...word1.slice(minLength));
    } else if (word2.length > word1.length) {
        merged.push(...word2.slice(minLength));
    }

    return merged.join("");
}