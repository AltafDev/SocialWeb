import mongoose from "mongoose"

let intialized=false

export const Database=()=>{
    mongoose.set("strictQuery",true)
    if(intialized) {
        console.log("Database already connected")
    return
    }
    try {
        mongoose.connect("",{
            dbName:"",
            useNewUrlParser: true,
            useunifiedtopology:true
        })
        console.log("Database connected")
        intialized=true
    } catch (error) {
        console.log(error)
    }
}

