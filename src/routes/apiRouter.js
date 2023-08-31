import express from 'express';
import {Animal, Tafiff} from '../../db/models'

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



router.get('/tariffs', async (req, res) => {
  try {
    const allTariffs = await Tafiff.findAll({
      order: [['createdAt', 'ASC']], 
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


export default router;
