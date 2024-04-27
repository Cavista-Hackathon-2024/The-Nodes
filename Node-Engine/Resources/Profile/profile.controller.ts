import { Request, Response } from "express";
import { ProfileValidator } from "./profile.validator";
import { UserModel } from "../Auth/auth.model";

const profileValidator = new ProfileValidator

const filterPatientsByLocation = (patients: any[], locationToFind: string): any[] => {
    const filteredPatients = patients.filter(patient => {
        const location = patient.location.toLowerCase();
        const wordsToExclude = ['street', 'nigeria'];

        // Check if any word in the location matches the locationToFind, excluding "street" and "nigeria"
        return location.split(/\s+/).some((word: any) =>
            word.includes(locationToFind.toLowerCase()) && !wordsToExclude.includes(word)
        );
    });
    if (filteredPatients.length > 0) {
        return filteredPatients;
    } else if (filteredPatients.length === 0) {
        const lagosPatients = patients.filter(patient => patient.location.toLowerCase().includes('lagos'));
        return lagosPatients;
    } else {
        return []
    }
};



export class ProfileController {
    public async EditProfile (req: Request, res: Response) {
        try {
            
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                status: 500,
                error
            })
        }
    }

    public async GetNearbyPatients (req: any, res: Response) {
        try {
            const userId = req.user.userId
            const user = await UserModel.findOne({ _id: userId })
            if (!user) {
                return res.status(404).json({
                    message: "User Not Found",
                    status: 404
                })
            }
            const userLocation = user.locationCoordinates
            // const nearbyPatients = await UserModel.find({
            //     location: {
            //         $near: {
            //             $geometry: {
            //                 type: "Point",
            //                 coordinates: [userLocation[0], userLocation[1]] || [6.5244, 3.3792]
            //             },
            //             $maxDistance: 1000
            //         }
            //     }
            // })
            const patients = await UserModel.find()
            const nearbyPatients = filterPatientsByLocation(patients, user.location)
            if (!nearbyPatients || nearbyPatients.length === 0) {
                return res.status(404).json({
                    message: "No Nearby Patients Found",
                    status: 404
                })
            }
            return res.status(200).json({
                message: "Nearby Patients Retrieved Successfully",
                status: 200,
                data: nearbyPatients
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                status: 500,
                error
            })
        }
    }
}