/*
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
*/

var WordDictionary = function() {
  this.root = {};
};

// Time: O(W) where W is length of word
// Space: O(1)
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;
  for (let c of word) {
      if (!node[c]) node[c] = {};
      node = node[c];
  }
  node.isWord = true;
};

// Time: O(N) N is number of nodes in trie
// Space: O(H) Height of call stack from recursion
WordDictionary.prototype.search = function(word) {

  const searchInWord = (word, idx, node) => {
      if (idx === word.length) return node.isWord === true;

      if (word[idx] === '.') {
          for (let key in node) {
              if (searchInWord(word, idx + 1, node[key])) return true;
          }
      } else {
          let newNode = node[word[idx]];
          if (newNode) return searchInWord(word, idx + 1, newNode);
      }

      return false;
  }

  return searchInWord(word, 0, this.root);
};