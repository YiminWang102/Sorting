function bubbleSort(array){
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array.length - i - 1; j++){
      if(greaterThan(array[j], array[j+1])) swap(array, j, j+1);
    }
  }
  return array;
}

function swap(array, index1, index2){
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function greaterThan(num1, num2){
  return num1 > num2;
}
