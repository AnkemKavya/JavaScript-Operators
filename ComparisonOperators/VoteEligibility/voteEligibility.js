function onClickToCheckEligibility() {
    debugger;
    let name = document.getElementById("txtName").value;
    let age = Number(document.getElementById("txtAge").value);
    if(age == 18){
        document.getElementById("pResult").innerHTML = name + " is eligible for voting.";
    }
}