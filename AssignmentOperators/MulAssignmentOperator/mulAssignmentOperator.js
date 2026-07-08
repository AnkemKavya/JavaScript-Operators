function onClickToCheck() {
    debugger;
    let salary = Number(document.getElementById("txtSalary").value);
    let increase = Number(document.getElementById("txtIncrease").value);
    increase = increase / 100;
    salary *= increase;
    salary += salary;
    document.getElementById("pResult").innerHTML = salary;
}