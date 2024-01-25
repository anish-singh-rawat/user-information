import mongoose,  { Schema } from "mongoose";
const userSchema = new Schema({
    firstName : {
        require : [true, "first name is required"],
        type : Schema.Types.String,
    },  
    lastName : {
        require : [true, "lastName is required"],
        type : Schema.Types.String,
    },
    email : {
        require : [true, "email is required"],
        type : Schema.Types.String,
    },
    fatherName : {
        require : [true, "lastName is required"],
        type : Schema.Types.String,
    },
    motherName : {
        require : [true, "lastName is required"],
        type : Schema.Types.String,
    },
    address : {
        require : [true, "lastName is required"],
        type : Schema.Types.String,
    }, 
    pincode : {
        require : [true, "lastName is required"],
        type : Schema.Types.String,
    },
    country : {
        require : [true, "lastName is required"],
        type : Schema.Types.String,
      }
})

export const User : any =  mongoose.models.User ||  mongoose.model("User", userSchema);