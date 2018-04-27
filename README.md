# React Boilerplate
## Setup instructions
### Using NPM
To use this method you need to have NPM package manager installed.
This method uses data served from mock-server.

#### First steps
 1. Clone repository: `git clone https://gitlab.com/hotovo/react-boilerplate-no2.git`
 2. Run `npm install` in `react-boilerplate-no2` directory

#### Development
 1. Create `.env.dev` file from `.env.dev.dist` and set `API_BASE_URL=http://localhost:8081` in the file
 2. Run `npm run test:mock-server` to start mock server
 3. Run `npm start` to start development server with Hot Module Replacement support
 4. Head to `http://localhost:3000`
 
#### Running unit tests
 1. Run `npm run test`
 
#### Running end-to-end tests
 1. Download [Selenium Standalone](http://www.seleniumhq.org/download/) server and start it.
 2. Run `npm run test:e2e`
 
#### Building for development
 You can build development version 
 1. Run `npm run build-dev`

#### Building for production
 1. Copy `.env.production.dist` to `.env.production`
 2. Run `npm run build`
 3. Content is placed in `/public` directory

