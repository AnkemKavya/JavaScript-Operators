function onClickToCheck() {
    debugger;
    let age = Number(document.getElementById("txtInput").value);
    document.getElementById("txtInput").value = "";
    let result = age >= 65 ? "Senior Citizen" : age >= 18 ? "Adult" : age >= 13 ? "Teenager" : "child";
    document.getElementById("pResult").innerHTML = result;
}