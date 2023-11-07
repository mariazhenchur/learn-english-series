const articles = [
    {
        id: "1",
        name: "Anne With An E",
        description: "Dive into the enchanting world of Anne as you explore a section featuring vocabulary from this series. Immerse yourself in the captivating stories of Anne in picturesque Avonlea while gaining valuable insights into the English language",
        imageDescription: "Anne",
        image: "images/article-anne-w.png"
    },
    {
        id: "2",
        name: "Lockwood & Co.",
        description: "Unlock the supernatural with 'Lockwood & Co.' Explore ghostly London, join young investigators, and sharpen your English with interactive subtitles. It's more than a series; it's your key to mastering English through enigmatic adventures.",
        imageDescription: "Lockwood & Co.",
        image: "images/article-lockwood.png"
    },
    {
        id: "3",
        name: "The Queen's Gambit",
        description: "Master English with 'The Queen's Gambit.' Join Beth's chess journey, enhance your language skills with different words, and dive into the world of grandmaster-level competition. It's your chance to make a winning move for language proficiency.",
        imageDescription: "Beth",
        image: "images/article-queen.png"
    },
];

renderBlogArticles(articles);

function renderBlogArticles(articles) {
    let articlesDomString = '';
    for (const article of articles) {
        articlesDomString += `
        <div class="blog__article article">
            <img class="article__image" src="${article.image}" alt="${article.imageDescription}">
            <h4 class="article__title">${article.name}</h4>
            <p class="article__description">${article.description}</p>
            <a class="blog__button" href="#">Learn More</a>
        </div>
        `;
    }
    const articlesContainer = document.querySelector('.blog__articles');
    articlesContainer.innerHTML = articlesDomString;
}

(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let targetDate = localStorage.getItem("countdownTargetDate");

    if (!targetDate) {
        const today = new Date();
        today.setDate(today.getDate() + 10);
        targetDate = today.getTime();
        localStorage.setItem("countdownTargetDate", targetDate);
    }

    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;

        document.getElementById("days").innerText = Math.floor(distance / day),
            document.getElementById("hours").innerText = Math.floor((distance % day) / hour),
            document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute),
            document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

        if (distance < 0) {
            document.getElementById("headline").innerText = "Here";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
        }
    }, 1000); 
})();