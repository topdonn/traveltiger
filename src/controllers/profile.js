/* eslint-disable new-cap */
import express from 'express';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('home/index');
});

router.get('/profile', (req, res) => {
  res.render('home/profile');
});

router.get('/registration', (req, res) => {
  res.render('home/registration');
});

router.get('/viewTravel', (req, res) => {
  res.render('travel/viewtravel');
});

router.get('/country', (req, res) => {
  res.render('home/country');
});

router.get('/city', (req, res) => {
  res.render('travel/city');
});
