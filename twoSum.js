var twoSum = function(nums,target) {
	for(let x = 0;x<nums.length;x++){
		for(let y = x+1;y<nums.length;y++){
			if(nums[x]+nums[y] == target) console.log([x,y])

			else console.log(-1)
		}
	}
}


twoSum([3,2,4],6)