class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
        return this;
    }

    addEdge(first, second) {
        this.adjacentList[first].push(second);
        this.adjacentList[second].push(first);
        return this;
    }

    showConnections() {
        for (let node in this.adjacentList) {
            console.log(`${node} --> ${this.adjacentList[node].join(" ")}`);
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph
    .addEdge("3", "1")
    .addEdge("3", "4")
    .addEdge("4", "2")
    .addEdge("4", "5")
    .addEdge("1", "2")
    .addEdge("1", "0")
    .addEdge("0", "2")
    .addEdge("6", "5");

myGraph.showConnections();
