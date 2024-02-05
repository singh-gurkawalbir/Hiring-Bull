# Project Components

## IdeaList Component: Displays a list of ideas

Each idea shows its title, description (truncated if not expanded), tags, upvotes count, and creation date.
Users can upvote an idea by clicking a thumbs-up icon. A user can upvote an idea only once.

## IdeaForm Component: Allows users to submit new ideas

Users can enter a title, description, and add tags to their ideas.
Tags are selected using the Tag component.
Upon submission, the idea is added to the Firestore database with additional details like upvotes count and creation date.

## SearchAndSelect Component: A tag selection component

Users can select from predefined tags or enter a new tag.
Selected tags are added to the state and sent to the parent component.

## Home Component: The main component rendering the IdeaForm, IdeaList, and sorting buttons

Sorting buttons allow users to sort ideas by votes or creation date.

## AuthContext and AuthContextProvider: Manages user authentication state

Provides authentication information using React context.

## Firebase Integration

Firestore is used to store ideas and votes.
Authentication is handled using Firebase Authentication.
Real-time updates are used to keep the UI in sync with the Firestore data.

## Functionality

Users can submit new ideas, which are stored in the Firestore database.
Users can upvote ideas, with a limit of one upvote per idea per user.
Ideas are displayed in a list, and users can see details like tags, upvotes, and creation date.
Sorting buttons allow users to sort ideas by votes or creation date.
User authentication is handled using Firebase Authentication.

## Additional Features

Real-time updates ensure that the UI reflects changes in the Firestore data.
Tags are selected using a custom Tag component.
The SearchAndSelect component allows users to select from predefined tags or enter new tags.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
