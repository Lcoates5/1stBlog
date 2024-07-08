// TODO: Create a variable that selects the main element
const main = document.querySelector('main');
const blogPosts = readBlogPostStorage();
// TODO: Create a function that builds an element and appends it to the DOM
function createBlogPost(event) {
    console.log("creating new blog post")
    console.log(blogPosts)

    if (blogPosts.length <= 0) {
        handleNoBlogPosts(event)
    } else {

        for (let index = 0; index < blogPosts.length; index++) {
            const currentBlogPost = blogPosts[index];
            console.log(currentBlogPost)

            const blogPostElem = document.createElement("article")
            const blogPostTitle = document.createElement('h3')
            blogPostTitle.textContent = currentBlogPost.title;
            console.log(currentBlogPost.blogPostTitle)

            const blogPostContent = document.createElement('p');
            blogPostContent.textContent = currentBlogPost.Content;
            const blogPostAuthor = document.createElement('p');
            blogPostAuthor.textContent = currentBlogPost.username;

            blogPostElem.appendChild(blogPostTitle)
            blogPostElem.appendChild(blogPostContent);
            blogPostElem.appendChild(blogPostAuthor);
            main.appendChild(blogPostElem)
            console.log(blogPostElem)
        }
    }
}
// TODO: Create a function that handles the case where there are no blog posts to display
function handleNoBlogPosts(event) {
    console.log("No blog posts to display")
    event.preventDefault();
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'No blog posts to display';
    main.appendChild(errorMessage);

}

// TODO: Create a function that reads from local storage and returns the data
function readBlogPostStorage() {
    console.log("Reading blog post storage")

    const blogPosts = JSON.parse(localStorage.getItem('formvalues')) || []
    console.log(blogPosts)
    return blogPosts
}
// TODO: Call the function to render the list of blog posts

window.addEventListener('load', createBlogPost)