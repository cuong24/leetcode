function longestCommonPrefix(strs: string[]): string {
    let LCP = ""
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0].charAt(i);
        for (let j = 1; j < strs.length; j++) {
            if (char != strs[j].charAt(i)) {
                return LCP
            }
        }
        LCP = LCP + char
    }
    return LCP
};