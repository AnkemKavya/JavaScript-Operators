function onClickToCheck() {
    debugger;
    let age = Number(document.getElementById("txtNumber").value);
    document.getElementById("txtNumber").value = "";
    let canDrive = (age >= 18) ? "Yes, you can drive!" : "No, you are too young.";
    document.getElementById("pResult").innerHTML = canDrive;
}