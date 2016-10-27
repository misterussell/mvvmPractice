import Backbone from 'backbone';
import Bookmark from '../models/bookmark';

export default Backbone.Collection.extend({
  model: BlogPost,
  url: 'http://tiny-za-server.herokuapp.com/collections/maxblog'
});
