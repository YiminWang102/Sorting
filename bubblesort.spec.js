describe('Bubble Sort', function(){

  beforeEach(function(){
    spyOn(window,'swap').and.callThrough();
  })
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    expect(window.swap.calls.count()).toEqual(0);
  });

  it('handles arrays with one element', function(){
    expect( bubbleSort( [1] )).toEqual( [1] );
  });

  it('handles arrays with two elements in order', function(){
    expect( bubbleSort( [1, 3] )).toEqual( [1, 3] );
  })

  it('handles arrays with two elements out of order', function(){
    expect( bubbleSort( [3, 1] )).toEqual( [1, 3] );
  })

  it('handles arrays with multiple elements', function(){
    expect( bubbleSort( [7, 4, 2, 1, -4] )).toEqual( [-4, 1, 2, 4, 7] );
  })

  it('handles arrays with multiple elements some of which are the same', function(){
    expect( bubbleSort( [7, 4, 2, 4, 4, 1, 1, -4] )).toEqual( [-4, 1, 1, 2, 4, 4, 4, 7] );
  })
});
