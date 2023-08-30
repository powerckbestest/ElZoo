import express from 'express';
import bcrypt from 'bcrypt';
import {User} from '../../../db/models'

const authRouter = express.Router()

authRouter.get('/login', (req, res) => {
    if(req.session?.user) {
        return res.json(req.session.user)
    }
})

authRouter.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({where: {email}})
    if(!user) {
        return res.status(400).json({message: 'Email not found'});
    }
    const isCorrect = await bcrypt.compare(password, user.hashpass);
    if(!isCorrect) {
        return res.status(400).json({message: 'Incorrect password'})
    }
    req.session.user = {...user.get(), hashpass: undefined}
    res.sendStatus(200)
})

authRouter.get('/logout', (req, res) =>{
    req.session.destroy()
    res.clearCookie('user_sid')
    res.sendStatus(200)
})

export default authRouter