<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

Clone this repository, `cd` into the project directory and run the install command.

```bash
$ npm install
# or
$ yarn install
```

## Running the app

When the install is done, you can start the server with commands below.

```bash
# start server
$ npm run start

# or

$ yarn start

# watch mode(this will restart the project when you save new changes)
$ npm run start:dev

# or

$ yarn start:dev
```

## Development

For now you can ignore almost all files, and lets focus on a few.

`/.rest`
```
You can use this file to test HTTP Requests.
Install the VS Code extension as mentioned in the top of the .rest file.
```

`/package.json`
```
This file contains all the dependencies that are used in this project.
Contains a list of scripts just like the install/start commands I mentioned above.
```

`/src/main.ts`
```
Here you can change port number or add stuff like CORS(which I've added already).
You can also set global guards here.
```

`/src/app.controller.ts`
```
This is where we set up the HTTP Requests, we then send the data to the service file mentioned below.
```

`/src/app.service.ts`
```
This is where we handle the data we get from the requests.
We return something like f.ex a string to the controller which will return it to the user.
```

## Challenge

> Make a counter
```
http://localhost:3000/counter/increase

Should increase the counter with 1
```
```
http://localhost:3000/counter/decrease

Should decrease the counter by 1
```
```
http://localhost:3000/counter/add/:number

Should add the selected amount to the counter
```
```
http://localhost:3000/counter/remove/:number

Should remove the selected amount from the counter
```
> Extra: The counter should not go below 0