class Graph{
    constructor() {
        this.adjecencyList = {}
    }

    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex + '->' + [...this.adjecencyList[vertex]]);
        }
    }

    hasEdge(vertex1,vertex2){
        return (
            this.adjecencyList[vertex1].has(vertex2) &&
            this.adjecencyList[vertex2].has(vertex1) 
        )
    }

    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjecencyList[vertex]){
            return 
        }
        for(let adjecentVertex of this.adjecencyList[vertex]){
            this.removeEdge(vertex,adjecentVertex)
        }
        delete this.adjecencyList[vertex]
    }

    hasCycle(vertex, visited = new Set(), parent = null) {
        visited.add(vertex);
    
        for (let ele of this.adjecencyList.get(vertex)) {
          if (!visited.has(ele)) {
            if (this.hasCycle(ele, visited, vertex)) {
              return true;
            }
          } else if (ele !== parent) {
            return true;
          }
        }
    
        return false;
      }

}


const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')

graph.addEdge('A','B')
graph.addEdge('B','C')
graph.addEdge('C','A')
graph.addEdge('D','A')

graph.display()
// console.log(graph.hasEdge('A','B'));
// graph.removeVertex('B')
// graph.display()
// console.log(';hdfshgdvsgkhvdskhbdsh',graph.hasCycle())
// all the methods in this has a constant time comlexity expect of removeVertex method which has a linear time complexity