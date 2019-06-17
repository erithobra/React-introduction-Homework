# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  WEB DEVELOPMENT IMMERSIVE

# React Book Listing App

Let's put in some practice creating a React component from scratch.

1.  Create a new react project in this repository.

2.  Create a `src/components/Book.js` file that exports a basic React component.

3.  Import the `Book` component in the `App/index.js` file, and render it in the App component's JSX.

4.  Hardcode the entirety of the JSX and CSS for the Book component to render a page that looks something like this: (Feel free to pick your own book)

![Solution for Project](mock-up.png)

5.  Create a `book` object in the `App` component that has the following properties:

    *   `title`
    *   `author`
    *   `author_image_url`
    *   `description`

6.  Pass the `book` object properties into the `<Book />` element as props.

7.  In the `components/Book.js` file, use the props that were passed down to the component
    to render the data into the JSX.

8.  Create another `<Book />` element in the App's render() method, with information about another book passed as props.
