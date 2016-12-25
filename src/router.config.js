import video from './components/video/video';
import home from './components/home/home';
import book from './components/book/book';

export default {
  routes: [
    {path: '/home', component: home},
    {path: '/video', component: video},
    {path: '/book', component: book}
  ]
};
