# Week 16 Review

Disclaimer: I (Christopher) wrote this as a summary and review to help me study for this upcoming test. You're not allowed to use these notes during the upcoming test. This is only to help you study for the test.

## The Broad Strokes

### Synch and Asynch

Synchronous execution is when commands are executed one after another.

Asynchronous execution is when the commands need not be executed in the order they are listed. The classic example that we're already familiar with is `timeout()`, in which we provide a callback function to be executed along with a time in ms after which the callback should be executed. Consider the following:

```
console.log("a")
timeout(() => console.log("b"), 1000)
console.log("c")
```
In this block of code, `"a"` and `"c"` will rapidly be printed into the console one after another, then there will be a one second pause, then `"b"` will be printed.

### APIs

We were introduced to asynch using timeouts because it's easy to wrap your head around them. The thing that will be much more relevent to us in our future jobs will be API calls. And API call is when you ask a different computer for data. (aside: when you access a server on your own computer using localhost:5000, it's like your computer is treating itself like an external computer. It's still much slower than the code on your own computer)

When you fire off an API call, it will come back pretty quick, *but not instantly*. The code you execute locally on your own computer is similarly *not instant*, but is order of magnitudes faster than the API. That means when we make an API call (for example using fetch()) we can't just keep chuging along, since it will take too long for the data to get back to us. We need some way to wait for the data to get back to us before we continue.

### Promises

The promise is the tool we use to overcome this problem.

I think about this using the lay definition. "I promise that I am going to pick you up from the grocery store." Picking you up from the grocery store is the action that you hope I'm going to do soon. My promise to you is a series of words that assures you that I am going to do it. The promise is not the action itself, the promise "wraps around" the action, which takes place at a later time.

In JavaScript, a promise is an object. A promise "wraps around" a callback function named the executor. The executor is the function you want to run, and the promise wraps around it to help you handle it.

Why does a promise need to wrap an executor? For synchronous code, it doesn't, since synch code executes predictibly line after line. Asynch code might take a bit to come back to you. For example:

```
let a;
a = 4;
console.log(a);
```

What does this code above print? I'm not going to blow your mind by telling you it logs `4` into the console.

Now consider the following code. This uses setTimeout to simulate an example API call (perhaps using fetch()) that takes 1 milisecond to get the data and it equal to the variable.

```
let a;
setTimeout(() => a = 4, 1)
// Only one milisecond!!!
console.log(a)
```

Even though it only took a milisecond, that was still fast enough to perform the `console.log()` before the variable `a` is set to `4`. Let's prove to ourselves that this makes sense with a slight modification:

```
let a;
setTimeout(() => a = 4, 1)
// Predict: what will happen to this code? What does "2" represent?
setTimeout(() => console.log(a), 2)
```

### Broken Promises

Although `setTimeout()` won't even fail on its own, API calls can absolutely fail. What if your internet cuts out? What if the server is overloaded? A promise isn't just a way to handle asynch behavior, it's a way of handling a request that doesn't end up the way you expected it to.

There are two ways we can deal with unexpected behavior. Either with `.catch()` or with `try/catch` blocks. We will discuss both later.

## Code Examples

### Promises, Phase 1

Look in the file named `phase_01.js`. Do not run this code yet. Read this code *carefully* and answer the following questions:

1. Identify the promises in this block of code.
2. Identify the executors in this block of code.
3. Explain why line `17` doesn't read ` const result = await myPromise();`
4. Write down the order each of the `console.log()` messages will be read out into chat.
5. Write down the intervals of time between each of the `console.log()` messages.
6. Indicate exactly how long after executing this code will the message `Done with two!` be printed into the console. Is it instant? Two second? Four seconds? Soemthing else?

Finally, execute this code using `node phase_01.js`. Did your prediction match your expectation? If there was a discrepancy between your prediction and what you observed, then verbalize it because you're certianly not the only one.

### Promises, Phase 2

Look in the file named `phase_02.js`. Do not run this code yet. This file is similar, but not identical. Read this code *carefully* and answer the following questions:

1. What is different about phase 1 compared to phase 2?
2. What is the data type returned by the functions defined on lines 2 and 12?
3. Why does phase 2 line 23 have parentheses, contrasted with line 17 from phase 1? What effect does this have?
4. Identify the executors in this block of code.
5. Write down the order each of the `console.log()` messages will be read out into chat.
6. Write down the intervals of time between each of the `console.log()` messages.
7. Indicate exactly how long after executing this code will the message `Done with two!` be printed into the console. Is it instant? Two second? Four seconds? Soemthing else?

Finally, execute this code using `node phase_02.js`. Did your prediction match your expectation? Once again, if there was a discrepancy between your prediction and what you observed, then verbalize it now.

### Contrast Phase 1 and Phase 2

Now, let's reflect on the difference between phase 1 and phase 2. When exactly did the callback inside the promise (the executor) being to be executed? It beings to execute *as soon as the promise object comes into existance*. We don't wait until `phase_01.js line 17 or 19` -- those are just markers telling us to wait until that code finishes. Instead, that code beings to executed as soon as the promise object is initialized on `phase_01.js line 2 and 9`. Lines `17` and `19` just tell us to chill until they're done.

On the other hand, `phase_02.js` works completely differently. We have wrapped functions around the promises, and those functions are not executed until much later in the code. Since the promise inside is not created until the function is executed, that means the timeout inside the promise doesn't start until the function is called. The timing is completely different!

### Phase 3, Await and .then()

There are two different ways to approach promises. You can use either one, and either one gets you to the same place. I prefer to use `.then()` chaining because it makes more procedural sense to me, but using `await` is without a dobut cleaner. Whichever one you choose to use, they're both just promises.

Take a look in the file `phase_03.js`. There is a function named `getData()` which simulates an API call. It returns a promise, which contains within it code to double the input variable after one second. Write two functions that handle the "server"'s promise: one using `await`, and one using `.then()`.

### Phase 4, Promise Chaining and Promise.all()

### Phase 5, Promises and reject()

### Phase 6, fetch()
