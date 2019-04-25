// Valid parentheses (20 mins)

// CHALLENGE

// Write a function called `maxAndMin` that accepts
// 2 arrays of positive integers. The function
// should return an array containing the largest
// and smallest difference between a number in array
// one and a number in array two.
// e.g. `maxAndMin([2,5],[3,6]) ===> [4,1]`

// EXAMPLES

// maxAndMin([21,7,15,8],[3,10,6]) === [18,1]
// maxAndMin([20],[5]) === [15,15]
// maxAndMin([4,10,5],[4,10,5]) === [6,0]
// maxAndMin([6,7,8,9,10],[1,2,3,4,5]) === [9,1]

// TESTING YOUR SOLUTION

// To test your solution, run 'npm install' in the root directory
// and then run 'npm test' to run the automated tests.

// SUBMITTING YOUR SOLUTION

// When done, make sure you're working on a forked repo, push your
// changes to your forked repo and submit a pull request.

function maxAndMin (parens) {
  // your code here. Enjoy the music.
  const [arr1, arr2] = [...arguments];

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return 'Please enter two arrays.';
  if (Math.min(...arr1) < 0 || Math.min(...arr2) < 0) return 'Please enter positive integers only.';

  const diffs = [];

  arr1.forEach( function (el) {
    arr2.forEach( function (el2) {
      diffs.push(Math.max(el, el2) - Math.min(el, el2));
    });
  });

  diffs.sort( (a,b) => b-a);
  return [diffs[0], diffs[diffs.length-1]];

}

module.exports = maxAndMin;
