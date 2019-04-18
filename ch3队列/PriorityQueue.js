
function PriorityQueue(){
    var items = [];

    function QueueElement(element,priority){
        this.element = element;
        this.priority = priority;
    }

    // 入队列
    this.enqueue = function(element,priority){
        var queueElement = new QueueElement(element,priority);
        if(this.isEmpty()){
            items.push(queueElement);
        }else{
            var added = false;
            for(var i=0;i<items.length;i++){
                if(queueElement.priority < items[i].priority){
                    items.splice(i,0,queueElement);// 插入元素
                    added = true;
                    break;
                }
            }
            // 新添加元素的 priority比队列中所有元素的priority 大 (放在队尾)
            if(!added){
                items.push(queueElement);
            }
        }

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
        items.forEach(function(item){
            console.log(item);
        })
        
    }

}
