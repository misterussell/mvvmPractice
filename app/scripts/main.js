//Package imports
import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
//User-scripted modules
import renderNewPost from './views/savePost';
import renderNewProfile from './views/saveProfile';
import renderBlog from './views/blog';
import router from './router';

Backbone.history.start();
