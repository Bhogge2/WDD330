import Hikes from './hikes.js';
import Comment from './comments.js';
//on load grab the array and insert it into the page
const comment = new Comment();
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
});


// let list = [1, 2, 3];

// localStorage.setItem("commentsList", JSON.stringify(list));
