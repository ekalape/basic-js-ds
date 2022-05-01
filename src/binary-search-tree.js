const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    /*  parent=null; */
    rootNode = null;

    constructor() {
        this.rootNode = null;
    }

    root() {
        return this.rootNode;
    }
    add(data) {
        let n = new Node(data);
        if (this.rootNode === null) {
            this.rootNode = n;
        } else {
            checkNode(this.rootNode, n);
        }

        function checkNode(current, n) {
            if (n.data < current.data) {
                if (current.left === null) {
                    current.left = n;
                } else {
                    checkNode(current.left, n);
                }
            } else {
                if (current.right === null) {
                    current.right = n;
                } else {
                    checkNode(current.right, n);
                }
            }
        }
    }

    has(data) {
        let node = this.find(data);
        if (node === null) return false;
        else return true;
    }

    find(data) {
        if (this.rootNode === null) return null;
        let node = this.rootNode;
        if (node.data === data) return node;
        else {
            while (node)
                if (node.data === data) return node;
                else {
                    if (data < node.data) {
                        node = node.left;
                    } else {
                        node = node.right;
                    }
                }
        }
        return null;
    }
    remove(data) {
        this.rootNode = deleteNode(this.rootNode, data);

        function deleteNode(node, data) {
            if (node === null) return null;
            else if (data < node.data) {
                node.left = deleteNode(node.left, data);
                return node;
            } else if (data > node.data) {
                node.right = deleteNode(node.right, data);
                return node;
            } else {
                if (node.left === null && node.right === null) node = null;
                else if (node.left === null) {
                    node = node.right;
                    return node;
                } else if (node.right === null) {
                    node = node.left;
                    return node;
                } else {
                    let min = node.right;
                    while (min.left != null) {
                        min = min.left;
                    }
                    node.data = min.data;
                    node.right = deleteNode(node.right, min.data);
                    return node;
                }
            }
        }
    }
    min() {
        let node = this.rootNode;
        if (node === null) return null;
        while (node.left != null) {
            node = node.left;
        }
        return node.data;
    }

    max() {
        let node = this.rootNode;
        if (node === null) return null;
        while (node.right != null) {
            node = node.right;
        }
        return node.data;
    }
}

module.exports = {
    BinarySearchTree,
};