// function
function setCount(event) {
    switch(event.target.id){
        case "upButton":
            count.innerHTML = parseInt(count.innerHTML) + 1;
            break;
        case "resetButton":
            count.innerHTML = 0;
            break;
        case "downButton":
            count.innerHTML = parseInt(count.innerHTML) - 1;
            break;
        default:
            return;
    }
}
let count = document.querySelector("#count");
let container = document.querySelector("#buttonContainer");
container.addEventListener("click", setCount);

//# sourceMappingURL=index.9c62f88a.js.map
