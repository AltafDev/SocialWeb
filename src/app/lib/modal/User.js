import mongoose, { Schema } from "mongoose"


const UserSchema=mongoose.Schema({
    clerkID:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
    },
    firstname:{
        type:String,
        required:true, 
    },
    lastname:{
        type:String,
        required:true,
    },
    avator:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },    
    followers:{
    type:[{type:Schema.Types.ObjectId,ref:""}]
    }
})
const User =mongoose.model("Socialweb",UserSchema)
export default User