function onClickCheckEntry() {
    debugger;
    let ticket = document.getElementById("ticketInput").value.toLowerCase();
    let vip = document.getElementById("VipInput").value.toLowerCase();
    let result = document.getElementById("pResult");
    if(ticket == "yes" || vip == "yes"){
        result.innerHTML = "🎟️ Welcome! You can enter.";
        result.style.color = "green";
        result.style.fontWeight = "bold";
        result.style.fontSize = "20px";
    }else{
        result.innerHTML = "🚫 Access Denied. You need a Ticket or VIP Pass";
        result.style.color = "red";
        result.style.fontWeight = "bold";
        result.style.fontSize = "20px";
    }
}