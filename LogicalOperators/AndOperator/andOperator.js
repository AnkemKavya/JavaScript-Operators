function checkDiscount() {
            debugger;
            // Get inputs
            let hasId = document.getElementById("idInput").value.toLowerCase();
            let age = Number(document.getElementById("ageInput").value);
            let resultText = document.getElementById("andResult");

            // BOTH conditions must be true
            if (hasId === "yes" && age < 25) {
                resultText.innerHTML = "🎉 Success! You get the discount.";
                resultText.style.color = "green";
            } else {
                resultText.innerHTML = "❌ Sorry, you do not qualify.";
                resultText.style.color = "red";
            }
        }