// Function for the Bigger button
function makeTextBigger() {
    const textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
}

// Function for the FancyShmancy and BoringBetty radio buttons
function applyStyle() {
    const textArea = document.getElementById("textArea");
    const fancyShmancy = document.getElementById("fancyShmancy");
    
    if (fancyShmancy.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function for the Moo button
function addMoo() {
    const textArea = document.getElementById("textArea");
    let sentences = textArea.value.split(".");
    sentences = sentences.map(sentence => sentence.trim() + "-Moo");
    textArea.value = sentences.join(". ");
}

// Add event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("biggerButton").onclick = makeTextBigger;
    document.getElementById("fancyShmancy").onchange = applyStyle;
    document.getElementById("boringBetty").onchange = applyStyle;
    document.getElementById("mooButton").onclick = addMoo;
});
