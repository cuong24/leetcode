function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }
    const characterDict1 = genAnagramDict(s)
    const characterDict2 = genAnagramDict(t)
    for (const key of Object.keys(characterDict1)) {
        if (characterDict1[key] !== characterDict2[key]) {
            return false
        }
    }
    return true
};

function genAnagramDict(s: string): Object {
    const dictAnagram = {}
    for (let i = 0; i < s.length; i++) {
        if (dictAnagram[s.charAt(i)]) {
            dictAnagram[s.charAt(i)]++;
        } else {
            dictAnagram[s.charAt(i)] = 1;
        }
    }
    return dictAnagram
}