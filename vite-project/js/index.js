const DOMSelectors = {
    change: document.getElementById("change"),
    macbooks: document.getElementById("macbook-btn"),
    ipads: document.getElementById("ipad-btn"),
    iphones: document.getElementById("iphone-btn"),
    imacs: document.getElementById("imac-btn"),
    headphones: document.getElementById("heaphone-btn"),
    box: document.querySelector("#container")
};


export {DOMSelectors};

DOMSelectors.change.addEventListener("click", function () {
    if(document.body.classList.contains("cool")) {
        document.body.classList.add("warm");
        document.body.classList.remove("cool");
    } else{
        document.body.classList.add("cool");
        document.body.classList.remove("warm");
    }
});





