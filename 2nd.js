const fibonacci = (n) => {
    var t1 = 0;
    var t2 = 1;
    for( var i = 2; i<n; i++){
        var t3 = t1+t2;
        t1 = t2;
        t2 = t3;
    }
    return console.log(t3);
}

fibonacci(5);