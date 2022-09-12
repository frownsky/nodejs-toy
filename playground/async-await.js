const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }
            resolve(a + b)
        }, 1000)
    })
}
  
const doWork = async () => {
    // return 'Alice'
    // throw new Error('Something went wrong')

    // 3 asynchronous process
    const sum = await add(20,-30)
    const sum2 = await add(sum, 40)
    const sum3 = await add(sum2, 50)
    return sum3
}

doWork().then((result) => {
    console.log('result',result)
}).catch((error) => {
    console.log('error',error)
})