import Backbone from 'backbone';
import UserProfile from '../models/userProfile';

export default Backbone.Collection.extend({
  model: UserProfile,
  url: 'http://tiny-za-server.herokuapp.com/collections/maxprofiles'
});
