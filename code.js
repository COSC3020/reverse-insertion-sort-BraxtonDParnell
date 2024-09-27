function reverseInsertionSort(arr) {
  for(var i = arr.length - 2; i >= 0; i--) {
  //iterates reverse through arr starting from second to last index.
    var val = arr[i];
    var j;
    for(j = i + 1; j < arr.length && arr[j] < val; j++) {
	//compares i (value left of the sorted portion of the array) to the sorted portion
      arr[j-1] = arr[j];
	  //moves righ until it is sorted
    }
	
    arr[j-1] = val;
	//returns back to left of the sorted array 
  }
  return arr;
}
