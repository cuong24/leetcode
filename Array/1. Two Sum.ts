function twoSum(nums: number[], target: number): number[] {
    // for (let i = 0; i < nums.length; i++){
    //     for (let j = i+1; j < nums.length; j++) { 
    //         if (nums[i] + nums[j] == target) {
    //             return [i,j]
    //         }
    //     }
    // }
    const dictNum = {}
    for (let i = 0; i < nums.length; i++) {
        if (dictNum[nums[i]] !== undefined) {
            return [dictNum[nums[i]], i];
        } else {
            dictNum[target - nums[i]] = i;
        }
    }
};