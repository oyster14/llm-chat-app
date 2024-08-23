# How to use

- Rename .env.example to .env.local:

- Change REACT_APP_LLM_SERVICE_URL to your TensorRTLLM port
  
- npm install
  
- npm start

- Disable same-origin policy in Chrome:

    - Create a Chrome shortcut:
        - Right-click on your desktop, select "New > Shortcut."
        - In the "Target" field, enter the path to your Chrome installation, followed by the flags --disable-web-security --user-data-dir=c:\tmppath. Replace c:\tmppath with the path to a temporary folder you create.
        - For example: "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir=c:\tmppath
    - Name the shortcut:
        - Click "Next," and give the shortcut a name like "Chrome-NoSecurity."
        - Click "Finish" to create the shortcut.
    - Use the new shortcut:
        - Double-click the shortcut to open Chrome with the same-origin policy disabled. You'll see a warning in the Developer Console indicating that the same-origin policy is not enforced.
    - Important Note:
        - Only use this setup in a development or debugging environment. Do not use it in production, as it poses serious security risks.
        - Each time you open Chrome using this shortcut, it will run as an independent instance, without affecting other Chrome windows. After closing this instance, Chrome will revert to enforcing the same-origin policy.
        - The temporary directory specified by --user-data-dir will be deleted when Chrome exits, so make sure to use a temporary location and not an important user directory.
    - Summary:
        - The same-origin policy is crucial for web security. Only disable it when absolutely necessary for development purposes.

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
