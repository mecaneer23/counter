function addOne(counter) {
    counter.innerHTML = parseInt(counter.innerHTML) + 1
}

function subtractOne(counter) {
    counter.innerHTML = parseInt(counter.innerHTML) - 1
}

function addCounter() {
    let original = document.querySelector(".counter");
    let container = document.getElementById("container");
    const newNode = original.cloneNode(true);
    newNode.children[0].children[0].placeholder = "Counter " + (container.children.length + 1);
    newNode.children[0].children[0].innerHTML = "";
    newNode.children[1].innerHTML = "0";
    container.append(newNode);
}

function deleteCounter(counter) {
    let container = document.getElementById("container");
    if (container.children.length == 1) {
        alert("At least one counter must remain.")
        return;
    }
    container.removeChild(counter);
}