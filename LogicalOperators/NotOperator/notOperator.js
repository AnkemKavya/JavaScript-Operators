function onClickToShop() {
    debugger;
    let store = document.getElementById("txtInput").value.toLowerCase();
    let result = document.getElementById("pResult");
    let isClosed = (store == "yes");
    if(!isClosed){
        result.innerHTML = "🛍️ Yes, The store is open. Happy Shopping!";
        result.style.color = "green";
        result.style.fontSize = "20px";
        result.style.fontWeight = "bold";
    }else{
        result.innerHTML = "🔒 No, The store is closed.";
        result.style.color = "red";
        result.style.fontSize = "20px";
        result.style.fontWeight = "bold";
    }
}