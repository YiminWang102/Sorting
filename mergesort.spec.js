describe('Split Array function', function() {
  it('is able to split an empty array into two empty arrays', function() {
    // your code here 
    expect(split([])).toEqual([[], []]);
  });
  it('is able to split an array with one element into one array with one element and an empty array', function() {
    // your code here 
    expect(split([1])).toEqual([[1], []]);
  });
  it('is able to split an array with two elements into two halves', function() {
    // your code here 
    expect(split([1, 2])).toEqual([[1], [2]]);
  });
  it('is able to split an array with an odd number of elements into two halves', function() {
    // your code here 
    expect(split([1, 2, 3])).toEqual([[1, 2], [3]]);
  });

  it('is able to split an array with an even number of elements into two halves', function() {
    // your code here 
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3], [4, 5, 6]]);
  });
});

describe('Merge Sort', function(){
  it('is able to merge two empty arrays into one empty array', function(){
    // test the merging algorithm
    expect(merge([], [])).toEqual([]);
  });
    it('is able to merge an empty array with a non-empty array', function(){
    // test the merging algorithm
    expect(merge([1], [])).toEqual([1]);
    expect(merge([], [1])).toEqual([1]);
    expect(merge([], [1,2,3])).toEqual([1, 2, 3]);
  });
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([1, 4, 6], [2, 3, 7])).toEqual([1, 2, 3, 4, 6, 7]);
    expect(merge([1, 4, 6], [1, 2, 7])).toEqual([1, 1, 2, 4, 6, 7]);
  });
});