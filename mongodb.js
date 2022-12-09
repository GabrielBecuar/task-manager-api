// const mongodb = require ('mongodb')
// const MongoClient = mongodb.MongoClient


const {MongoClient,ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id.length)
// console.log(id.toHexString().length)


MongoClient.connect(connectionURL,{useNewUrlParser: true},(error, client)=>{
    if(error){
        return console.log('unable to connect to database')
    }


        //console.log('Connected correctly')  

    const db = client.db(databaseName)


    //Buscar un usuario
    //SEARCH
    //busca solo un usuario
    // db.collection('users').findOne({name:'Jen', age: 1}, (error, user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').findOne({_id:new ObjectID("638a710580fdff50c81e2049")}, (error, user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    //-----
    //busca varios usuarios
    // db.collection('users').find({age: 27}).toArray((error, users)=>{
    //     if(error){
    //         console.log('Unable to fetch')
    //     }

    //     console.log(users)
    // })

    //busca el numero de veces que se encuentra esos datos
    // db.collection('users').find({age: 27}).count((error, count)=>{
      

    //     console.log(count)
    // })

    //----------------

    // db.collection('tasks').findOne({_id:new ObjectID("638a64aff66b6233dcf4ac78")}, (error, task)=>{
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed:false }).toArray((error, tasks)=>{
    //     console.log(tasks)
    // })

 //-----------------------------------------------------------------------------------------   
 //ADD
//Insertar un dato a Robo 3T (mongo)
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })
//------
    //Insertar varios datos a Robo 3T (mongo)
    // db.collection('users').insertMany([
    //     {
    //         name:'Jen',
    //         age: 20
    //     },
    //     {
    //         name:'Gunther',
    //         age: 43
    //     }
    // ], (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })
    //--------------

    // db.collection('tasks').insertMany([
    //         {
    //             description:'clean the house',
    //             completed: true
    //         },
    //         {
    //             description:'Renew inspection',
    //             completed: false
    //         },
    //         {
    //             description:'Pot plants',
    //             completed: true
    //         }
    //     ], (error, result)=>{
    //         if(error){
    //             return console.log('Unable to insert documents')
    //         }
    
    //         console.log(result.ops)
    //     })
        
    //------------------------------------------------------------
    //acutaliza/edita
    //UPDATE
//cambia el valor de un nombre
//    db.collection('users').updateOne({
//         _id: new ObjectID("638e0a0f45c5451c20cc5ccd")
//     },{
//         $set:{
//             name:'Mike'
//         }
//     }).then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.log(error)
//     })
//------
//incrementa el valor de un numero
    // db.collection('users').updateOne({
    //     _id: new ObjectID("638e0a0f45c5451c20cc5ccd")
    // },{
    //     $inc:{
    //         age:1
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })


    //------
//cambia el valor de varios atributos

    // db.collection('tasks').updateMany({
    //     completed:false
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })
   
//----------------------------------------------------------------------------------------

//DELETE
//eliniar valores


//elimina varios
// db.collection('users').deleteMany({
//     age:27
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

//----
//eliminar uno por id
// db.collection('users').deleteOne({
//     _id:ObjectID("638a62e37dae082c0c960555")
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })
//---
//eliminar uno por su descripcion
db.collection('tasks').deleteOne({
    description: "clean the house"
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})



})



