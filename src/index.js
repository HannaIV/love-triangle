/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 let triangles = 0;
	for(let n = 0; n < preferences.length; n++){
	 let current = preferences[n];
	 let second = preferences[current];
	 let third = preferences[second];
	 	 if(third == n && current != second && second != third && third != current){
			triangles++;
		}
		 return triangles/3;
}
}
