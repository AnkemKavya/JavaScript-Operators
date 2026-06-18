function onClickSubmit() {
    debugger;
    let courseFee = Number(document.getElementById("txtCourseFee").value);
    let coupon = document.getElementById("txtCoupon").value;
    let result = document.getElementById("pResult");
    if (coupon == "MEDSQUIRE10" || coupon == "MEDSQUIRE20") {
        if (coupon == "MEDSQUIRE10") {
            courseFee *= .9;
        }
        if (coupon == "MEDSQUIRE20") {
            courseFee *= .8;
        }
        result.innerHTML = "✔️ Valid Coupon: Amount is Rs. " + courseFee;
        result.style.color = "Green";
        result.style.fontWeight = "bold";
        result.style = "20px";
    } else {
        result.innerHTML = "❌ Invalid Coupon: Amount is Rs. " + courseFee;
        result.style.color = "red";
        result.style.fontWeight = "bold";
        result.style = "20px";
    }
}