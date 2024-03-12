import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        email:{
            type: String,
            required: true,
            unique: true,
            max: 100,
        },
        password:{
            type: String,
            required: true,
            min: 5,
        },
        city: String,
        state: String,
        country: String,
        occupation: String,
        phoneNumber: String,
        transactions: Array,
        role: {
            type: String,
            enum: ["user", "admin", "superadmin"],  // Corrected enum values
            default: "admin",
        }
    },
    { timestamps: true}
);

const User =mongoose.model("user", UserSchema);
export default User;