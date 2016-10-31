import $ from 'jquery';

// The function below renders all posts for the blog
function renderBlog(posts) {
  const postContainer = $('<ul></ul>');
  posts.fetch({
    success: () => {
      posts.forEach((post, i, arr) => {
        //should have used .get for these
        let singlePost = (`
          <li>
            <h1>${post.attributes.title}</h1>
            <p>${post.attributes.body}</p>
          </li`);
        console.log('*');
        postContainer.append(singlePost);
      });
    }
  });
  return postContainer;
}

export default renderBlog;
