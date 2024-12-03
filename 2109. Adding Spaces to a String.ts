function addSpaces(s: string, spaces: number[]): string {
    let spaceIndex = 0;
    let newString = "";
    for (let i = 0; i < s.length; i++) {
        if (i == spaces[spaceIndex]) {
            newString = newString + " ";
            spaceIndex++;
        }
        newString = newString + s.charAt(i);
    }
    return newString;
};