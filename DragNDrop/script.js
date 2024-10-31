let boxes = document.querySelectorAll('.box')
let glow = document.querySelector('.glow')

boxes.forEach(box => {
    box.addEventListener('dragover', e => {
        e.preventDefault()
    })
    box.addEventListener('drop', () => {
        box.appendChild(glow)
        e.target.classList.remove('drag-over');

    })

    box.addEventListener('dragstart', (e) => {
        e.target.classList.add('dragging');
    });

    box.addEventListener('dragenter', (e) => {
        e.preventDefault();
        e.target.classList.add('drag-over');
    });
    box.addEventListener('dragleave', (e) => {
        e.target.classList.remove('drag-over');
    });
    box.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
    });
})


