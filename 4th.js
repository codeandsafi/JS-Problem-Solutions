var arr1 = ['January', 'February', 'March', 'April'];
var arr2 = ['May', 'June', 'July', 'August'];

const input = (array1, array2) => {
    var arr3 = array1.concat(array2);
    return console.log(arr3.sort());
}

input(arr1, arr2);
