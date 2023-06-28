// function
function setCount(event) {
    // event.target is the icon if you click on reset button
    let btn = event.target.id;
    if (event.target.nodeName !== "BUTTON") btn = event.target.closest("button").id;
    switch(btn){
        case "upButton":
            count.up();
            break;
        case "resetButton":
            count.reset();
            break;
        case "downButton":
            count.down();
            break;
        default:
            return;
    }
    countWindow.innerHTML = count.get();
    window.localStorage.setItem("count", count.get());
}
class Counter {
    constructor(value = 0){
        this.count = parseInt(value);
    }
    up() {
        this.count++;
    }
    down() {
        this.count--;
    }
    reset() {
        this.count = 0;
    }
    get() {
        return this.count;
    }
}
let countWindow = document.querySelector("#count");
let container = document.querySelector("#buttonContainer");
let count = new Counter(window.localStorage.getItem("count"));
container.addEventListener("click", setCount);
container.addEventListener("dblclick", setCount);

//# sourceMappingURL=index.b526a910.js.map
