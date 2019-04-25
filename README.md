# Algo Rithms Challenge // Absolute value difference

- [1. Getting started](#1-getting-started)
- [2. Challenge](#2-challenge)
  - [2.1. Examples](#21-examples)
  - [2.2. Testing your solution](#22-testing-your-solution)
  - [2.3. Submitting your solution](#23-submitting-your-solution)

## 1. Getting started
  `github.com/F-Smith/algo-max-min-arr-diff`

Fork this repo and then `git clone` your forked repo to your computer.
Once you're happy with your solution, `git push` and submit a pull request at
`github.com/F-Smith/algo-max-min-arr-diff`.

## 2. Challenge
Write a function called `maxAndMin` that accepts 2 arrays of **positive integers**. The function should return an array containing the largest and smallest difference between a number in array one and a number in array two.

e.g. `maxAndMin([2,5],[3,6]) ===> [4,1]`

### 2.1. Examples

```js
Input               =>                  Output
---------------------------------------------------------------
maxAndMin([21,7,15,8],[3,10,6])       === [18,1]
maxAndMin([20],[5])                   === [15,15]
maxAndMin([4,10,5],[4,10,5])          === [6,0]
maxAndMin([6,7,8,9,10],[1,2,3,4,5])   === [9,1]
```

### 2.2. Testing your solution
To test your solution, run `npm i` in the root directory
and then run `npm t` to run the automated tests.

### 2.3. Submitting your solution

To submit your solution:

1. If you're working on a forked repo, push your changes to your forked repo and submit a pull request to this repo.
