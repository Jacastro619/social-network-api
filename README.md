# Social Network API ![Static Badge](https://img.shields.io/badge/license-MIT-blue)

## Technology Used

| Technology Used |                                                    Resource URL                                                    |
| --------------- | :----------------------------------------------------------------------------------------------------------------: |
| JavaScript      | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| Node.js         |                              [https://nodejs.org/en/docs](https://nodejs.org/en/docs)                              |
| Express.js      |                                  [https://expressjs.com/](https://expressjs.com/)                                  |
| MongoDB         |                           [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/)                           |
| Mongoose        |                  [https://mongoosejs.com/docs/guide.html](https://mongoosejs.com/docs/guide.html)                  |
| Insomnia        |         [https://docs.insomnia.rest/insomnia/get-started](https://docs.insomnia.rest/insomnia/get-started)         |
| Git             |                                    [https://git-scm.com/](https://git-scm.com/)                                    |

## Description

[Video Demo Here](https://drive.google.com/file/d/1ZT-rWrNTpmDAlx0gr7AcTa61rNnezoP-/view?usp=sharing)

This is a Social Network API. This project uses MongoDB with the use of Mongoose. This API gives the ability to POST, GET, PUT, and DELETE. These CRUD actions apply to Users, Thoughts, Reactions, and even has a friend system where users can add and remove friends. All API request where tested using Insomnia.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)
- [Author Info](#author-info)

## Installation

To install this project, in the terminal run, "npm i" to install dependancies. Once dependancies are installed run, "npm start". This will open the port and will have the ability to make api requests in Insomnia.

## Usage

This is strictly a back end API. You will need to use a service like Insomnia to test the API routes.

API routes are as follows:

Users

- GET all users, POST user: '/api/users'

- GET single user, PUT (update) user, DELETE user: '/api/users/:userID'

- POST (add) friend, DELETE (remove) friend: '/api/users/:userID/friends/:friendsID'

Thoughts

- GET all thoughts, POST thought: 'api/thoughts'

- GET single thought, PUT (update) thought: 'api/thoughts/:thoughtID'

- DELETE thought: '/api/thought/:userID/:thoughtID'

- POST (add) reaction: 'api/thought/:thoughtID/reactions'

- DELETE (remove) reaction: 'api/thought/:thoughtID/reactions/:reactionID'

## License

This project is covered under the MIT License. For more information about license go to [https://mit-license.org/](https://mit-license.org/)

## Questions

If there are additional questions, you may contact me at jorgecastro619@gmail.com or visit my [GitHub](https://github.com/Jacastro619)

## Author Info

Created by Jorge Castro, a student at UC Berkeley Full Stack Coding Academy. For more information go to https://bootcamp.berkeley.edu/coding/

- [Portfolio](https://jacastro619.github.io/my-portfolio/)

- [LinkedIn](https://www.linkedin.com/in/jorge-castro-2a9545177/)

- [GitHub](https://www.linkedin.com/in/jorge-castro-2a9545177/)
