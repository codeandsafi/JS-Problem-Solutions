const array1 = [12,13,14,4,15];

let newArr = array1.map((curElm) => {
    let obj={Type: "", Value: 0};

    if(curElm % 2 == 0){
        obj.Type = "Even";
        obj.Value = curElm;
    }
    else{
        obj.Type = "Odd";
        obj.Value = curElm;
    }
    return obj;
})
console.log(newArr);
