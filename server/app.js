const express = require('express')
const app = express()
const cors = require('cors');

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
  
  app.get('/', (req, res) => res.send('Hello World!'))
  
  // To do: Create a route for retrieving all quotes
  app.get('/results', (req, res) => {
    res.send(quotes)
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