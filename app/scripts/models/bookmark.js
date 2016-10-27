import Backbone from 'backbone';

const bookmarkConfig = {
  idAttribute: '_id',
  url: 'url',
  title: 'title',
  tag: 'tag',
  defaults: {
    timestamp: new Date(),
  },
  urlRoot: 'http://tiny-za-server.herokuapp.com/collections/maxbookmarks'
};

const Bookmark = Backbone.Model.extend(bookmarkConfig);

export default Bookmark;
