import Backbone from 'backbone';

const profileConfig = {
  idAttribute: '_id',
  firstName: 'firstName',
  lastName: 'lastName',
  address: 'address',
  telephone: 'telephone',
  creature: 'creature',
  defaults: {
    creationDate: new Date(),
  },
  urlRoot: 'http://tiny-za-server.herokuapp.com/collections/maxprofiles'
};

const UserProfile = Backbone.Model.extend(profileConfig);

export default UserProfile; 
