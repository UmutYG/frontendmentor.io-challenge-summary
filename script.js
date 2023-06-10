const summaryItemsContainer = document.querySelector('.summary-items');

const shapeContent = (data) => {
    let content = `
    <div class="summary-item summary-item--${data.category.toLowerCase()}">
    <div class="summary-item__left">
       <img src=${data.icon} alt=${data.category} icon />
        <p class="text--${data.category.toLowerCase()}">${data.category}</p>
    </div>
    <div class="summary-result-box">
        <p class="summary-value">${data.score}</p>
        <p class="summary-dash">/</p>
        <p class="summary-max-value">100</p>
    </div>
    </div>
`;
    return content;
};

fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        data.map((item) => {
            const contentHTML = shapeContent(item);
            summaryItemsContainer.innerHTML += contentHTML;
        });

        console.log(data);
    })
    .catch((err) => {
        alert('Error!');
        throw new Error('Could not fetch!');
    });
