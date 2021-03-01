/**
 * @param {string} s
 * @return {number}
 */
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
	console.log(Math.max(...hook))
	
    
};


lengthOfLongestSubstring("")