function addOne(counter) {
    counter.value = parseInt(counter.value) + 1
}

function subtractOne(counter) {
    counter.value = parseInt(counter.value) - 1
}
function addCounters() {
    let original = document.querySelector(".counter");
    let container = document.getElementById("container");
    let howMany = parseInt(document.getElementById("how-many").value);
    if (howMany >= 0) {
        for (let i = 0; i < howMany; i++) {
            const newNode = original.cloneNode(true);
            newNode.children[0].children[0].placeholder = "Counter " + (container.children.length + 1);
            newNode.children[0].children[0].value = "";
            newNode.children[1].value = "0";
            container.appendChild(newNode);
        }
        return;
    }
    if (container.children.length > -howMany) {
        for (let i = 0; i < -howMany; i++) {
            container.removeChild(container.children[container.children.length - 1]);
        }
    }
}
function deleteCounter(counter) {
    let container = document.getElementById("container");
    if (container.children.length > 1) {
        container.removeChild(counter);
    }
}