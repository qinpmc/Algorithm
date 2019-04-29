function Queue(){
    var items = [];

    // 入队列
    this.enqueue = function(element){
        items.push(element);
    }

    // 出队列
    this.dequeue = function(){
        return items.shift()
    }

    //查看队列头
    this.front = function(){
        return items[0]
    }

    this.isEmpty = function(){
        return items.length == 0;
    }

    this.clear = function(){
        items = []
    }

    this.size = function(){
        return items.length;
    }
    
    this.print = function(){
        console.log(items.toString());
    }

}
