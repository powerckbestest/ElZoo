import express from 'express';

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

router.get('/animals', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

export default router;
