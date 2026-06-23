function onClickToCheck() {
    debugger;
    let first = document.getElementById("txtFirst").value.toLowerCase();
    let second = document.getElementById("txtSecond").value.toLowerCase();
    if(first == second){
        document.getElementById("pResult").innerHTML = "True";
    }else{
        document.getElementById("pResult").innerHTML = "False";
    }
    
}