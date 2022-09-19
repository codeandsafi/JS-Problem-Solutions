var str = "Hello world! I love you 3000!"

var newStr = (str) => {
    var str2 = '';
    for(var i = 0; i < str.length; i++){
        if((str[i]>='a' && str[i] <='z') || (str[i] >= 'A' && str[i] <='Z') || (str[i] == ' ')){
            str2 =  str2 + str[i];
        }
    }
    return console.log(str2);
}

newStr(str);