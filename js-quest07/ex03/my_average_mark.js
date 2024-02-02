function my_average_mark(str) {
    if (str.length == 0){
        return 0,0;
    }
    let sum = 0;
    for (i = 0; i < str.length; i++){
        sum = sum + str[i]["integer"];
    }
    return (sum / str.length).toFixed(1);
    };