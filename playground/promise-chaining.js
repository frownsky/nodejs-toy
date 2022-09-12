require('../src/db/mongoose')
const User = require('../src/models/user')

// Find one user by id and update: Promise Chaining Version
// User.findByIdAndUpdate('631c9da58cb095c634300d0c', { name: "Jordan", email: "jordan@mail.com" } ).then((user) => {
//     console.log(user)
//     // return User.countDocuments({  name: "Jordan", email: "re@mail.com" }) 
//     return User.countDocuments({  name: "Jordan", email: "jordan@mail.com" })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

// Find one user by id and update: Async/Await version 
const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('631c9da58cb095c634300d0c', 2).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})

