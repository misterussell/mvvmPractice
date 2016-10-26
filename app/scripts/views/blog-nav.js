import $ from 'jquery';

function renderBlogNav(posts) {
  const titleContainer = $('<ul></ul>');
  posts.fetch({
    success: () => {
      posts.forEach((post, i, arr) => {
        let title = (`
          <li class="${post.attributes._id}">
            <h3>${post.attributes.title}</h3>
          </li>`);
        // console.log('*');
        titleContainer.append(title);
        $(`.${post.attributes._id}`).on('click', (e) => {
          window.location.hash = `posts/${post.attributes._id}`;
        });
      });
    }
  });
  return titleContainer;
}

export default renderBlogNav;
