class Graph {
    constructor() {
        this.adjecencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjecencyList.has(vertex)) {
            this.adjecencyList.set(vertex, new Set())
        }
    }

    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        this.adjecencyList.get(vertex1).add(vertex2)
        this.adjecencyList.get(vertex2).add(vertex1)
    }

    removeVertex(vertex) {
        if (!this.adjecencyList.has(vertex)) {
            return 'not Available'
        }
        for (adjecencyVertex of this.adjecencyList.get(vertex)) {
            this.adjecencyList.get(adjecencyVertex).delete(vertex)
        }
        this.adjecencyList.delete(vertex)
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjecencyList.has(vertex1) && this.adjecencyList.has(vertex2)) {
            this.adjecencyList.get(vertex1).delete(vertex2)
            this.adjecencyList.get(vertex2).delete(vertex1)
        }
    }

    hasEdge(vertex1, vertex2) {
        return this.adjecencyList.has(vertex1) && this.adjecencyList.get(vertex1).has(vertex2)
    }

    dfs(start) {
        const visited = new Set()
        const result = []


        function dfsRecursive(vertex) {
            visited.add(vertex)
            result.push(vertex)
            for (let adjacentVertex of this.adjecencyList.get(vertex)) {
                if (!visited.has(adjacentVertex)) {
                    dfsRecursive(adjacentVertex)
                }
            }
        }

        dfsRecursive(start)
        return result
    }
    bfs(start) {
        const queue = [start]
        const visited = new Set()
        const result = []

        visited.add(start)

        while (queue.length > 0) {
            const curr = queue.shift()
            result.push(curr)

            for (let adjacentVertex of this.adjecencyList.get(curr)) {
                if (!visited.has(adjacentVertex)) {
                    visited.add(adjacentVertex)
                    queue.push(adjacentVertex)
                }
            }
        }
        return result
    }

    display() {
        for (let [vertex, adjacentVertex] of this.adjecencyList) {
            console.log(`${vertex} => ${[...adjacentVertex]}`);
        }
    }

    hasCycle() {
        const visited = new Set();
        for (let vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex) && this.detectCycle(vertex, visited, null)) {
                return true;
            }
        }
        return false;
    }

    detectCycle(vertex, visited, parent) {
        visited.add(vertex);
        for (let adjacentVertex of this.adjacencyList.get(vertex)) {
            if (!visited.has(adjacentVertex)) {
                if (this.detectCycle(adjacentVertex, visited, vertex)) {
                    return true;
                }
            } else if (adjacentVertex !== parent) {
                return true;
            }
        }
        return false;
    }

}


const graph = new Graph()

graph.addEdge(1, 2)
graph.addEdge(1, 3)
graph.addEdge(2, 4)
graph.addEdge(3, 4)
graph.addEdge(3, 7)
graph.addEdge(4, 6)
graph.addEdge(4, 5)
// console.log(graph.dfs(1));
console.log(graph.detectCycle());