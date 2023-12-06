
const keys = document.querySelectorAll(".key");
const keyboardKeys = ['z', 's', 'x', 'd', 'c', 'v', 'g', 'b', 'h', 'n', 'j', 'm'];
const keyboardBlackKeys = [, , 'g', 'h', 'j'];
keys.forEach((key) => {
    key.addEventListener("click", () => {
        playNote(key);
    })
})

function playNote(key) {
    const audio = document.getElementById(key.dataset.note);
    audio.currentTime = 0;
    key.classList.add("active");
    audio.play();
    audio.addEventListener("ended", () => {
        key.classList.remove("active");
    })
}

document.addEventListener("keydown", (event) => {
    if (keyboardKeys.includes(event.key)) {
        const pressKey = event.key;
        const pianoKeyIndex = keyboardKeys.indexOf(pressKey);
        playNote(keys[pianoKeyIndex]);
    }
})