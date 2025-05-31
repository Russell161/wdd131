
const postsContainer = document.querySelector('#posts');

function renderArticles() {
    articles.forEach(article => {
        const articleEl = document.createElement('article');
        articleEl.classList.add('post');

        articleEl.innerHTML = `
            <h2 class="post-title">${article.title}</h2>
            <div class="post-meta">
                <div class="post-date">${article.date}</div>
                <div class="post-age">${article.ages}</div>
                <div class="post-category">${article.genre}</div>
                <div class="stars">${article.stars}</div>
            </div>
            <div class="post-content">
                <div class="book-cover">
                    <img src="${article.imgSrc}" alt="${article.imgAlt}">
                </div>
                <p class="post-excerpt">
                    ${article.description}
                    <a href="#" class="read-more">Read More...</a>
                </p>
            </div>
        `;

        postsContainer.appendChild(articleEl);
    });
}

renderArticles();
