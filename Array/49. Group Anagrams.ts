// function groupAnagrams(strs: string[]): string[][] {
//     const anagramGroupDict = {}
//     for (let i = 0; i < strs.length; i++) {
//         const anagramKey = genAnagramKey(strs[i])
//         if (anagramGroupDict[anagramKey]) {
//             anagramGroupDict[anagramKey].push(strs[i])
//         } else {
//             anagramGroupDict[anagramKey] = [strs[i]]
//         }
//     }
//     const result = []
//     for (const [key, value] of Object.entries(anagramGroupDict)) {
//         result.push(value)
//     }
//     return result
// };

// function genAnagramKey(str: string): string {
//     const anagramDict = {}
//     for (let i = 0; i < str.length; i++) {
//         if (anagramDict[str.charAt(i)]) {
//             anagramDict[str.charAt(i)]++;
//         } else {
//             anagramDict[str.charAt(i)] = 1;
//         }
//     }
//     let anagramKey = ""
//     const sortedChars = Object.keys(anagramDict).sort()
//     for (let i = 0; i < sortedChars.length; i++) {
//         anagramKey += sortedChars[i] + anagramDict[sortedChars[i]]
//     }
//     return anagramKey
// }

function groupAnagrams(strs: string[]): string[][] {
    const anagramGroupDict = {}
    for (let i = 0; i < strs.length; i++) {
        const anagramKey = genAnagramKey(strs[i])
        if (anagramGroupDict[anagramKey]) {
            anagramGroupDict[anagramKey].push(strs[i])
        } else {
            anagramGroupDict[anagramKey] = [strs[i]]
        }
    }
    const result = []
    for (const [key, value] of Object.entries(anagramGroupDict)) {
        result.push(value)
    }
    return result
};

function genAnagramKey(str: string): string {
    const anagramKey = Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i) - 'a'.charCodeAt(0)
        anagramKey[charCode]++;
    }
    return anagramKey.join(',')
}