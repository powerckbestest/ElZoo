import express from 'express';
import {Animal, Picture, Tafiff} from '../../db/models'

import authCheck from '../middlewares/authCheck';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/create', authCheck(true), (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/edit', (req, res) => {
  const initState = {}
  res.render('Layout', initState)
})

router.get('/login', authCheck(false), (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/tariffs', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/update-tariffs', (req, res) => {
  const initState = {}
  res.render('Layout', initState)
})



router.get('/animals', async(req, res) => {
  const animals = await Animal.findAll()
  const initState = {animals};
  res.render('Layout', initState);
});

router.get('/animals/:id', async(req, res) => {
  res.render('Layout', {});
});

export default router;
