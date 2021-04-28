function Calculate(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var answer;
    if (operator == "0"){
        answer = "Please Select A Operator!";
    }
    if (operator == "1"){
        answer = num1 + num2;
    }
    if (operator == "2"){
        answer = num1 - num2;
    }
    if (operator == "3"){
        answer = num1 * num2;
    }
    if (operator == "4"){
        answer = num1 / num2;
    }
    document.getElementById('Answer').innerHTML = "Answer: " + answer;
}