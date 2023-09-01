import express from 'express';
import sharp from 'sharp';
import fs from 'fs/promises';
import {Animal, Picture, Tafiff} from '../../db/models'
import upload from '../middlewares/multerMid';

const { Op } = require('sequelize');


const router = express.Router();

router.get('/', async (req, res) => {
   
  const initstate = {}
  res.render('Layout', initstate)
})

router.post('/create',upload.array('files', 5), async(req, res) => {
  try{
    if (!req.file) {
      return res.status(400).json({ message: 'File not found' });
    }
  const newAnimal = await Animal.create({
    name: req.body.name,
    nick: req.body.nick,
    desc: req.body.desc
   })
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
  try{
    const photos = await Picture.findAll({where: {animalId: req.params.id}})
    for(const img of photos){
     await fs.unlink(`./public/img/${img.img}`)
    }
    await Animal.destroy({where: {id: req.params.id}})
    res.sendStatus(200)
  }catch(err){
    console.log(err);
  }
})

router.delete('/deletePic/:id', async (req, res) => {
  const pic = await Picture.findByPk(req.params.id)
  await Picture.destroy({where: {id: req.params.id}})
  await fs.unlink(`./public/img/${pic.img}`)
  res.sendStatus(200)
})

router.post('/animals/:id', async(req, res) => {
  const animal = await Animal.findByPk(req.params.id)
  const animalPics = await Picture.findAll({where: {animalId: req.params.id}})
  res.status(200).json({animal, animalPics})
})

router.get('/tariffs', async (req, res) => {
  try {
    const allTariffs = await Tafiff.findAll({
      order: [['id', 'ASC']], 
        });
    return res.json(allTariffs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});
router.post('/update-tariffs', async (req, res) => {
  try {
    const updatedTariffs = req.body;
    for (const updatedTarif of updatedTariffs) {
      const { peopleId, dayId, price } = updatedTarif;
      const tarif = await Tafiff.findOne({ where: { peopleId, dayId } });
      if (tarif) {
        tarif.price = price;
        await tarif.save();
      }
    }
    return res.json({ message: 'Успех' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Произошла ошибка на сервере' });
  }
})

router.patch('/updateanimal/:id', upload.array('files', 5), async(req, res) => {
  try {
    await Animal.update({
      name: req.body.newname,
      nick: req.body.newnick,
      desc: req.body.newdesc
    }, 
       {where: {id: req.params.id}})
       const updated = await Animal.findByPk(req.params.id)
        for(const file of req.files){
          const name = `${Date.now()}.webp`;
          const outputBuffer = await sharp(file.buffer).webp().toBuffer();
          await fs.writeFile(`./public/img/${name}`, outputBuffer);
          await Picture.create({
          img: name,
          animalId: updated.id,
    });
        }
       return res.status(200).json(updated)
   }catch (err){
     return res.sendStatus(400)
   }
})

router.get('/animals/search', async (req, res) => {
  try {
    const {text} = req.query;
    const animals = await Animal.findAll({
      where : {name: {[Op.like]: `%${text}%`}},
    })
    res.json(animals)
  } catch (e) {
    console.log(e);
    res.status(500).json({message: 'Server error'})
  }
})

export default router;
