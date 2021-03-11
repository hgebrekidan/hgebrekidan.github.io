/*eslint-disable*/

function addition(){
    let number1=document.getElementById("num1").value;
    let number2=document.getElementById("num2").value;
    let sum=parseInt(number1)+parseInt(number2);
    document.getElementById("result").innerHTML=sum ;
}

function subtraction(){
    let number1=document.getElementById("num1").value;
    let number2=document.getElementById("num2").value;
    let subt=parseInt(number1)-parseInt(number2);
    document.getElementById("result").innerHTML=subt ;
}

function multiplication(){
    let number1=document.getElementById("num1").value;
    let number2=document.getElementById("num2").value;
    let mult=parseInt(number1)*parseInt(number2);
    document.getElementById("result").innerHTML=mult;
}
