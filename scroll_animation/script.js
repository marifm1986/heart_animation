const li = document.getElementsByTagName('li')

// function loop(){
//     li.forEach(element => {
//         console.log('s',element)
//     });
// }

for(let i =0; i <li.length;i++){
    const current = li[i]
    current.addEventListener('click', () => {
        current.classList.add('wow')
        console.log(current.innerHTML)

    })
    
}

