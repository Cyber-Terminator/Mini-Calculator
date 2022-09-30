//Defining functions, add, subtract, multiply, divide
function add(){
    var result=Number(document.getElementById("FN").value) + Number(document.getElementById("SN").value);
    document.getElementById("B1").value=result;
}
function subtract(){
    var result=Number(document.getElementById("FN").value) - Number(document.getElementById("SN").value);
    document.getElementById("B2").value=result;
}
function multiply(){
    var result=Number(document.getElementById("FN").value) * Number(document.getElementById("SN").value);
    document.getElementById("B3").value=result;
}
function divide(){
    var result=Number(document.getElementById("FN").value) / Number(document.getElementById("SN").value);
    document.getElementById("B4").value=result;
}