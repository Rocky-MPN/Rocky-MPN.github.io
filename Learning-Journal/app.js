const articleExpanded = document.getElementById('article-expanded')
const articleTitleHero = document.getElementById('article-title-hero')
const hero = document.getElementById('hero')
const homeBtn = document.getElementById('home-btn')
const aboutMe = document.getElementById('about-me')
const aboutMeBtn = document.getElementById('about-me-btn')


articleTitleHero.addEventListener('click', function () {
    articleExpanded.style.display = 'block'
    hero.style.display = "none"
})

homeBtn.addEventListener('click', function () {
    location.reload();
})

aboutMeBtn.addEventListener('click', function () {
    aboutMe.style.display = 'block'
    hero.style.display = 'none'
})