document.getElementById("txt").addEventListener("focus", function() {
    document.body.style.backgroundColor = "#d4edda"; /* Change background color on focus */
});

document.getElementById("txt").addEventListener("blur", function() {
    document.body.style.backgroundColor = "#f0f0f0"; /* Revert to the initial background color on blur */
});
