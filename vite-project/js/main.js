import "../style/style.css";
import {items} from "./items"
import {DOMSelectors} from './dom.js';

// DOMSelectors.storefront.addEventListener(".btn", function(event) {
//     event.preventDeafault();
//     let card = {
//         name: DOMSelectors.name.value,
//         imgURL: DOMSelectors.imgURL.value,
//         cost: DOMSelectors.cost.value,
//     };
//     createCards(card);
// })

// function createCards() {
//     let cardHTML =  `
//     <div class="inner">
//     <h2>${items.name}</h2>
//     <p><img class="picture" src=${items.imgURL}></p>
//     <p>Price: ${items.cost}</p>
//     </div>
//     `;

//     DOMSelectors.box.insertAdjacentHTML("beforeend", cardHTML);

// };

const createCards = {
    create: function () {
        items.forEach((items) => {
            DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <h3>Price: ${items.cost}</h3>
                </div>
                `
            );
        });
    },

    filterMacbooks: function () {
        items
        .filter((items) => items.category.includes("Macbooks"))
        .forEach((items) => {
            DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <h3>Price: ${items.cost}</h3>
                </div>
                `
            );
        });
    },

    filteriPads: function () {
        items
        .filter((items) => items.category.includes("iPads"))
        .forEach((items) => {
            DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <h3>Price: ${items.cost}</h3>
                </div>
                `
            );
        });
    },

    filteriPhones: function () {
        items
        .filter((items) => items.category.includes("iPhones"))
        .forEach((items) => {
            DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <h3>Price: ${items.cost}</h3>
                </div>
                `
            );
        });
    },

    filteriMacs: function () {
        items
        .filter((items) => items.category.includes("iMacs"))
        .forEach((items) => {
            DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <h3>Price: ${items.cost}</h3>
                </div>
                `
            );
        });
    },

    filterHeadphones: function () {
        items
        .filter((items) => items.category.includes("Headphones"))
        .forEach((items) => {
            DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <h3>Price: ${items.cost}</h3>
                </div>
                `
                
            );
        });
    },

    removeCards: function () {
        let card = document.querySelectorAll(".inner")
        card.forEach(card => {
            card.remove()
        });
    },

};
    
createCards.create(items);

DOMSelectors.macbooks.addEventListener("click", function () {
    createCards.removeCards(items)
    createCards.filterMacbooks(items)
});

DOMSelectors.ipads.addEventListener("click", function () {
    createCards.removeCards(items)
    createCards.filteriPads(items)
});

DOMSelectors.iphones.addEventListener("click", function () {
    createCards.removeCards(items)
    createCards.filteriPhones(items)
});

DOMSelectors.imacs.addEventListener("click", function () {
    createCards.removeCards(items)
    createCards.filteriMacs(items)
});


DOMSelectors.headphones.addEventListener("click", function () {
    createCards.removeCards(items)
    createCards.filterHeadphones(items)
});

// let buttons = document.querySelectorAll('button')
// buttons.forEach((btn => btn.addEventListener("click", function() {
//     let type = btn.textContent()
//     let newArr = category.filter((category) => category.category === type)
//     clearFields()
//     insertCards(newArr)
// }
// )))
