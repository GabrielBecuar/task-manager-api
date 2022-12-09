require('../src/db/mongoose')
const Task= require('../src/models/task')

// Task.findByIdAndDelete('638e7d9bb0959a34887c1ca2').then((task)=>{
//     console.log(task)

//     return Task.countDocuments({completed: false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('638e7cfb3796870cd88a6348').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})