import { Schema, model } from "mongoose";
import { ITour } from "../interfaces/tour.interface";


const tourSchema = new Schema<ITour>({
    name: {
        type: String,
        required: [true, 'Please tell us your name']
    },
    durationHours: {
        type: Number,
        required: [true, "Please tell use your duration"]
    },
    ratingAverage: {
        type: Number,
        default: 4.5
    },
    ratingQuantity: {
        type: Number,
        default: 0,
    }
    ,
    price: {
        type: Number,
        required: [true, "Please tell the price"]
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    StartDates: [Date],
    startLocation: {
        type: String,
        required: [true, "Please tell us your location"]
    },
    location: [String],
    slug: String

})




const Tour = model<ITour>('Tour', tourSchema)

export default Tour