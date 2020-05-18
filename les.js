'use strict'

const post = {
    id: 1,
    title: 'JS is Fun!',
    img: {
        url: './img/logo_js.svg',
        alt: 'JS Logo',
    },
    voted: false,
};

const postEl = document.querySelector('[data-type="post"]');
const imgEl = postEl.querySelector('[data-id="image"]');
const likesEl = postEl.querySelector('[data-id="likes"]');
const likeEl = postEl.querySelector('[data-action="like"]');
const dislikeEl = postEl.querySelector('[data-action="dislike"]');
const messageEl = postEl.querySelector('[data-id="message"]');

const postWidget = {
    rootEl: postEl,
    imgEl: imgEl,
    likesEl: likesEl,
    likeEl: likeEl,
    dislikeEl: dislikeEl,
    messageEl,
};

postWidget.likeEl.onclick = evt => {
    if (post.voted) {
        postWidget.messageEl.textContent = 'You already voted';
        return;
    }
    let counter = 0;
    for (let i = 0; i < 1000; i++){
        counter++;
    }
    post.likes++;
    post.voted = true;
    bindPostToEl(post, postWidget);
};

postWidget.dislikeEl.onclick = evt => {
    if (post.voted) {
        postWidget.messageEl.textContent = 'You already voted';
        return;
    }
    post.likes--;
    post.voted = true;
    bindPostToEl(post, postWidget);
};

function bindPostToEl(post, el) {
    el.imgEl.src = post.img.url;
    el.imgEl.alt = post.img.alt;
    el.likesEl.textContent = post.likes;
}

bindPostToEl(post, postWidget)