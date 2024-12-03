function isValid(s: string): boolean {
    const closingBrackets = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    const bracketStack: string[] = []
    for (let i = 0; i < s.length; i++) {
        if (closingBrackets[s.charAt(i)]) {
            if (bracketStack.length < 1 || bracketStack[bracketStack.length - 1] !== closingBrackets[s.charAt(i)]) {
                return false
            }
            else {
                bracketStack.pop()
            }
        } else {
            bracketStack.push(s.charAt(i))
        }
    }
    if (bracketStack.length != 0) {
        return false
    }
    return true
};