async function mysteryOrder() {
  const wrapper1 = function () {
    const myPromise = new Promise((resolve) => {
      setTimeout(() => {
        console.log("When does this print?");
        resolve("Done with one!");
      }, 2000)
    })
    return myPromise;
  }

  const wrapper2 = function () {
    const mySecondPromise = new Promise((resolve) => {
      setTimeout(() => {
        console.log("When does this print?");
        resolve("Done with two!");
      }, 2000)
    })
    return mySecondPromise;
  }

  console.log("First")
  const result = await wrapper1();
  console.log("Second")
  const result2 = await wrapper2();
  console.log("Third")
  console.log(result)
  console.log(result2)

}

mysteryOrder();
