
// 双向链表

function DbLinkedList(){

    var Node = function(element){
        this.element = element;
        this.next = null;
        this.previous = null;
    }

    var length = 0; // 长度
    var head = null; // 第一个节点
    var tail = null;
    this.append = function(element){
        var node = new Node(element),
            current;
        if(head === null){
            head = node;
            tail = node;
        }else{
            tail.next = node;
            node.previous = tail;
            tail = node;
        }
        length++; // 更新长度
    }

    this.insert = function(position,element){
        // 确保元素插在当前链表范围内
        if(position>=0 && position< length){ 
            var node = new Node(element); // 将插入的元素转为node 节点
            var current = head, // current 指针指向 head
            previous,
            index = 0;
            if(position ===0){ // 最开始没有head
                if(head ===null){
                    head = node;
                    tail = node;
                }else{  // 已有head
                    node.next = current;
                    current.previous = node;
                    head = node; // 将当前元素设为head
                }
     
            }else if(position == length){ // 插入到最后
                tail.next = node;
                node.previous = tail;
                tail = node;

            }else {
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;   
                node.previous = previous;         //  

                current.previous = node;
                previous.next = node;
                
            }
            length++;
            return true;
        }else{
            return false;
        }
    }

    this.indexOf = function(element){
        var current = head,
        index = 0;
        while(current){
            if(element===current.element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    this.removeAt = function(position){
        if(position>=0 && position< length){
            var current = head,
                previous,
                index = 0;
            if(position===0){ // 如果就是获取head
                head = current.next; // 将head重新指向下一个,注意，即使只有一个，此时head=null;
                if(length ===1){ //如果只有一个
                    tail = null;
                }else{
                    head.previous = null; // 将新的 head 的previous 置为null;
                }
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;   // previous  c(去掉的节点)  c.next
                current.next.previous = previous

            }
            length--;
            return current.element;
        }else{
            return null;
        }
    }

    this.remove = function(element){
        var index = this.indexOf(element);
        return this.removeAt(index);
    }


    this.isEmpty = function() {
        return length === 0;
    };

    this.size = function() {
        return length;
    };

    this.getHead = function(){
        return head;
    };

    this.toString = function(){

        var current = head,
            string = '';

        while (current) {
            string += current.element.toString()+" ";
            current = current.next;
        }
        return string;

    };

    this.print = function(){
        console.log(this.toString());
    };
}

