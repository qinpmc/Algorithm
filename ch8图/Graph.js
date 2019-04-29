
function Graph(){
    var vertices = [];
    var adjList = new Map();

    var initializeColor = function(){
        var color = [];
        for(var i=0;i<vertices.length;i++){
            color[vertices[i]] = 'white';
        }
        return color;
    }

    // 添加顶点
    this.addVertex = function(v){
        vertices.push(v);
        adjList.set(v,[]); //有以定点为key的map，存储边
    }

    // 添加边,接收2个定点
    this.addEdge = function(v,w){
        adjList.get(v).push(w);
        adjList.get(w).push(v);

    }

    this.bfs =function(v,callback){
        var color = initializeColor();
        var queue = new Queue();
        queue.enqueue(v);
        while(!queue.isEmpty()){
            var u = queue.dequeue();
            var neighbors = adjList.get(u);
            color[u] = 'grey';
            for(var i=0;i<neighbors.length;i++){
                var w = neighbors[i];
                if(color[w] ==='white'){
                    color[w] = "grey";
                    queue.enqueue(w);
                }
            }
            color[u] = "black";
            if(callback){
                callback(u)
            }
        }
    }

    

    this.toString = function(){
        var s='';
        for(var i=0;i<vertices.length;i++){
            s+=vertices[i]+' ->';
            var neighbors = adjList.get(vertices[i]);
            for(var j=0;j<neighbors.length;j++){
                s+=neighbors[j]+" ";
            }
            s+="\n";
        }
        return s;
    }
}