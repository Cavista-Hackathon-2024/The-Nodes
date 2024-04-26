import { Router } from 'express';
import { CommunityController } from './community.controller';
import { Authenticator } from '../../Config/authenticator';

export const communityRouter = Router();
const communityController = new CommunityController();
const authenticator = new Authenticator();

communityRouter.post('/ping', (req, res) => {
    res.send('pong');
});

communityRouter.post('/create', communityController.CreateCommunity);
communityRouter.post('/join/:id', communityController.JoinCommunity);
communityRouter.post('/members/all', communityController.GetAllMembersOfCommunity);
communityRouter.post('/members/:id', communityController.GetAMemberOfCommunity);
communityRouter.post('/leave/:id', communityController.LeaveCommunity);
communityRouter.post('/edit/:id', communityController.EditCommunity);
