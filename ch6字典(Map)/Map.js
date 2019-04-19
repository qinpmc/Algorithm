// 字典 Dictionary 即Map

function Map(){
    var items = {};

    this.set = function(key,value){
        items[key] = value;
    }

    this.get = function(key){
        return items[key]
    }

    this.values = function(){
        var values = []
        for(var key in items){
            if(items.hasOwnProperty(key)){
                values.push(items[key]);
            }
        }
        return values;
    }

    this.keys = function(){
        var keys = [];
        for(var key in items){
            if(items.hasOwnProperty(key)){
                keys.push(key);
            }
        }
        return keys;
    }

    this.has = function(key){
        for(var key in items){
            if(items.hasOwnProperty(key)){
                return true
            }
        }
        return false;
    }

    this.clear = function(){
        items = {}
    }

    this.size = function(){
        return Object.keys(items).length;
    }

    this.getItems = function(){
        return items;
    }

}
