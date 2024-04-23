/* Add txt files from posts folder as divs to index page */
document.addEventListener('DOMContentLoaded', function() {
    const blogContainer = document.getElementById('blog-container');

    // Add blog posts to this list
    const blogPosts = ['posts/blog1.txt', 'posts/blog1.txt'];

    blogPosts.forEach(post => {
        fetch(post)
            .then(response => response.text())
            .then(text => {
                // Create a div for the blog post
                const blogPostDiv = document.createElement('div');
                blogPostDiv.className = 'blog-post';
                
                // Insert the content
                blogPostDiv.innerHTML = `<p>${text}</p>`;
                
                // Append to the container
                blogContainer.appendChild(blogPostDiv);
            })
            .catch(error => console.error('Error:', error));
    });
});
