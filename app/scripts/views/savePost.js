import $ from 'jquery';

function renderNewPost(postsDatabase) {
  const form = $(`
    <form class="" action="index.html" method="post">
      <input type="text" name="title" />
      <textarea name="body"></textarea>
      <input type="submit" name="submit" value="Submit">
    </form>
  `);

  form.on('submit', (e) => {
    e.preventDefault();
    const title = $(form).find('input[type="text"]').val();
    const body = $(form).find('textarea').val();
    postsDatabase.create({title, body}, {
      success: () => {
        console.log('Post logged to server.');
        console.log(title, body);

      }
    });
  });
  return form;
}

export default renderNewPost;
