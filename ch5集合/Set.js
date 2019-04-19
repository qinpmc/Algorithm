
// Set

function Set(){
    var items = {};
    this.add = function(value){
        if(!this.has(value)){
            items[value] = value;
            return true;
        }
        return false;
    }

    this.remove = function(value){
        if(this.has(value)){
            delete items[value];
            return true;
        }
        return false;
    }

    this.has = function(value){
        return items.hasOwnProperty(value);
    }

    this.clear = function(){
        items = {}
    }

    this.size = function(){
        return Object.keys(items).length;
    }

    this.values = function(){
        return Object.keys(items);
    }

    this.getItems = function(){
        return items;
    }

    // 合并集合，相同的部分去除
    this.union = function(otherSet){
        var unioSet = new Set();
        var values = this.values();

        for(var i=0;i<values.length;i++){
            unioSet.add(values[i]);
        }

        values = otherSet.values();

        for(var i=0;i<values.length;i++){
            unioSet.add(values[i]);
        }

        return unioSet;
    }

    this.intersection = function(otherSet){
        var intersectSet = new Set();
        var values = this.values();

        for(var i=0;i<values.length;i++){
            if(otherSet.has(values[i])){
                intersectSet.add(values[i]);
            }
        }
        return intersectSet;

    }

    this.difference = function(otherSet){
        var differSet = new Set();
        var values = this.values();
 
        for(var i=0;i<values.length;i++){
            if(!otherSet.has(values[i])){
                differSet.add(values[i])
            }
        }
        return differSet;

    }

    // 判断set 是否是另一个set 的子集
    this.subset = function(otherSet){
        if(this.size()>otherSet.size()){
            return false;
        }
        var values =  this.values();
        for(var i=0;i<values.length;i++){
            if(!otherSet.has(values[i])){
                return false;
            }
      
        }
        return true;

    }

}