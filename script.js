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



numbers = document.querySelectorAll('.numbers');
numbers.forEach(number=>{
    number.addEventListener('click',function(){
        if(result.textContent == '+' || result.textContent == '-' || result.textContent == '*' || result.textContent == '/' || result.textContent == "0"){
            result.textContent = "";
        }
        result.textContent += number.textContent;
        arr.push(number.textContent);
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
        a = Number(arr[0]);
        b = Number(arr[1]);
        sum = add(a,b);
        arr = [sum];
        result.textContent = sum;
    }else if(arr.includes('-')){
        arr = arr.join('').split('-');
        a = Number(arr[0]);
        b = Number(arr[1]);
        sum = subtract(a,b);
        arr = [sum];
        result.textContent = sum;
    }
    else if(arr.includes('*')){
        arr = arr.join('').split('*');
        a = Number(arr[0]);
        b = Number(arr[1]);
        sum = multiply(a,b);
        arr = [sum];
        result.textContent = sum;
    }
    else if(arr.includes('/')){
        arr = arr.join('').split('/');
        a = Number(arr[0]);
        b = Number(arr[1]);
        sum = divide(a,b);
        arr = [sum];
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

resetButton.addEventListener('click',function(){
    sum = 0;
    arr = [];
    result.textContent = "";
});

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






