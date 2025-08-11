let display = document.getElementById('display');
function appendToDisplay(input){
    display.value+=input;
}
function calculate(){
 try{   display.value = eval(display.value);
 }catch{
    display.value='Error';
 }
}
function clearAll(){
    display.value='';
}
function deleteLast(){
    display.value= display.value.slice(0,-1);
}
function appendToDisplay(input) {
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];

    // Prevent multiple decimals in the same number
    if (input === '.') {
        const parts = display.value.split(/[\+\-\*\/]/); // Split by operators
        const lastNumber = parts[parts.length - 1];
        if (lastNumber.includes('.')) return;
    }

    // Replace last operator if input is operator and last char is operator
    if (operators.includes(input)) {
        if (operators.includes(lastChar)) {
            display.value = display.value.slice(0, -1) + input; // replace last operator
            return;
        }
        if (display.value === '') return; // don't allow starting with operator
    }

    display.value += input;
}
