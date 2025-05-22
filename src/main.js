import './style.css';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

const grid = document.querySelector('.grid');

imagesLoaded(grid, function () {
  new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
});
