/* eslint-disable new-cap */
import express from 'express';
const router = module.exports = express.Router();
import Person from '../models/person';
import Country from '../models/country';

router.get('/', (req, res) => {
  res.render('home/index');
});

router.get('/profile', (req, res) => {
  res.render('home/profile');
});

router.post('/profile', (req, res) => {
  const g = new Person(req.body);
  g.save(() => {
    res.send(g);
  });
});

router.get('/registration', (req, res) => {
  res.render('home/registration');
});

router.get('/viewTravel', (req, res) => {
  res.render('travel/viewtravel');
});

router.get('/country', (req, res) => {
  Country.find((err, countries) => {
    res.render('home/country', { countries });
  });
});

router.post('/country', (req, res) => {
  const c = new Country(req.body);
  c.save(() => {
    res.send(c);
  });
});

router.get('/city', (req, res) => {
  res.render('home/city');
});

router.get('/display', (req, res) => {
  Person.findOne({ 'name': 'od' }, function (err, person) {
  //res.render(person);
  });
});
