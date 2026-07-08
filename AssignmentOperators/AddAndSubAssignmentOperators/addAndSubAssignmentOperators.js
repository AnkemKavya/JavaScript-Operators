let count = 0;

function onClickToAdd() {
    debugger;
    let stepNumber = Number(document.getElementById("txtStepNumber").value);
    count+=stepNumber;
    document.getElementById("pResult").innerHTML = count;
}

function onClickToSub() {
    debugger;
    let stepNumber = Number(document.getElementById("txtStepNumber").value);
    if(count > 0){
        count-=stepNumber;
        document.getElementById("pResult").innerHTML = count;
    }
}