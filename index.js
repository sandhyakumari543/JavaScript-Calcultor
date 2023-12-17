function removeConsecutiveOperator(displayText) {
    const lastChar = displayText.slice(-1);

    const operatorRegex = /[+\-*\/]/;

    // Check if the last entered character and the character before it are both operators of the same type
    if (operatorRegex.test(lastChar) && operatorRegex.test(displayText.charAt(displayText.length - 1)) && lastChar === displayText.charAt(displayText.length - 1)) {
        return displayText.slice(0, -1);
    }
    return displayText;
}




document.addEventListener('DOMContentLoaded',function(){
    let display=document.getElementById('display')
    document.getElementById('clear').addEventListener('click',function(){
        display.innerHTML="0"
    })

})
var digitButtons=['zero','one','two','three','four','five','six','seven','eight','nine']
for(let i=0; i<digitButtons.length;i++){
    document.getElementById(digitButtons[i]).addEventListener('click',function(){
        updateDisplay(i.toString());
    })
}

function updateDisplay(value){
    display.innerHTML=display.innerHTML==='0' ? value:display.innerHTML+value;
}


// for DEL  function
document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display');
    document.getElementById('delete').addEventListener('click', function () {
        display.textContent = display.textContent.slice(0, -1);
    });
});


// For operator symbol
document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display');
    let operatorButtons = document.getElementsByClassName('operator');
    for (let i = 0; i < operatorButtons.length; i++) {
        operatorButtons[i].addEventListener('click', function () {
            const displayText = removeConsecutiveOperator(display.textContent);
            display.textContent = displayText + this.textContent;
        });
    }
});

// Decimal
document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display');
    document.getElementById('decimal').addEventListener('click', function () {
        const values = display.textContent.split(/[\+\-\*\/]/);
        const lastValue = values[values.length - 1];
        if (!lastValue.includes('.')) {
            display.textContent += '.';
        }
    });
});




//  for Equals button
// document.addEventListener('DOMContentLoaded',function(){
//     let display=document.getElementById('display');
// document.getElementById('equals').addEventListener('click',function(){
//         display.textContent=eval(display.textContent)
//     })

// })

document.getElementById('equals').addEventListener('click', function () {
    try {
        const result = new Function('return ' + removeConsecutiveOperator(display.textContent))();
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
});











