const arr = [
        ['One', 'Two'],
        ['Three', 'Four'],
        ['Five', 'Six'],
        ['Seven', 'Eight']
    ];

let flatArr = arr.reduce((accum, currVal)  => { 
          return accum.concat(currVal);
})

console.log(flatArr);
