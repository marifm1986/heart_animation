class MyCard extends HTMLElement {
    constructor() {
        super();
        const cardTemplate = document.getElementById('my-card')
        const card = cardTemplate.content.cloneNode(true);

        const title = this.getAttribute('title') || "Default Title";
        const subtitle = this.getAttribute('subtitle') || "Default subtitle";

        card.querySelector('.title').textContent = title;
        card.querySelector('.subtitle').textContent = subtitle;

        this.appendChild(card);
    }
}

customElements.define('my-card', MyCard);