const textArray = ["Bloodless™ SS", "Os Melhores Na Telagem","Discord.gg/NVWpwa5ZcM"];
let textIndex = 0;
let charIndex = 0;
const animatedText = document.getElementById("animated-text");

function type() {
    if (charIndex < textArray[textIndex].length) {
        animatedText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        animatedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex++;
        if (textIndex >= textArray.length) {
            textIndex = 0;
        }
        setTimeout(type, 1000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
});

