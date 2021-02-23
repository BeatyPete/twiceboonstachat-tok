
# Twiceboonstachat-Tok
![dump](https://img.shields.io/badge/License-MIT-green)

## Description 

This is the backend for a social media app that can where a user can create an ccount, add friends, and create posts called thoughts and reactions to these thoughts.

## Table of Contents


* [Installation](#installation)
* [Technologies](#technologies)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)


## Installation

Clone the repository from https://github.com/BeatyPete/twiceboonstachat-tok. After opening the directory in your command line use 'npm install' to install the required packages.

## Technologies

This application uses:
* mongodb
* mongoose
* express
* dayjs

## Usage 

Bring up your command line and go to the directory containg the cloned code. Then enter "npm start" to open the server. Once the server has started you can use your web browser or insomnia core to enter in one of the api endpoints.

## Tests

The api endpoints that can be accessed are:
* http://localhost:3001/api/users
    * get all and create users
* http://localhost:3001/api/users/:id
    * get single, update, and delete user
* http://localhost:3001/api/users/:userId/friends/:friendId
    * add and remove friend to a user
* http://localhost:3001/api/thoughts
    * get all and create thoughts
* http://localhost:3001/api/thoughts/:id
    * get single, update, and delete thoughts
* http://localhost:3001/api/thoughts/:thoughtId/reactions
    * add reaction to a thought
* http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId
    * delete reaction from a thought
    
[link to demo video](https://drive.google.com/file/d/1iuM-5SC5fhYt4FPy96m2XqtcLZyON4rY/view)

## License

MIT

## Questions?
Github: [beatypete](https://github.com/beatypete)
Feel free to email me with any questions at akira941@gmail.com
    