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
        title: 'Adopt Cats',
        description: 'Adopt cats here!',
        url: 'catadoption.com'
      },
    {
      title: 'Types of cat',
      description: 'Somali, Sphinx, Short-tail, we are all here!',
      url: 'catspecies.com'
    },
    {
      title: 'Cat - Wikipedia',
      description: 'Cats are a type of mammal...',
      url: 'wikipedia.com'
    },
    {
      title: 'Cat Games',
      description: 'All types of cat games here!',
      url: 'catgames.com'
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
    },
    {
      title: 'Cats Are Cool',
      description: 'This website is all about cats and cats are cool',
      url: 'catsarecool.com'
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
    },
    {
      title: 'Lions',
      description: 'This website is all about lions and lions are cool',
      url: 'catsarecool.com'
    },
    {
      title: 'Jaguars',
      description: 'This website is all about jaguars and jaguars are cool',
      url: 'jaguars.com'
    },
    {
      title: 'Elephants',
      description: 'This website is all about elephants and elephants are cool',
      url: 'elephants.com'
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


  
  function RandomResult (array) {
    return array[Math.floor(Math.random() * array.length)]
  }
  
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
  app.use(cors());

  
  app.get('/', (req, res) => res.send('Hello World!'))
  
  app.post('/searchquery', (req, res) => {
    let searchquery = req.body
    console.log(req.params)
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
  
  app.post('/randomquery',  (req, res) => {
    let searchquery = req.body
    console.log(req.params)
    if ((searchquery.searchquery).toUpperCase() == 'cats'.toUpperCase()) {
      res.send(RandomResult(searchterm_one))
    } else if ((searchquery.searchquery).toUpperCase() == 'apple'.toUpperCase()) {
      res.send(RandomResult(searchterm_two))
    } else if ((searchquery.searchquery).toUpperCase() == 'animal'.toUpperCase()) {
      res.send(RandomResult(searchterm_three))
    } else {
      res.status(404).send('Search query not valid!')
    };
  });
  

  let port = 3000
  app.listen(port, () => {console.log(`Listening on port ${port}...`)});