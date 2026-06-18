var otp = 0;
function onClickSendOTP() {
    debugger;
    otp = Math.trunc(Math.random()*(10**6));
    alert(otp);
} 

function onClickLogIn() {
    debugger;
    let inputotp = document.getElementById("txtLogin").value;
    let login = document.getElementById("pResult");
    if(inputotp == otp) {
        login.innerHTML = "🎉 Successfully Logged In.";
        login.style.color = "Green";
        login.style.fontWeight = "bold";
        login.style.fontSize = "20px";
    } else{
        login.innerHTML = "❌ Invalid OTP";
        login.style.color = "red";
        login.style.fontWeight = "bold";
        login.style.fontSize = "20px";
    }
}