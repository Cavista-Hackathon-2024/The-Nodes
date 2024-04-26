import { Request, Response } from 'express'
import { CommunityValidator } from './community.validator'
import { CommunityModel } from './community.model'
import { TokenService } from '../../Config/jwt'

const communityValidator = new CommunityValidator
const tokenService = new TokenService


export class CommunityController {
    public async CreateCommunity(req: Request, res: Response) {
        try {
            const data = req.body
            const ValidatedBody = await communityValidator.ValidateCommunityCreation(data)
            if (ValidatedBody.error) {
                return res.status(400).json({
                    status: 400,
                    message: ValidatedBody.error.details[0].message
                })
            }
            const isExistingCommunity = await CommunityModel.findOne({ name: data.name })
            if (isExistingCommunity) {
                return res.status(400).json({
                    status: 400,
                    message: "Community Is Existing Already!"
                })
            }
            const newId = await tokenService.generateRandomCommunityID()
            const newCommunity = new CommunityModel({
                name: data.name,
                communityId: newId
            })
            const savedCommunity = await newCommunity.save()
            const newCommunityData = {
                name: savedCommunity.name
            }
            return res.status(201).json({
                status: 201,
                message: "Community Created Successfully!",
                data: newCommunityData
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error!"
            })
        }
    }
    public async JoinCommunity(req: any, res: Response) {
        try {
            const { communityId } = req.params
            const userId = req.user.userId
            return res.status(201).json({
                status: 200,
                message: "",
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error!"
            })
        }
    }
    public async LeaveCommunity(req: Request, res: Response) {
        try {
            return res.status(201).json({
                status: 200,
                message: "",
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error!"
            })
        }
    }
    public async EditCommunity(req: Request, res: Response) {
        try {
            return res.status(201).json({
                status: 200,
                message: "",
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error!"
            })
        }
    }
    public async GetAllMembersOfCommunity(req: Request, res: Response) {
        try {
            return res.status(201).json({
                status: 200,
                message: "",
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error!"
            })
        }
    }
    public async GetAMemberOfCommunity(req: Request, res: Response) {
        try {
            return res.status(201).json({
                status: 200,
                message: "",
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error!"
            })
        }
    }
}