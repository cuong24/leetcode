const RomanCharToInt = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

function romanToInt(s: string): number {
    let index = 0;
    let sum = 0;
    for (; index < s.length; index++) {
        if (index + 1 < s.length && (RomanCharToInt[s.charAt(index)] < RomanCharToInt[s.charAt(index + 1)])) {
            sum = sum + RomanCharToInt[s.charAt(index + 1)] - RomanCharToInt[s.charAt(index)];
            index++;
            continue;
        }
        sum = sum + RomanCharToInt[s.charAt(index)]
    }
    return sum;
};
