// Kutay KELEŞ 3/1/2021 ///// https://leetcode.com/problems/two-sum/

var twoSum = function(nums,target) {
	for(let x = 0;x<nums.length;x++){
		for(let y = x+1;y<nums.length;y++){
			if(nums[x]+nums[y] == target) console.log([x,y])

			else console.log(-1)
		}
	}
}