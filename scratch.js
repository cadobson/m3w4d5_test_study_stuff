let someJsonObject = {
  key: "value",
  antotherKey: "another value"
}

async function flipFlop() {

  const afterStringify = JSON.stringify(someJsonObject)

  console.log(afterStringify)

  const backToJsonAgain = JSON.parse(afterStringify)

  console.log(backToJsonAgain);
}
flipFlop()
