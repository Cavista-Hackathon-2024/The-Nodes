import { Router } from 'express';
import { CommunityController } from './community.controller';
import { Authenticator } from '../../Config/authenticator';

export const communityRouter = Router();
const communityController = new CommunityController();
const authenticator = new Authenticator();

communityRouter.post('/ping', (req, res) => {
    res.send('pong');
});

communityRouter.post('/create', authenticator.isLoggedIn, communityController.CreateCommunity);
communityRouter.post('/join/:communityId', authenticator.isLoggedIn, communityController.JoinCommunity);
communityRouter.post('/members/all', authenticator.isLoggedIn, communityController.GetAllMembersOfCommunity);
communityRouter.post('/members/one/:communityId', authenticator.isLoggedIn, communityController.GetAMemberOfCommunity);
communityRouter.post('/leave/:communityId', authenticator.isLoggedIn, communityController.LeaveCommunity);
communityRouter.post('/edit/:communityId', authenticator.isLoggedIn, communityController.EditCommunity);
communityRouter.post('/all', authenticator.isLoggedIn, communityController.GetAllCommunities);
communityRouter.post('/one/:communityId', authenticator.isLoggedIn, communityController.GetCommunity);
