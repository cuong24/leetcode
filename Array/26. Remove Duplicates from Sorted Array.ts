function removeDuplicates(nums: number[]): number {
    // const dict = {}
    // const tempNums = nums
    // nums = []
    // for(let i = 0; i < tempNums.length; i++){
    //     if (!dict[tempNums[i]]){
    //         dict[tempNums[i]] = 1
    //         nums.push(tempNums[i])
    //     }
    // }
    // console.log(nums)
    // return nums.length

    let currentNums = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === currentNums) {
            nums.splice(i, 1)
            i--;
        } else {
            currentNums = nums[i]
        }
    }
    return nums.length
};