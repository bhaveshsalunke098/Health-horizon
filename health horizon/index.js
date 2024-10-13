document.getElementById("submitFeedback").addEventListener("click", function() {
    var feedback = document.getElementById("userFeedback").value;
    
    if (feedback) {
        // Show thank you message
        document.getElementById("feedbackResponse").innerText = "Thank you for your feedback!";
        document.getElementById("userFeedback").value = ""; // Clear the input field
    } else {
        // Optionally show a warning if the input is empty
        document.getElementById("feedbackResponse").innerText = "Please enter your feedback.";
        document.getElementById("feedbackResponse").style.color = "red";
    }
});
