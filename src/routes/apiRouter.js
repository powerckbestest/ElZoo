import express from 'express';
import {Animal} from '../../db/models'

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

router.post('/create', async(req, res) => {
  try{
   await Animal.create({
    name: req.body.name,
    nick: req.body.nick,
    desc: req.body.desc
   })
  return res.sendStatus(200)
  }catch(err) {
    console.log(err)
   return res.sendStatus(400)
  }
})

export default router;
