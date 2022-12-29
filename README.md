
This project was developed using React JS library, along with `Tailwind CSS` styling library.

I developed the outer layer of the design using Normal `CSS` but the funcitonalities contents were developed using `Tailwind CSS`.

## Decisions made and Logics thought on viewing the Design

1. Layout of the application (i.e) how the application should be displayed to the user
2. In how much ways the design can be developed as an application. For example: I first created the filterbars as a fixed one to the left. Then after sometime I got an idea on how to make that interactable. 
3. How to use handlers. I faced a situation on whether to use multiple handlers or to use a single handler and access the elements through the ID. I went with the later one. 
4. I thought of various logics while developing the app. 
    1. First on how to select the categories. 
    2. Second is how to select the filter tags. 
    3. How to select the values.
    4. How to select all values.
    5. How to display the values selected.
    6. How to make these above mentioned things interactively. 
    7. On how to structure my application.
5. I also developed the application in Two different themes.
    1. Like the one mentioned in the Design
        ![Snap1](https://user-images.githubusercontent.com/55801381/210009266-3d229870-0a2a-4ea6-b8ea-3f21b92be2c9.png)
        ![Snap2](https://user-images.githubusercontent.com/55801381/210009290-c94772a3-eee8-4e80-98a1-558142fd6286.png)
    2. I made some color theme changes and developed using that.
        ![image](https://user-images.githubusercontent.com/55801381/210009320-83d656ba-341e-4537-acc9-5b48e4dfcb63.png)
        ![image](https://user-images.githubusercontent.com/55801381/210009361-bc5865aa-6d9d-4e90-bcf3-759f179b7b59.png)
6. I used two components
    1. `<Navbar />`
    2. `<Body />`
7. I used `Redux` in order to manage the state and to optimize it. I gathered the filter data from the redux reducers to know how redux works.

`Note` - I made some changes to the design so that it would be blissful to look

## Project link 
    This project was developed and hosted in vercel. [Sentisum Task link](https://sentisum.vercel.app/)


# Installation Guide (Provided by npm)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

