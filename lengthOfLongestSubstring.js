/**
 * @param {string} s
 * @return {number}
 */

// Kutay KELEŞ 3/1/2021 //// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
	let hook = [0]
	for(let x=0;x<s.length;x++){
		let tempArr={};
		tempArr[x] = s[x]
		for(let y=x+1;y<s.length;y++){
				if(tempArr[x].includes(s[y])) break;
				else{
					tempArr[x] += s[y];

				}
		
		}
		hook.push(tempArr[x].length)
	}
	return(Math.max(...hook));
	
    
};
