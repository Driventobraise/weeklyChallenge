// min number
let min = (array, min=array[0])=> {         //creating function with 2 arguments array and min value.
    for(let i= 0; i < array.length; i++){  //this loop goes through the array.
        if (min>array[i]) min = array[i];   //this loop checks the min value.
    }
    return min;
};

//max number
let max = (array, max=array[0])=> {         // changing var min to max and changing the conditions of the if statment from > to < allows to use pretty much the same loop.
    for(let i= 0; i < array.length; i++){  
        if (max<array[i]) max = array[i];
    }
    return max;
};

const arry = [9,12,1,77,84,17876,-1];
console.log("min value of the array is "+ min(arry));
console.log("max value of the array is "+ max(arry));