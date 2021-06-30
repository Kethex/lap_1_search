const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors());


let searchterm_one = [
    {
        title: 'Cats Are Cool',
        description: 'This website is all about cats and cats are cool',
        url: 'catsarecool.com'
      },
      {
        title: 'Cats Are Cool',
        description: 'This website is all about cats and cats are cool',
        url: 'catsarecool.com'
      },
    {
      title: 'Cats Are Cool',
      description: 'This website is all about cats and cats are cool',
      url: 'catsarecool.com'
    }];

let searchterm_two = [
    {
        title: 'What is an apple?',
        description: 'This website is all about cats and cats are cool',
        url: 'apples.com'
      },
      {
        title: 'Apples',
        description: 'History behind apples.',
        url: 'apple.com'
      },
    {
      title: 'Types of apples',
      description: 'Various apples exist.',
      url: 'typesofapples.com'
    }];

let searchterm_three = [
    {
        title: 'Camels',
        description: 'This website is all about camels and camels are cool',
        url: 'camels.com'
      },
      {
        title: 'Horses',
        description: 'This website is all about horses and horses are cool',
        url: 'horses.com'
      },
    {
      title: 'Boars',
      description: 'This website is all about boars and boars are cool',
      url: 'boars.com'
    }];


  
  function RandomResult () {
    return quotes[Math.floor(Math.random() * quotes.length)]
  }
  
  app.use(cors());

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
  app.get('/', (req, res) => res.send('Hello World!'))
  
  // To do: Create a route for retrieving all quotes
  app.post('/searchquery', (req, res) => {
    let searchquery = req.body
    if ((searchquery.searchquery).toUpperCase() == 'cats'.toUpperCase()) {
      res.send(searchterm_one)
    } else if ((searchquery.searchquery).toUpperCase() == 'apple'.toUpperCase()) {
      res.send(searchterm_two)
    } else if ((searchquery.searchquery).toUpperCase() == 'animal'.toUpperCase()) {
      res.send(searchterm_three)
    } else {
      res.status(404).send('Search query not valid!')
    };
  });
  
  // To do: Create a route for retrieving a random quote
  app.get('/quotes/random', (req, res) => {
    res.send(RandomResult())
  })
  
  // To do: Add handling for out-of-range index
  app.get('/quotes/:index', (req, res) => {
    if (req.params.index >= quotes.length) {
      res.status(404).send('Please input a number between 1 and 15.')
    }
    res.send(quotes[req.params.index])});
  
  // To do: Get the server running
  let port = 3000
  app.listen(port, () => {console.log(`Listening on port ${port}...`)});