import mongoose,  { Schema } from "mongoose";
const userSchema = new Schema({
    firstName : {
        require : [true],
        type : Schema.Types.String,
    },  
    lastName : {
        require : [true],
        type : Schema.Types.String,
    },
    email : {
        require : [true],
        type : Schema.Types.String,
    },
    fatherName : {
        require : [true],
        type : Schema.Types.String,
    },
    motherName : {
        require : [true],
        type : Schema.Types.String,
    },
    address : {
        require : [true],
        type : Schema.Types.String,
    }, 
    pincode : {
        require : [true],
        type : Schema.Types.String,
    },
    country : {
        require : [true],
        type : Schema.Types.String,
      }
})

export const User : any =  mongoose.models.User ||  mongoose.model("User", userSchema);