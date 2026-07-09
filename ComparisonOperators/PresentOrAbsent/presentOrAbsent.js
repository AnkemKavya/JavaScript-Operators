function onClickToSubmit() {
    debugger;
    let name = document.getElementById("txtName").value.toLowerCase();
    let isPresent = Number(document.querySelector('input[name="isPresent"]:checked').value);
    if(isPresent == true){
        document.getElementById("pResult").innerHTML = `${name} is Present today`;
    }else{
        document.getElementById("pResult").innerHTML = `${name} is Absent today`;
    }
}