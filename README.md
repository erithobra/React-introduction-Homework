# React Props Lab: Make A Blog Post

Let's put in some practice creating a React component from scratch. How about a blog post?

1.  Create a new react project in this repository.

1.  In the `src` folder, create a new `Post.js` file that exports a React component that renders some dummy text.

1.  Import the `Post` component into `App.js`, and render the a `Post` element instead of the create-react-app boilerplate.

1.  Create a `post` object in the `App.js` file that has the following properties:

    *   `title` (example value: `"Dinosaurs are awesome"`)
    *   `author` (example value: `"Stealthy Stegosaurus"`)
    *   `body` (example value: `"Check out this body property!"`)
    *   `comments` (example value: `["First!", "Great post", "Hire this author now!"]`)

1.  Pass the `post` object properties into the `Post` element as props.
1.  In the `Post.js` file, use the props that were passed down to the component
    to render the title, author, and body of the blog post in relevant JSX elements.

1.  Render both comments in the `Post` component's JSX tree as well. Try using the method [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to convert the strings to JSX elements. Here's [an example from the React documentation](https://reactjs.org/docs/lists-and-keys.html#rendering-multiple-components).

1.  Optional: adjust the CSS of your index file body to align your text to the center of the document.

## Solution

Here's what the solution might look like:

![Solution for Project](images/props_solution.png)
