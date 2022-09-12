const add = (a, b) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(a + b)
      }, 2000)
    })
  }
  
  // Nested Promise - More Complex and Hard to Troubleshoot
  
  // add(1,2).then((sum)=>{
  //   console.log(sum)
  //   add(sum, 4).then((sum2) => {
  //     console.log(sum2)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // }).catch((error) => {
  //   console.log(error)
  // })
  
  // Promise Chaining
  
  add(10, 20).then((sum) => {
    console.log(sum)
    return add(sum, 40)
  }).then((sum2) => {
    console.log(sum2)
  }).catch((error) => {
    console.log(error)
  })