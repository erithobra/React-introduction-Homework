# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  CFG

# CaseyBook Profile

![](https://www.thebookfarminc.com/images/P/9781626171688_LG.jpg)

Let's put in some practice creating a React component from scratch.

1.  FORK this repository and clone it down. CD into the directory and run: `npx create-react-app profile-page`

2.  Create a `src/components/Profile.js` file that exports a basic React component.

3.  Import the `Profile` component in the `App.js` file, and render it in the App component's JSX.

4.  Add a `profile` object to the `App` component's state that has the following properties:

    *   `name`
    *   `username`
    *   `user_image_url`
    *   `profile` (whatever information you want displayed on your profile page)

5.  Pass the `profile` object properties into the `<Profile />` element as props.

6.  In the `components/Profile.js` file, use the props that were passed down to the component
    to render the data into the JSX.

7.  Create another `profile` object and pass its informations as props to the `<Profile />` component in the App's render() method.

8. Style your profile app, don't forget to use `className` instead of `class`. Your CSS styles goes into App.css. You can make your profile look however you want!
