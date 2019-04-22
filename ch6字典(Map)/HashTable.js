// HashTable

function HashTable(){
    var table = [];

    var loseHashCode = function(key){
        var hash = 0;
        for(var i=0;i<key.length;i++){
            hash+=key.charCodeAt(i)
        }
        return hash %37;
    }

    this.put = function(key,value){
        var position = loseHashCode(key);
        table[position] = value
    }

    this.get = function(key){
        return table[loseHashCode(key)]
    }

    this.remove = function(ley){
        table[loseHashCode(key)] = undefined;
    }

    this.print = function () {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(i + ": " + table[i]);
            }
        }
    };

}
