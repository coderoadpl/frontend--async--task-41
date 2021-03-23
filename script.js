// this commented line will not work because top level async/await works only in modules
// await new Promise((resolve) => setTimeout(() => resolve(5), 3000))

// regular await works only inside async functions as below

const returnX = async function (x) {
    return x
}

console.log(returnX(5))

const returnXArrow = async (x) => {
    return x
}

console.log(returnXArrow(5))

const returnSumOfPromisesValues = (x) => {
    const promise5 = () => new Promise((resolve) => setTimeout(() => resolve(5), 3000))
    const promise10 = () => new Promise((resolve) => setTimeout(() => resolve(10), 3000))

    const allPromise = Promise.all([
        promise5(),
        promise10(),
    ])

    const sumPromise = allPromise.then((results) => results.reduce((r, el) => r + el, 0))

    return sumPromise
}

console.log(
    returnSumOfPromisesValues()
        .then((sum) => console.log('returnSumOfPromisesValues', sum))
)

const returnSumOfPromisesValuesAsync = async (x) => {
    const promise5 = () => new Promise((resolve) => setTimeout(() => resolve(5), 3000))
    const promise10 = () => new Promise((resolve) => setTimeout(() => resolve(10), 3000))

    const number5 = await promise5()
    const number10 = await promise10()

    return number5 + number10
}

console.log(
    returnSumOfPromisesValuesAsync()
        .then((sum) => console.log('returnSumOfPromisesValuesAsync', sum))
)