function containsDuplicate(nums: number[]): boolean {
    const numberDict = {}
    for (let i = 0; i < nums.length; i++) {
        if (numberDict[nums[i]]) {
            return true
        }
        numberDict[nums[i]] = true
    }
    return false
};