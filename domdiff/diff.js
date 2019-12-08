import _ from "./utile.js";

let paths = Object.create(null);
let globalIndex = 0;

function diff(oldTree, newTree) {
    dfswalk(oldTree, newTree, globalIndex)
    return paths;
}

function dfswalk(oldTree, newTree, index) {
    let currentPaths = [];
    if (!newTree) {
        currentPaths.push({
            type: 'REMOVE',
            index
        })
    } else if (_.isString(oldTree)) {
        if (_.isString(newTree) && oldTree !== newTree) {
            currentPaths.push({
                type: 'TEXT',
                text: newTree
            })
        }
    } else if (oldTree.type == newTree.type) {
        diffChildren(oldTree.children, newTree.children, globalIndex)
    }
    if (currentPaths.length > 0) {
        paths[index] = currentPaths;
    }
}

function diffProps() {

}

function diffChildren(oldchildrens, newchildrens) {

    oldchildrens.forEach((child, ids) => {
        dfswalk(child, newchildrens[ids], ++globalIndex)
    });
}
export {
    diff
}