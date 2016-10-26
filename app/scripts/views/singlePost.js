import $ from 'jquery';

function renderSinglePost(posts) {
  const postContainer = $('<article></article>');
  let id = (location.hash).split('/')[1];
  // console.log(id);
  console.log(posts.get(id));
  let currentPost = posts.get(id);

  let postSpecs = $(`
    <h1>${currentPost.attributes.title}</h1>
    <p>${currentPost.attributes.body}</p>
    <span class="post-date">
      ${currentPost.attributes.timestamp}
    </span>
    `);

  postContainer.append(postSpecs);
  return postContainer;
}

export default renderSinglePost;
