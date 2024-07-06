// TODO: Create a variable that selects the main element
const main = document.querySelector('main')
// TODO: Create a function that builds an element and appends it to the DOM
function createBlogPost() {
    console.log("creating new blog post") 
    const blogPosts = readBlogPostStorage()
    console.log(blogPosts)
    
    for (let index = 0; index < blogPosts.length; index++) {
        const currentBlogPost = blogPosts[index];
        const blogPostElem = document.createElement("article")
        const blogPostTitle = document.createElement('h3')
        blogPostTitle.textContent = currentBlogPost.blogPostTitle
        blogPostElem.appendChild(blogPostTitle)
    }
    main.appendChild(blogPost)
}
// TODO: Create a function that handles the case where there are no blog posts to display
function handleNoBlogPosts(event) {
    console.log("No blog posts to display") 
    event.preventDefault();
    
    if (blogPosts.length <= 0) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'No blog posts to display';
        main.appendChild(errorMessage);
        
    }
}
// TODO: Create a function that reads from local storage and returns the data
function readBlogPostStorage() {
    console.log("Reading blog post storage") 
    
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || []
  console.log(blogPosts)
  return blogPosts  
}
// TODO: Call the function to render the list of blog posts

window.addEventListener('load', handleNoBlogPosts)