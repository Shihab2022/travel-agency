import { Document, Query, Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, 'Please tell us your name']
    },
    age: {
        type: Number,
        required: [true, 'Please tell us your age']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please tell us your email'],
        loadClass: true,
    },
    photo: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    userStatus: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }

})

///------> pre hook for query middleware

// userSchema.pre('find', function (next) {
//     this.find({ userStatus: { $eq: 'active' } })
//     next()
// })
// userSchema.pre('findOne', function (next) {
//     this.find({ userStatus: { $eq: 'active' } })
//     next()
// })


//----------> If we handel all the find operation as like find , findOne etc . then we can use this bellow code by regular expression <-------------//
userSchema.pre(/^find/, function (this: Query<IUser, Document>, next) {
    this.find({ userStatus: { $eq: 'active' } })
    next()
})


const User = model<IUser>('User', userSchema)

export default User