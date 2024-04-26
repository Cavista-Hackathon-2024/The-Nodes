import { Request, Response, NextFunction } from "express"

interface IRequest extends Request {
    isAuthenticated(): any
    user: any
}

export class Authenticator {
    public isLoggedIn(req: IRequest, res: Response, next:NextFunction) {
        if (req.isAuthenticated()) {
        }
    }

    public isNotLoggedIn(req: IRequest, res: Response, next:NextFunction) {
        if (!req.isAuthenticated()) {
            return next()
        }
        res.status(401).send('You are already logged in')
    }

    public isAdmin(req: IRequest, res: Response, next:NextFunction) {
        if (req.isAuthenticated() && req.user.role === 'admin') {
            return next()
        }
        res.status(401).send('You must be an admin to access this route')
    }

    public isUser(req: IRequest, res: Response, next:NextFunction) {
        if (req.isAuthenticated() && req.user.role === 'user') {
            return next()
        }
        res.status(401).send('You must be a user to access this route')
    }

    public isOwner(req: IRequest, res: Response, next:NextFunction) {
        if (req.isAuthenticated() && req.user.role === 'owner') {
            return next()
        }
        res.status(401).send('You must be an owner to access this route')
    }

    public isSuperAdmin(req: IRequest, res: Response, next:NextFunction) {
        if (req.isAuthenticated() && req.user.role === 'superadmin') {
            return next()
        }
        res.status(401).send('You must be a super admin to access this route')
    }

    public isSuperAdminOrOwner(req: IRequest, res: Response, next:NextFunction) {
        if (req.isAuthenticated() && (req.user.role === 'superadmin' || req.user.role === 'owner')) {
            return next()
        }
        res.status(401).send('You must be a super admin or owner to access this route')
    }
}