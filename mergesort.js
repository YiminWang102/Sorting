function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  var firstIndexSecondArray = Math.ceil(wholeArray.length/2);
  var firstHalf = wholeArray.slice(0, firstIndexSecondArray);
  var secondHalf = wholeArray.slice(firstIndexSecondArray, wholeArray.length);
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
	var sortedArray = [];
	var firstI = 0
	var secondI = 0;
	while(firstI < firstHalf.length || secondI < secondHalf.length){
		if(firstI < firstHalf.length && secondI >= secondHalf.length || firstHalf[firstI] < secondHalf[secondI]) {
			sortedArray.push(firstHalf[firstI]);
			firstI++;
		}
		else{
			sortedArray.push((secondHalf[secondI]));
			secondI++;
		}
	}
	return sortedArray;
}

function mergeSort(wholeArray) {
	if(wholeArray.length <= 1){
		return wholeArray;
	}else{
		var splitArrays = split(wholeArray);
		return merge(mergeSort(splitArrays[0]),mergeSort(splitArrays[1]));
	}
}