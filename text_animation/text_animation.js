const containerEl = document.querySelector(".container")

const careers = ["Youtuber", "Web Developer", "Freelancer", "Instructor"];
let careerIndex = 0;
let charIndex = 0;


updateText()

function updateText() {
    charIndex++;
    containerEl.innerHTML = `
    <h1>I am ${careers[careerIndex][0] == 'I' ? 'an' : 'a'} ${careers[careerIndex].slice(0, charIndex)}</h1>
    `
    if (charIndex === careers[careerIndex].length) {
        careerIndex++
        charIndex = 0;
    }
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 500)
}