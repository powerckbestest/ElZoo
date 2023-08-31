import express from 'express';
import sharp from 'sharp';
import fs from 'fs/promises';
import {Animal, Picture} from '../../db/models'
import upload from '../middlewares/multerMid';

const router = express.Router();

router.get('/', async (req, res) => {
   
  const initstate = {}
  res.render('Layout', initstate)
})

router.post('/create',upload.array('files', 3), async(req, res) => {
  try{
  const newAnimal = await Animal.create({
    name: req.body.name,
    nick: req.body.nick,
    desc: req.body.desc
   })
   console.log(req.files);
   for (const file of req.files) {
    const name = `${Date.now()}.webp`;
    const outputBuffer = await sharp(file.buffer).webp().toBuffer();
    await fs.writeFile(`./public/img/${name}`, outputBuffer);
    
    await Picture.create({
      img: name,
      animalId: newAnimal.id,
    });
  }
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
  const photos = await Picture.findAll({where: {animalId: req.params.id}})
  for(const img of photos){
   await fs.unlink(`./public/img/${img.img}`)
  }
  await Animal.destroy({where: {id: req.params.id}})
  res.sendStatus(200)
})

router.post('/animals/:id', async(req, res) => {
  console.log('get it')
  const animal = await Animal.findByPk(req.params.id)
  const animalPics = await Picture.findAll({where: {animalId: req.params.id}})
  res.status(200).json({animal, animalPics})
})
export default router;
