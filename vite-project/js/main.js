import "../style/style.css";
import {items} from "./items"
import {DOMSelectors} from './index.js';

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
            DOMSelectors.box.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <p>Price: ${items.cost}</p>
                </div>
                `
            );
        });
    },

    filterMacbooks: function () {
        items
        .filter((items) => items.category.includes("Macbooks"))
        .forEach((items) => {
            DOMSelectors.box.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <p>Price: ${items.cost}</p>
                </div>
                `
            );
        });
    },

    filteriPads: function () {
        items
        .filter((items) => items.category.includes("iPads"))
        .forEach((items) => {
            DOMSelectors.box.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <p>Price: ${items.cost}</p>
                </div>
                `
            );
        });
    },

    filteriPhones: function () {
        items
        .filter((items) => items.category.includes("iPhones"))
        .forEach((items) => {
            DOMSelectors.box.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <p>Price: ${items.cost}</p>
                </div>
                `
            );
        });
    },

    filteriMacs: function () {
        items
        .filter((items) => items.category.includes("iMacs"))
        .forEach((items) => {
            DOMSelectors.box.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <p>Price: ${items.cost}</p>
                </div>
                `
            );
        });
    },

    filterHeadphones: function () {
        items
        .filter((items) => items.category.includes("Headphones"))
        .forEach((items) => {
            DOMSelectors.box.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <p>Price: ${items.cost}</p>
                </div>
                `
            );
        });
    },


}
    
createCards.create(items);

