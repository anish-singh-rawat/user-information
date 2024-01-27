import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  fatherName: string;
  motherName: string;
  address: string;
  pincode: string;
  country: string;
}

const userSchema: Schema<IUser> = new Schema({
  firstName: {
    required: true,
    type: Schema.Types.String,
  },
  lastName: {
    required: true,
    type: Schema.Types.String,
  },
  email: {
    required: true,
    type: Schema.Types.String,
  },
  fatherName: {
    required: true,
    type: Schema.Types.String,
  },
  motherName: {
    required: true,
    type: Schema.Types.String,
  },
  address: {
    required: true,
    type: Schema.Types.String,
  },
  pincode: {
    required: true,
    type: Schema.Types.String,
  },
  country: {
    required: true,
    type: Schema.Types.String,
  },
});

export const User = mongoose.models.User as mongoose.Model<IUser> || mongoose.model<IUser>("User", userSchema);
