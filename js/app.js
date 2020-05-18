'use strict'

const post = {
    id: 1,
    userLiked: false,
    title: 'JS is Fun!',
    img: {
        urlLiked: './img/liked.svg',
        urlUnliked: './img/unliked.svg',
        alt: 'JS Logo',
    },
};

const postEl = document.querySelector('[data-action="like"]');
const imgEl = postEl.querySelector('[data-type="img"]');


imgEl.onclick = evt => {
    if (post.userLiked) {
        imgEl.src = post.img.urlUnliked;
        post.userLiked = false;
    } else {
        imgEl.src = post.img.urlLiked;
        post.userLiked = true;
    }
    console.log(post.userLiked);
};
