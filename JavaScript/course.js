// give a function, everytime it was called, it will return the next number in the sequence,the sequence is array.
var array = [];
function sequence() {  
    var n = array.length;
    // if n == 3, then push "Fizz",if n == 4, then push "Buzz"
    if (n % 3 == 0 && n != 0) {
        array.push("Fizz");
    }else if (n % 5 == 0 && n != 0) {
        array.push("Buzz");
    }else if (n % 3 == 0 && n % 5 == 0 && n != 0) {
        array.push("FizzBuzz");
    }
    else {
        array.push(n);
    }
    console.log(array);
    return array;     
}

function whosPaying(names) { 
    /******Don't change the code above*******/       
        //Write your code here.
        var num = Math.floor(Math.random() * names.length);
        var output = names[num];
        // console.log(num, output);
        return output + "is going to buy lunch today!";
   
    /******Don't change the code below*******/    
    }
// names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// whosPaying(names);


function fibonacciGenerator (n) {
    var output = [];
    for (var i = 0; i < n; i++) {
        if (i < 2){
            output.push(i);
        } else {
            output.push(output[i-2] + output[i-1]);
        }
    }
    console.log(output);
    return output;
}

fibonacciGenerator(3);