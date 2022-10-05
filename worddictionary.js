var WordDictionary = function() {
    this.root = new TrieNode();
};

function TrieNode(){
    return {
        data: {},
        isEnd: false
    };
}

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    for(let letter of word){
        node.data[letter] = node.data[letter] || new TrieNode();
        node = node.data[letter];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return helper(this.root, word, 0);
};

function helper(root, word, index){
    if(index == word.length){
        return root.isEnd;
    }
    if(word[index] == '.'){
        return Object.keys(root.data).some((key) => helper(root.data[key], word, index + 1));
    }
    if(root.data[word[index]] === undefined){
        return false;
    }
    return helper(root.data[word[index]], word, index + 1);
}