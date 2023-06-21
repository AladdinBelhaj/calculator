addButton = document.getElementById('add');
divideButton = document.getElementById('divide');
multiplyButton = document.getElementById('multiply');
subtractButton = document.getElementById('subtract');
equalsButton = document.getElementById('equals');
resetButton = document.getElementById('reset');
result = document.querySelector('span');

var sum = 0;
var arr = [];
var counter = 0;



resetButton.addEventListener('click',function(){
    sum = 0;
    arr = [];
    result.textContent = sum;
});

numbers = document.querySelectorAll('.numbers');

numbers.forEach(number=>{
    number.addEventListener('click',function(){
        if(result.textContent == '+' || result.textContent == '-' || result.textContent == '*' || result.textContent == '/' ){
            result.textContent = "";
        }
        result.textContent += number.textContent;
        arr.push(number.textContent);
        console.log(arr);
    });
})



function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}


function run(){
    if(arr.includes('+')){
        arr = arr.join('').split('+');
        console.log(arr);
        a = Number(arr[0]);
        b = Number(arr[1]);
        sum = add(a,b);
        arr = [sum];
        console.log(sum);
        console.log(arr);
        result.textContent = sum;
    }else if(arr.includes('-')){
        arr = arr.join('').split('-');
        console.log(arr);
        a = Number(arr[0]);
        b = Number(arr[1]);
        sum = subtract(a,b);
        arr = [sum];
        console.log(sum);
        console.log(arr);
        result.textContent = sum;
    }
    else if(arr.includes('*')){
        arr = arr.join('').split('*');
        console.log(arr);
        a = Number(arr[0]);
        b = Number(arr[1]);
        sum = multiply(a,b);
        arr = [sum];
        console.log(sum);
        console.log(arr);
        result.textContent = sum;
    }
    else if(arr.includes('/')){
        arr = arr.join('').split('/');
        console.log(arr);
        a = Number(arr[0]);
        b = Number(arr[1]);
        sum = divide(a,b);
        arr = [sum];
        console.log(sum);
        console.log(arr);
        result.textContent = sum;
    }
};




function calcHandler(param){
    if(counter == 1){
        run();
        counter = 0;
    }
    arr.push(param);
    result.textContent = param;
    counter++;
}



addButton.addEventListener('click',function(){
    calcHandler('+');
    });


subtractButton.addEventListener('click',function(){
    calcHandler('-');
    });

multiplyButton.addEventListener('click',function(){
    calcHandler('*');
    });


divideButton.addEventListener('click',function(){
    calcHandler('/');
    });


equalsButton.addEventListener('click',run);






