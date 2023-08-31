export default function authCheck(boolean) {
    return function authMiddleWare(req, res, next){
        if (!!req.session.user === boolean){
            return next()
        }
        return res.sendStatus(403)
    }
}