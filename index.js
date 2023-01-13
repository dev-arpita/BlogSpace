/**
 Challenge:

 With the 5 blog post objects, display the `title` and `body`
properties of the first 5 posts on the browser page.

 Hints:
 * Create a `div` in the HTML file to store these items
 * Loop over the items creating a string of HTML elements you
   can then put into the div with `innerHTML`
 */

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        const getBlogs = postsArr.map((post) => {
            return `
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-body">${post.body}</p>
                <hr />
        `
        }).join("")
        return document.getElementById("blog-sec").innerHTML = getBlogs
    })
