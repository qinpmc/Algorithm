// HashTable  分离链接-针对重复的hashcode 采用链表处理

function HashTable() {
    var table = [];
    var ValuePair = function (key, value) {
        this.key = key;
        this.value = value;
        this.toString = function () {
            return "[" + this.key + "-" + this.value + "]";
        }
    }


    var loseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37;
    }

    this.put = function (key, value) {
        var position = loseHashCode(key);
        if (table[position] === undefined) {
            table[position] = new LinkedList();
        }
        table[position].append(new ValuePair(key, value))
    }

    this.get = function (key) {
        var position = loseHashCode(key);
        if (table[position] !== undefined) {
            var current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
            // 检查链表最后一个元素，因为最后一个元素的next 为undefined
            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;
    }

    this.remove = function (key) {
        var position = loseHashCode(key);
        if (table[position] !== undefined) {
            var current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }

        }
        return false
    }

    this.print = function () {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(i + ": " + table[i]);
            }
        }
    };

}
