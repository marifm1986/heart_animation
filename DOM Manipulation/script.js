
// const listItems = document.querySelectorAll(".list-items");

// const ul = document.querySelector('ul')
// const li = document.createElement('li')
// ul.append(li)
// li.setAttribute('class', 'list-items')
// li.innerText = 'Mirzapur'
// // li.classList.add('list-items')

// for(let i = 0; i < listItems.length; i++) {
//     listItems[i].style.color = 'red'
//     listItems[i].addEventListener('click', ()=> {
//         listItems[i].remove()
//     })
// }



let btn = document.querySelector("#new-qoute")
let quote = document.querySelector(".text-area")
let person = document.querySelector(".person")


const quotes = [
    { quote: "The best way to predict the future is to invent it.", person: "Alan Kay" },
    { quote: "Code is like humor. When you have to explain it, it’s bad.", person: "Cory House" },
    { quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", person: "Martin Fowler" },
    { quote: "First, solve the problem. Then, write the code.", person: "John Johnson" },
    { quote: "Experience is the name everyone gives to their mistakes.", person: "Oscar Wilde" },
    { quote: "Simplicity is the soul of efficiency.", person: "Austin Freeman" },
    { quote: "Make it work, make it right, make it fast.", person: "Kent Beck" },
    { quote: "It is not enough to do your best; you must know what to do and then do your best.", person: "W. Edwards Deming" },
    { quote: "Programs must be written for people to read, and only incidentally for machines to execute.", person: "Harold Abelson" },
    { quote: "The only way to learn a new programming language is by writing programs in it.", person: "Dennis Ritchie" }
];

btn.addEventListener("click", function () {

    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = `"${quotes[random].quote}" `
    person.innerText = quotes[random].person

})

