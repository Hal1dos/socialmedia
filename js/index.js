// popup post

const userPosts = [...document.querySelectorAll('.posts-container .post')];
let popupPost = document.querySelector('.post-popup');
let closePopup = document.querySelector('.close-overlay');
let popupPostImg = document.querySelector('.post-popup .post .post-img-container img')

userPosts.map(post => {
    post.addEventListener('click', () => {
        let img = post.querySelector('.post-img');
        popupPostImg.src = img.src;
        popupPost.classList.add('show');
    })
})

closePopup.addEventListener('click', () => popupPost.classList.remove('show'));


posts = [...document.querySelectorAll('.post-popup .post')];
posts.map(post => addInterationsToPost(post));