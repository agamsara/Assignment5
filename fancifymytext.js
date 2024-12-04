// Function for the Bigger button
function makeTextBigger() {
    const textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
    alert("Hello, world!");

}

// Function to apply FancyShmancy and BoringBetty styles
function applyStyle() {
    const textArea = document.getElementById("textArea");
    const fancyShmancy = document.getElementById("fancyShmancy");

    // Show alert when the radio button changes
    if (fancyShmancy.checked) {
        alert("FancyShmancy selected!");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        alert("BoringBetty selected!");
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function for the Moo button
function addMoo() {
    const textArea = document.getElementById("textArea");
    let text = textArea.value.toUpperCase(); // Convert text to uppercase
    let sentences = text.split(".");
    sentences = sentences.map(sentence => sentence.trim() + "-Moo");
    textArea.value = sentences.join(". ");
}

// Add event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("biggerButton").onclick = makeTextBigger;
    document.getElementById("fancyShmancy").onchange = applyStyle;
    document.getElementById("boringBetty").onchange = applyStyle;
    document.getElementById("mooButton").onclick = addMoo;
    document.getElementById("elementID").style.propertyName = "value";

});
