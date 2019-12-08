import {
    createElement
} from "./elements.js";
import {
    diff
} from "./diff.js";
let virtualdom1 = createElement("ul", {
    class: "list"
}, [
    createElement("li", {
        class: "item"
    }, ["1"]),
    createElement("li", {
        class: "item"
    }, ["2"]),
    createElement("li", {
        class: "item"
    }, ["3"])
]);

let virtualdom2 = createElement("ul", {
    class: "list-new"
}, [
    createElement("li", {
        class: "item"
    }, ["a"]),
    createElement("li", {
        class: "item"
    }, ["2"]),
    createElement("li", {
        class: "item"
    }, ["c"])
]);
const patchs = diff(virtualdom1, virtualdom2);
console.log(patchs);