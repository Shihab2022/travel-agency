
import { ITour } from "../interfaces/tour.interface"
import Tour from "../models/tour.model"



const createTour = async (tourData: ITour): Promise<ITour> => {
    const result = await Tour.create(tourData)
    //   const result = new Tour(tourData)
    //   await result.save()

    return result
}
const getAllTours = async (): Promise<ITour[]> => {
    const result = await Tour.find()
    return result
}
const getSingleTour = async (id: string): Promise<ITour | null> => {
    const result = await Tour.findById(id)
    return result
}
const updateTour = async (id: string, data: ITour): Promise<ITour | null> => {
    const result = await Tour.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    })
    return result
}

const deleteTour = async (id: string): Promise<ITour | null> => {
    const result = await Tour.findByIdAndDelete(id)
    return result
}
export const tourServices = {
    createTour,
    getAllTours,
    getSingleTour,
    updateTour,
    deleteTour,
}