/*
There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.

You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.

Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.

A string s is lexicographically smaller than a string t if at the first letter where they differ, the letter in s comes before the letter in t in the alien language. If the first min(s.length, t.length) letters are the same, then s is smaller if and only if s.length < t.length.

Example:
Input: words = ["wrt","wrf","er","ett","rftt"]
Output: "wertf"
*/



var alienOrder = function(words) {
  let result = '';

  // Create adjacency list & Degrees List
  let graph = {};
  let degrees = {};
  for (let i = 0; i < words.length - 1; i++) {
    let s = words[i];
    let t = words[i + 1];
    let idx = 0;
    while (s[idx] === t[idx] && idx < s.length) {
      idx++;
    }
    if (idx === s.length && s.length === t.length) {
      graph[s[idx - 1]] = [];
      degrees[s[idx - 1]] = degrees[s[idx - 1]] || 0;
      continue;
    }
    if (idx === s.length && s.length > t.length) return '';
    if (idx === s.length && s.length < t.length) continue;
    if (graph[s[idx]]) {
      graph[s[idx]].push(t[idx]);
    } else {
      graph[s[idx]] = [t[idx]];
    }
    if (graph[t[idx]] === undefined) graph[t[idx]] = [];

    degrees[s[idx]] = degrees[s[idx]] || 0;
    degrees[t[idx]] = ++degrees[t[idx]] || 1;
  }
  // Queue
  let queue = [];
  for (var key in degrees) {
    if (degrees[key] === 0) queue.push(key);
  }

  while (queue.length > 0) {
    let letter = queue.shift();
    result += letter;
    for (let i = 0; i < graph[letter].length; i++) {
      let neighbor = graph[letter].pop();
      degrees[neighbor]--;
      if (degrees[neighbor] === 0) queue.push(neighbor);
    }
  }

  return result;
};