function is_unique(str){ // is_unique(),If the field with the same value exists it validates as false.
   let obj = {}; 
  for (let i = 0; i < str.length; i++) { 
    let char = str[i];
    if (obj[char]) return false;
    obj[char] = true;
  }
  return true;
}

console.log(is_unique("Monday")); // true
console.log(is_unique("Moonday")); // false

// O(n)



// Extra 
function findLongestWordLength(str) {
  // split the string into individual words
  const words = str.split(" ");

  // words only has 1 element left that is the longest element
  if (words.length == 1) {
    return words[0].length;
  }

  // if words has multiple elements, remove the first element
  // and recursively call the function
  return Math.max(
    words[0].length,
    findLongestWordLength(words.slice(1).join(" "))
  );
}

findLongestWordLength("hi","hello")
//O(n)