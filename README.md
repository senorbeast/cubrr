# Cubrr

[![Azure Static Web Apps CI/CD](https://github.com/senorbeast/cubrr/actions/workflows/azure-static-web-apps-zealous-sky-085e4cf00.yml/badge.svg)](https://github.com/senorbeast/cubrr/actions/workflows/azure-static-web-apps-zealous-sky-085e4cf00.yml) [![Docker](https://github.com/senorbeast/cubrr/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/senorbeast/cubrr/actions/workflows/docker-publish.yml)  [![CodeQL](https://github.com/senorbeast/cubrr/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/senorbeast/cubrr/actions/workflows/codeql-analysis.yml) 
### 3D Realization of Rubik's Cube, with much more...
[ Live Demo ](https://dev.d2w85x3mtpzv11.amplifyapp.com/cube/?scramble=?solution=?)

### To run the project

In the project directory, you can run:

```
yarn install
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

<hr>

## Docker

```bash
docker build -t cubrr-image . # Build Docker Image named cubrr-image

docker run -d -p 3000:3000 --name cubrr-app cubrr-image # Run docker image

#1st 3000 : Outsider
#2nd 3000 : Port of Container

docker exec -it cubrr-app sh # Access the container
```

### Run Conatiner when /src contents changes

`docker run -v $(pwd)/src:/app/src:ro -d -p 3000:3000 --name cubrr-app cubrr-image`
2 way sync b/w project /src and docker /src (ro -> read only for container)
For ENV variables : -e REACT_APP_NAME=
or in Dockerfile or ENV file

To kill docker container

`docker rm cubrr-app -f`

<hr>

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
