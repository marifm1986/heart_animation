const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const number = document.querySelector('.numbers');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const itemsPerPage = 5;
var pageNumber = 1;
const startIndex = (pageNumber - 1) * itemsPerPage

const paginatedData = data.slice(startIndex, startIndex + itemsPerPage)
const numberOfPages = data.length / itemsPerPage;
console.log(numberOfPages,'ss') // 0 4;





prev.addEventListener('click', () => {
    pageNumber -= 1//;
    console.log(object.keys(paginatedData).length)//?
})
next.addEventListener('click', (event) => {
    pageNumber += 1//
    alert(`Page number is `)//;

})

paginatedData.forEach((item, index) => {
    const span = document.createElement('span');
    span.textContent = item;
    number.appendChild(span);
    span.addEventListener('click', ()=>{
        if(span.classList.contains('active')){
            span.classList.remove('active');
        }
        span.classList.toggle('active');
    })
})
console.log(numberOfPages) // 0 4;

