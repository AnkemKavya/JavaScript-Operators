function onClickToSubmit() {
    debugger;
    let name = document.getElementById("txtName").value.toLowerCase();
    let isPresent = document.querySelector('input[name="isPresent"]:checked');
    if(isPresent.value === "Yes"){
        document.getElementById("pResult").innerHTML = `${name} is Present today`;
    }else{
        document.getElementById("pResult").innerHTML = `${name} is Absent today`;
    }
}