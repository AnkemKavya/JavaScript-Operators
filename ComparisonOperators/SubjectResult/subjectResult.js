function onClickResult() {
    debugger;
    let telugu = Number(document.getElementById("txtTelugu").value);
    let hindi = Number(document.getElementById("txtHindi").value);
    let english = Number(document.getElementById("txtEnglish").value);
    let maths = Number(document.getElementById("txtMaths").value);
    let science = Number(document.getElementById("txtScience").value);
    let social = Number(document.getElementById("txtSocial").value);
    let result = document.getElementById("pResult");
    let total = telugu + hindi + english + maths + science + social;

    if(telugu >= 40 && hindi >= 40 && english >= 40 && maths >= 40 && science >= 40 && social >= 40){
        result.innerHTML = "🎉Congrats! You Passed";
        result.style.color = "green";
        result.style.fontWeight = "bold";
        result.style.fontSize = "20px";
        document.getElementById("pTotal").innerHTML = "Total Marks: " + total + " Out of 600";
        document.getElementById("pAverage").innerHTML = "Average: " + total / 6;
        document.getElementById("pPrecentage").innerHTML = "Percentage: " + (total / 600)*100 + "%";
    }else{
        let failedText = "";

        if (telugu < 40)  failedText += " Telugu";
        if (hindi < 40)   failedText += " Hindi";
        if (english < 40) failedText += " English";
        if (maths < 40)   failedText += " Maths";
        if (science < 40) failedText += " Science";
        if (social < 40)  failedText += " Social";

        document.getElementById("pFailed").innerHTML = "You Failed in: " + failedText;
        result.innerHTML = "⛔Sorry! You Failed";
        result.style.color = "red";
        result.style.fontWeight = "bold";
        result.style.fontSize = "20px";
        }
    }