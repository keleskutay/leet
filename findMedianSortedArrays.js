/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//Kutay KELEŞ 3/1/2021 /// https://leetcode.com/problems/median-of-two-sorted-arrays/


var findMedianSortedArrays = function(nums1, nums2) {
  let nums3 = [...nums1,...nums2].sort(function(a,b) {return b-a;});
  if(nums3.length % 2 == 1){
  	return(nums3[parseInt(nums3.length / 2)].toFixed(5))
  }
  else{
  	return(((nums3[parseInt(nums3.length/2)] + nums3[parseInt(nums3.length/2) -1 ]) / 2) .toFixed(5))
  }

};


