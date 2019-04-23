// 二叉树

function BinarySearchTree(){
    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
    this.root = null;

    this.insert = function(key){
        var newNode = new Node(key);
        if(this.root ===null){
            this.root = newNode;
        }else{
            insertNode(this.root,newNode);
        }
    }

    var insertNode = function(node,newNode){
        if(node.key>newNode.key){
            if(node.left===null){
                node.left = newNode;
            }else{
                insertNode(node.left,newNode)
            }
        }else{
            if(node.right===null){
                node.right = newNode;
            }else{
                insertNode(node.right,newNode)
            }
        }
    }

    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(this.root,callback)
    }

    var inOrderTraverseNode = function(node,callback){
        if(node!==null){
            inOrderTraverseNode(node.left,callback);
            callback(node);
            inOrderTraverseNode(node.right,callback);
        }
    }

    this.preOrderTraverse = function(callback){
        preOrderTraverseNode(this.root,callback)
    }

    var preOrderTraverseNode = function(node,callback){
        if(node!==null){
            callback(node);
            preOrderTraverseNode(node.left,callback);
            preOrderTraverseNode(node.right,callback);
        }
    }

    this.postOrderTraverse = function(callback){
        postOrderTraverseNode(this.root,callback)
    }

    var postOrderTraverseNode = function(node,callback){
        if(node!==null){ 
            postOrderTraverseNode(node.left,callback);
            postOrderTraverseNode(node.right,callback);
            callback(node);
        }
    }

    this.min = function(){
        return minNode(this.root);
    }

    var minNode = function(node){
        if(node){
            while(node && node.left){
                node = node.left;
            }
            return node.key;
        }
        return null;
    }


    this.max = function(){
        return maxNode(this.root);
    }

    var maxNode = function(node){
        if(node){
            while(node && node.right){
                node = node.right;
            }
            return node.key;
        }
        return null;
    }

    this.search = function(key){
        return searchNode(this.root,key)
    }
    var searchNode = function(node,key){
        if(node===null){
            return false;
        }

        if(node.key===key){
            return true;
        }
        if(node.key>key){
            return searchNode(node.left,key)
        }else{
            return searchNode(node.right,key)
        }
    }

    this.remove = function(key){
        removeNode(this.root,key);
    }

    function findNextLevelLeftOrRight(node){ //查找 node 下级节点的子节点：下级节点的右子节点或下级节点的左子节点
        var tempNode = node.left;
        var aux = null;
        if(tempNode.right!==null){ // 下级左节点的子右节点存在
            aux = tempNode.right;
            return [aux,"left"];
        }else{
            tempNode = node.right;
            if(tempNode.left!==null){ // 下级右节点的子左节点存在
                aux = tempNode.left;
                return [aux,"right"];
            }
        }
        return null;
        
    }
    let that = this;
    var removeNode = function(node,key){
        if(node===null){
            return null;
        }
         
        if(node.key>key){
            removeNode(node.left,key)
        }else if(node.key<key){
            removeNode(node.right,key)
        }else{ //要remove的key 和 node的key相等
            if(node.left===null && node.right===null){ //只有一个叶节点
                node =null;
                return node
            }
            if(node.left===null ){
                node = node.right;
                return node;
            }
            if(node.right===null ){
                node = node.left;
                console.log(that);
                return node;
                
            }
            // 有2个子节点--即有 左右 子节点

            var auxAry = findNextLevelLeftOrRight(node);
            if(auxAry){ // 查找到下级节点的右子节点或下级节点的左子节点
                node.key = auxAry[0].key;
                var flag = auxAry[1];
                if(flag==="left"){
                    removeNode(node.left,node.key)
                }else {
                    removeNode(node.right,node.key)
                }
            } else{ // 未查找到下级节点的右子节点或下级节点的左子节点，此时没有合适的子节点替换要删除的node
                node.key = node.left.key;
                removeNode(node.left,node.key)
            }

        }
    }

}
