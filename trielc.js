const Trie = function() {
    this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for(let letter of word){
        if(node[letter] == undefined){
            node[letter] = {};
        }
        node = node[letter];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    for(let letter of word){
        if(!node[letter]){
            return false;
        } else {
            node = node[letter];
        }
    }
    return node && node.isEnd == true;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for(let letter of prefix){
        if(!node[letter]){
            return false;
        } else {
            node = node[letter];
        }
    }
    return true;
};