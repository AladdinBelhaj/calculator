addButton = document.getElementById('add');
equalsButton = document.getElementById('equals');
result = document.querySelector('span');
var total = 0;
var arr = [];
var currentValue = 0;



equalsButton.addEventListener('click',function(){
    arr.push(result.textContent);
    arr = arr.join('').split(' ').map(item =>item.trim());

    console.log(arr);
    currentValue = Number(arr[0]);
    for(let i = 1; i < arr.length; i++){
        
        if (arr[i] == "+"){
            total = currentValue + Number(arr[i+1]);
            currentValue = total;
        }
        if (arr[i] == "-"){
            total = currentValue - Number(arr[i+1]);
            currentValue = total;
        }
        if (arr[i] == "*"){
            total = currentValue * Number(arr[i+1]);
            currentValue = total;
        }
}
    console.log(total);
});


divs = document.querySelectorAll('div');

divs.forEach(div=>{
    div.addEventListener('click',function(){
        result.textContent += div.textContent;
    });
})


addButton.addEventListener('click',function(){
    result.textContent += " " + "+" + " ";

    });





