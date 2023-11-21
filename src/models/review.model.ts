import { Schema, model } from "mongoose";
import { IReview } from "../interfaces/review.interface";


const reviewSchema = new Schema<IReview>({
    review: {
        type: String,
        required: [true, "Please put your review"]
    },
    rating: {
        type: Number,
        required: [true, 'Please put your rating']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    tour: {
        type: Schema.Types.ObjectId,
        ref: "Tour",
        required: [true, 'Please tell your tour location']
    },
    user: {
        type: Schema.Types.ObjectId,

        ref: "User",
        required: [true, "Please tell us about user"]
    }

})




const Review = model<IReview>('Review', reviewSchema)

export default Review