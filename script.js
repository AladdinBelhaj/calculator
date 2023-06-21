addButton = document.getElementById('add');
divideButton = document.getElementById('divide');
multiplyButton = document.getElementById('multiply');
subtractButton = document.getElementById('subtract');
equalsButton = document.getElementById('equals');
result = document.querySelector('span');
buttons = document.querySelectorAll('button');
var sum = 0;


var arr = [];


var counter = 0;


divs = document.querySelectorAll('div');

divs.forEach(div=>{
    div.addEventListener('click',function(){
        result.textContent += div.textContent;
        arr.push(div.textContent);
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





addButton.addEventListener('click',function(){
    if(counter == 1){
        run();
        counter = 0;
    }
    arr.push('+');
    counter++;
    

    });



subtractButton.addEventListener('click',function(){
    if(counter == 1){
        run();
        counter = 0;
    }
    arr.push('-');
    counter++;
    });

multiplyButton.addEventListener('click',function(){
    if(counter == 1){
        run();
        counter = 0;
    }
    arr.push('*');
    counter++;
    });

    
divideButton.addEventListener('click',function(){
    if(counter == 1){
        run();
        counter = 0;
    }
    arr.push('/');
    counter++;
    });


equalsButton.addEventListener('click',run);




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



