const imageContainer = document.querySelector(".container")
const btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
    // console.log("clicked")
    imageNumber = 10
    addNewImages()
})

function addNewImages() {
    for (let index = 0; index < imageNumber; index++) {
        const newImg = document.createElement("img")
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 200)}`
        imageContainer.appendChild(newImg)
    }
}

function printPreview() {
    window.print();
  }