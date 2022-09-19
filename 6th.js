const array1 = [12,13,14,4,15];

let newArr = array1.map((curElm) => {
    if(curElm % 2 == 0){
        return `Type = "Even",  Value: ${curElm} `
    }
    else{
        return `Type = "Odd",  Value: ${curElm} `
    }
})
console.log(newArr);
