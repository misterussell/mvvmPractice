import Backbone from 'backbone';
import BlogPost from '../models/blogPost';

export default Backbone.Collection.extend({
  model: BlogPost,
  url: 'http://tiny-za-server.herokuapp.com/collections/maxblog'
});
