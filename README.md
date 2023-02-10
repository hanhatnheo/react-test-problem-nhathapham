# React testing problem

Our lab uses an experimental framework built with React. To make sure that we can reproduce and communicate what happened in our experiments, we need to test and document our experiment code. This repository provides a template for a simple test that requires you to build a new component and use documentation and testing tools to make sure it is working.

Please create a copy of this repository using the 'Use this template' button above. When promped, name your copy something like "react-test-problem-yourname".
  
In your copy of this repository, perform the following tasks.

Tasks:
- [ ] create a story in the storybook for the App component
- [ ] add a button to the default page in App.js, labeled "click me" 
- [ ] add a handler that changes the text in the button to "thanks" when clicked once, and back to "click me" if clicked again
- [ ] import the storybook story you wrote to create a test of the button in App.test.js
  - [ ] write a test to check that the button initially displays "click me" 
  - [ ] write a test to check that clicking the button changes its text to "thanks"

When you're finished, please share a link to your copy of the repository.

# Helpful articles
- [Storybook Introduction](https://storybook.js.org/docs/react/get-started/introduction)
- [How to write stories](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Import stories in tests](https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests)
- [How to use Testing Library to test Storybook](https://medium.com/storybookjs/testing-lib-storybook-react-8c36716fab86)


## Docker
The docker container provided here is an _optional_ aid to development, if you do not want to develop locally. To use the container, ensure that the docker daemon is running and type:

`docker-compose up`

By default this will launch separate containers for the storybook and the app, both sharing the `/src` and `/public` folders.

## Installing packages
If you don't want to use docker, install the required node dependencies by running the (in the project folder):

`npm install`


## Available Scripts

In the project directory, you can run:

### `npm run storybook`
Starts the storybook in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in your browser.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
Note: if you're using the provided docker containers above, you should run your tests in the `test-problem-storybook` container.
