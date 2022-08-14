/**
 * This function simulates an API which sends data, has that
 * data processed by some external server, then sends the data
 * back after a delay.
 * @param {*} num
 * @returns A promise to return the input num by two, which will
 * resolve after one second.
 */
const getData = function (num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      num *= 2
      resolve(num);
    }, 1000)
  });
}

/* Write a function using await to send a number to the "server" using getData(),
waits for it to return, then prints it out.*/
async function solveUsingAwait(num) {

}

solveUsingAwait(1.2)

/* Write a function using .then() to send a number to the "server" using getData(),
waits for it to return, then prints it out.*/
async function solveUsingThenChain(num) {

}

solveUsingThenChain(1.3)
