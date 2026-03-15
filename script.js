const rightContent = document.querySelector('.right-content')

fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            rightContent.innerHTML += `
            <div class="summary-item ${item.category.toLowerCase()}">
            <div class="summary-left">
              <img src="${item.icon}" alt="">
              <span>${item.category}</span>
            </div>

            <div class="summary-score">
              <span class="score-bold">${item.score}</span>
              <span class="score-light"> / 100</span>
            </div>
          </div>`
        });
    })