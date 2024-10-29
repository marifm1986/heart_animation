const body = document.querySelector("body")

body.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const span = document.createElement("span")
    span.style.left = xPos + "px";
    span.style.top = yPos + "px";
    const size = Math.random() * 100;
    span.style.width = size + "px";
    span.style.height = size + "px";
    span.style.zIndex = size.toFixed()
    span.style.fill = `#f${size.toFixed()}`;
    body.appendChild(span);
    setTimeout(() => {
        span.remove()
    }, 3000);
    console.log(size.toFixed())
})