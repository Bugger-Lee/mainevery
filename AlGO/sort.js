/**
 * 1.给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 * 输入： nums = [2,7,11,15], target = 9  输出 [0,1]   2+7=9
 * 输入： nums = [3,2,4], target = 6  输出 [1,2]   2+4=6
 * 
 * 
 */
//  双重循环大法
function getTargets(nums, target) {
  let len = nums.length
  if(len == 0) return []
  for ( let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i != j && (nums[i] + nums[j] == target)) {
        return [i, j]
      }
    }
  }
}

console.log(getTargets([1,5,7], 8))