import express from 'express';
import {Animal,Tariffs} from '../../db/models'

const router = express.Router();

router.get('/', async (req, res) => {
   
  const initstate = {}
  res.render('Layout', initstate)
})



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


router.get('/animals', async (req, res) => {
  try {
    const animals = await Animal.findAll();
    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch animals' });
  }
});





router.delete('/animals/:id', async (req, res) => {
  await Animal.destroy({where: {id: req.params.id}})
  res.sendStatus(200)
})
export default router;
