function getRect(w, h) {
    const area = w * h;
    if (w <= 0 || h <= 0) {
        console.log("Invalid input: width and height must be positive numbers.");
        return;
    } else {
        console.log(w * h)
    }

}

getRect(-1.5, 5);