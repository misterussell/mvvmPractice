import Backbone from 'backbone';

const postConfig = {
  idAttribute: '_id',
  title: 'title',
  body: 'body',
  defaults: {
    timestamp: new Date(),
  },
  urlRoot: 'http://tiny-za-server.herokuapp.com/collections/maxblog'
};

const BlogPost = Backbone.Model.extend(postConfig);

export default BlogPost;
