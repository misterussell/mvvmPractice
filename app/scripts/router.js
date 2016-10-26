import $ from 'jquery';
import Backbone from 'backbone';

import renderNewPost from './views/savePost';
import renderNewProfile from './views/saveProfile';
import renderBlog from './views/blog';
import renderBlogNav from './views/blog-nav';
import renderSinglePost from './views/singlePost';
import BlogPosts from './collections/blogPosts';
import UserProfile from './collections/profiles';

const content = $('.content');
const nav = $('.posts-nav');

let posts = new BlogPosts();
let profiles = new UserProfile();

const Router = Backbone.Router.extend({
  routes: {
    ''          : 'renderHome',
    'newPost'   : 'renderNewPost',
    'newProfile': 'renderNewProfile',
    'posts'     : 'renderBlog',
    'posts/:id' : 'renderPost'
  },
  renderHome: () => {
    content.empty();
  },
   renderNewPost: () => {
    content.empty();
    content.append(renderNewPost(posts));
  },
  renderNewProfile: () => {
    content.empty();
    content.append(renderNewProfile(profiles));
  },
  renderBlog: () => {
    nav.empty();
    content.empty();
    nav.append(renderBlogNav(posts));
    content.append(renderBlog(posts));
  },
  renderPost: () => {
    nav.empty();
    content.empty();
    nav.append(renderBlogNav(posts));
    content.append(renderSinglePost(posts));
  }
});

const router = new Router();

export default router;
