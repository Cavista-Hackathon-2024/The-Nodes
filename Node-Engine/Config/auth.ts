import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import BlacklistToken from '../Models/blacklist.model';
import { BlacklistManager, AuthenticatedRequest } from '../index';
import config from '../Config/config';

export class AuthService {
  static authenticateToken = async (
    req: any,
    res: Response,
    next: NextFunction
  ) => {
    const token = req.header('Authorization')?.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    try {
      // Verify the token using your secret key (replace 'yourSecretKey' with your actual secret key)
      const decoded = jwt.verify(token, config.auth.accessTokenSecret) as { id: string; name: string };
  
      // Attach user information to the request object
      req.user = decoded
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token is invalid' });
    }
  }

  static async isBlacklistToken(req: any, res: Response, next: NextFunction) {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    try {
      const blacklist = await BlacklistManager.isTokenBlacklisted(token);
  
      if (blacklist) {
        return res.status(401).json({ message: 'Token is blacklisted' });
      }
      // If the token is not in the blacklist, continue to the next middleware
      next();
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }


}

