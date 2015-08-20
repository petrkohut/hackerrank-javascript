function buildGraphFromInput(input) {
    var graph = { vertices: [{edges: [], visited: false, children: 0}] };

    var lines = input.split('\n');
    var childrenOfVertices = lines[0].split(' ')[0];
    
    for (var i = 1; i < childrenOfVertices; i++) {
        graph.vertices.push({edges: [], visited: false, children: 1});
    }
    for (var i = 1; i < childrenOfVertices; i++) {
        v1 = lines[i].split(' ')[0];
        v2 = lines[i].split(' ')[1];
        graph.vertices[v1 - 1].edges.push(v2);
        graph.vertices[v2 - 1].edges.push(v1);
    }
    return graph;
}

function countCuts(graph) {
    var cuts = 0;
    for (var i = 0; i < graph.vertices.length; i++) {
        if (graph.vertices[i].children % 2 === 0) {
            cuts++;
        }
    }
    return cuts;
}

function processData(input) {
    var graph = buildGraphFromInput(input);
    var stack = [1];

    var children = 0;
    while (item = stack[stack.length - 1]) {
        var vertice = graph.vertices[item - 1];
        vertice.visited = true;
        if (children) {
            vertice.children += children;
            children = 0;
        }

        var childFound = false;
        for (var i = 0; i < vertice.edges.length; i++) {
            if (!graph.vertices[vertice.edges[i] - 1].visited) {
                stack.push(vertice.edges[i]);
                childFound = true;
                break;
            }
        }
        if (!childFound) {
            children = vertice.children;
            stack.pop();
        }
    }

    console.log(countCuts(graph));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});