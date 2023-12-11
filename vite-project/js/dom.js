const DOMSelectors = {
    change: document.getElementById("change-btn"),
    macbooks: document.getElementById("macbook-btn"),
    ipads: document.getElementById("ipad-btn"),
    iphones: document.getElementById("iphone-btn"),
    imacs: document.getElementById("imac-btn"),
    headphones: document.getElementById("headphone-btn"),
    container: document.getElementById("container")
};


DOMSelectors.change.addEventListener("click", function () {
    if(document.body.classList.contains("cool")) {
        document.body.classList.add("warm");
        document.body.classList.remove("cool");
    } else{
        document.body.classList.add("cool");
        document.body.classList.remove("warm");
    }

    if(document.inner.classList.contains("cool")) {
        document.inner.classList.add("warm");
        document.inner.classList.remove("cool");
    } else{
        document.inner.classList.add("cool");
        document.inner.classList.remove("warm");
    }
});

export {DOMSelectors};





