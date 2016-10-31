import $ from 'jquery';
import Backbone from 'backbone';

import renderNewPost from './views/savePost';
import renderNewProfile from './views/saveProfile';
import renderBlog from './views/blog';
import renderBlogNav from './views/blog-nav';
import renderSinglePost from './views/singlePost';
import renderBookmarks from './views/bookmarkview';
import BlogPosts from './collections/blogPosts';
import UserProfile from './collections/profiles';

const mainNav = ('.main');
const content = $('.content');
const postNav = $('.posts-nav');

let posts = new BlogPosts();
let profiles = new UserProfile();

const Router = Backbone.Router.extend({
  routes: {
    ''          : 'renderHome',
    'newPost'   : 'renderNewPost',
    'newProfile': 'renderNewProfile',
    'posts'     : 'renderBlog',
    'posts/:id' : 'renderPost',
    'bookmarks' : 'renderBookmarks'
  },
  renderHome: () => {
    content.empty();
    postNav.hide();
    content.append(`<h1>Welmome to the magical blog.</h1>`);
  },
   renderNewPost: () => {
    content.empty();
    postNav.hide();
    content.append(renderNewPost(posts));
  },
  renderNewProfile: () => {
    content.empty();
    postNav.hide();
    content.append(renderNewProfile(profiles));
  },
  renderBlog: () => {
    content.empty();
    postNav.empty();
    postNav.show();
    postNav.append(renderBlogNav(posts));
    content.append(renderBlog(posts));
  },
  renderPost: () => {
    content.empty();
    postNav.show();
    postNav.empty();
    postNav.append(renderBlogNav(posts));
    content.append(renderSinglePost(posts));
  },
  renderBookmarks: () => {
    content.empty();
    content.append(renderBookmarks);
  }
});

const router = new Router();

export default router;
