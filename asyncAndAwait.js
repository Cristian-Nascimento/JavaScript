//IIFE()

(async function () {
  console.log('Hello Word!')
}) // return promise
  //or

(function test () {
  return new Promise((resolve, reject) => {
    resolve()
  }) // return promise
})

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('End'), 1000)
})

const test = async function () {
  console.log('In start')

  const text = await promise
  console.log(text)
  //or
  console.log( await promise )
  //or
  try{
    const resolve = await promise
    setTimeout(() => console.log(resolve), 1000)
  } catch (reject) {
    console.error(reject)
  }
}

test()

const coinFlip = new Promise ((resolve, reject) => Math.random() > 0.5 ? resolve('cara') : reject ('coroa'))

const test2 = async () => {
  try {
    const resolved = await coinFlip
    console.log(resolved)
  } catch (error) {
    console.log(error)
  }
}

//or
const test3 = async () => {
  const result = await coinFlip.catch((error) => error )
  console.log(result)
}

test2()
test3()
