var n1=document.getElementById("n1");
var n2=document.getElementById("n2");
var symbol=document.getElementById("symbol");
var h2=document.getElementById("ans");
var btn=document.getElementById("btn");
var result;

function calculate(){
    if (symbol.value=='+')
        result=parseInt(n1.value)+parseInt(n2.value);
    else if (symbol.value=='-')
        result=parseInt(n1.value)-parseInt(n2.value);
    else if (symbol.value=='*')
        result=parseInt(n1.value)*parseInt(n2.value);
    else if (symbol.value=='/')
        result=parseInt(n1.value)/parseInt(n2.value);
        h2.innerHTML="your answer is:"+result;
}