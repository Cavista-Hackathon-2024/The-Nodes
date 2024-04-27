import { Request, Response } from 'express'
import { CommunityValidator } from './community.validator'
import { CommunityModel } from './community.model'
import { TokenService } from '../../Config/jwt'
import { UserModel } from '../Auth/auth.model'

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
                name: savedCommunity.name,
                communityId: savedCommunity.communityId
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
            const community = await CommunityModel.findOne({ communityId: communityId })
            if (!community) {
                return res.status(500).json({
                    status: 500,
                    message: "Community not found!"
                })
            }
            const isMember = community.members.includes(userId)
            if (isMember) {
                return res.status(400).json({
                    status: 400,
                    message: "You are already a member of this community!"
                })
            }
            community.members.push(userId)
            await community.save()
            return res.status(201).json({
                status: 200,
                message: "You have successfully joined the community",
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error!"
            })
        }
    }
    public async LeaveCommunity(req: any, res: Response) {
        try {
            const { communityId } = req.params
            const userId = req.user.userId
            const community = await CommunityModel.findOne({ communityId: communityId })
            if (!community) {
                return res.status(500).json({
                    status: 500,
                    message: "Community not found!"
                })
            }
            const isMember = community.members.includes(userId)
            if (!isMember) {
                return res.status(400).json({
                    status: 400,
                    message: "You are not a member of this community!"
                })
            }
            const index = community.members.indexOf(userId)
            community.members.splice(index, 1)
            await community.save()
            return res.status(201).json({
                status: 200,
                message: "You have successfully left the community",
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
            const { communityId } = req.params
            const data = req.body
            const ValidatedBody = await communityValidator.ValidateCommunityEdit(data)
            if (ValidatedBody.error) {
                return res.status(400).json({
                    status: 400,
                    message: ValidatedBody.error.details[0].message
                })
            }
            const community = await CommunityModel.findOne({ communityId: communityId })
            if (!community) {
                return res.status(500).json({
                    status: 500,
                    message: "Community not found!"
                })
            }
            community.name = data.name
            await community.save()
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
            const { communityId } = req.params
            const community = await CommunityModel.findOne({ communityId: communityId })
            if (!community) {
                return res.status(500).json({
                    status: 500,
                    message: "Community not found!"
                })
            }
            const members = community.members
            if (!members || members.length === 0) {
                return res.status(404).json({
                    status: 404,
                    message: "No members found!"
                })
            }
            const memberDetails = await UserModel.find({ _id: { $in: members } })
            if (!memberDetails) {
                return res.status(404).json({
                    status: 404,
                    message: "Members Are not users!"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "",
                data: memberDetails
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
            const { communityId, userId } = req.params
            const community = await CommunityModel.findOne({ communityId: communityId })
            if (!community) {
                return res.status(500).json({
                    status: 500,
                    message: "Community not found!"
                })
            }
            const isMember = community.members.includes(userId)
            if (!isMember) {
                return res.status(400).json({
                    status: 400,
                    message: "User is not a member of this community!"
                })
            }
            const memberDetails = await UserModel.findOne({ _id: userId })
            return res.status(200).json({
                status: 200,
                message: "",
                data: memberDetails
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error!"
            })
        }
    }

    public async GetAllCommunities(req: Request, res: Response) {
        try {
            const communities = await CommunityModel.find()
            return res.status(200).json({
                status: 200,
                message: "",
                data: communities
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error!"
            })
        }
    }

    public async GetCommunity(req: Request, res: Response) {
        try {
            const { communityId } = req.params
            const community = await CommunityModel.findOne({ communityId: communityId })
            if (!community) {
                return res.status(500).json({
                    status: 500,
                    message: "Community not found!"
                })
            }
            const members = community.members
            const memberDetails = await UserModel.find({ _id: { $in: members } })
            if (!memberDetails) {
                return res.status(404).json({
                    status: 404,
                    message: "Members Are not users!"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "",
                data: community,
                members: memberDetails
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error!"
            })
        }
    }
}