const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('End'), 5000)
})

console.log('In start')
promise.then((text) => console.log(text))
//or
promise.then(console.log)
//or
promise.then(
  (resolve) => setTimeout(() => console.log(resolve), 5000),
  (reject) => console.error(reject)
)