async function mysteryOrder() {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("When does this print?");
      resolve("Done with one!");
    }, 2000)
  })

  const mySecondPromise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("When does this print?");
      resolve("Done with two!");
    }, 2000)
  })

  console.log("First")
  const result = await myPromise;
  console.log("Second")
  const result2 = await mySecondPromise;
  console.log("Third")
  console.log(result)
  console.log(result2)

}

mysteryOrder();
