import express from 'express';
import {Animal} from '../../db/models'

const router = express.Router();

router.get('/', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/create', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/login', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/tariffs', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/animals', async(req, res) => {
  const animals = await Animal.findAll()
  const initState = {animals};
  res.render('Layout', initState);
});

export default router;
