
//json-server GET request
let allProducts = [];

async function getUsers() {
    try {
        const result=await fetch('http://localhost:3000/products');
        return result.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    allProducts = await getUsers();
    loadProducts(allProducts);
}

renderUsers();

const cardsContainer = document.createElement('div');
cardsContainer.className = "row mb-5 my-row card-row";


const itemColumn = document.querySelector(".item-column");

const loadProducts = (data = allProducts) => {
    for (let i = 0; i < data.length; i++) {
        const cardContainer = document.createElement('div');
        cardContainer.className = "col-md-4 col-sm-6 mb-3";

        const cardItem = document.createElement('div');
        cardItem.className = "card";

        const cardItemImages = document.createElement('img');
        cardItemImages.className = "card-img-top product-image";
        cardItemImages.src = data[i].image;

        const cardItemBody = document.createElement('div');
        cardItemBody.className = "card-body";

        const cardItemTitle = document.createElement('h5');
        cardItemTitle.className = "card-title text-center";

        cardItemTitle.innerHTML = data[i].title;
        cardItemBody.appendChild(cardItemTitle);


        const cardItemContent = document.createElement('div');
        cardItemContent.className = "card-content";

        const cardItemContentTitle = document.createElement('p');
        cardItemContentTitle.className = "text-muted text-center";

        cardItemContentTitle.innerHTML = data[i].description;
        cardItemContent.appendChild(cardItemContentTitle);

        const cardItemPrice = document.createElement('div');
        cardItemPrice.className = "card-price";

        const cardItemPriceTitle = document.createElement('h5');
        cardItemPriceTitle.className = "card-price-header text-center";

        cardItemPriceTitle.innerHTML = "$" + data[i].price;
        cardItemPrice.appendChild(cardItemPriceTitle);

        const cardItemSize = document.createElement('div');
        cardItemSize.className = "card-size";

        const cardItemSizeTitle = document.createElement('h5');
        cardItemSizeTitle.className = "card-size-header text-center";

        cardItemSizeTitle.innerHTML = data[i].size;
        cardItemSize.appendChild(cardItemSizeTitle);


        cardsContainer.appendChild(cardContainer);
        cardContainer.appendChild(cardItem);
        cardItem.appendChild(cardItemImages);
        cardItem.appendChild(cardItemBody);
        cardItem.appendChild(cardItemContent);
        cardItem.appendChild(cardItemPrice);
        cardItem.appendChild(cardItemSize);
    }


    itemColumn.appendChild(cardsContainer);
};


const filterItems = (event) => {
    const selectedCheckBox = event.target.dataset.toggle;
    const productsContainer = document.querySelector('.card-row');

    productsContainer.innerHTML = "";

    if (event.target.checked) {
        const filterProducts = allProducts.filter((product) => product.size === selectedCheckBox);
        loadProducts(filterProducts);
    } else {
        loadProducts();
    }
};
//prima varianta

const information = {
    email: "",
    password: "",
    address: "",
    address_2: "",
    city: "",
    state: "",
    zip: "",
    check: false
};

const loadingData = (event) => {
    let inputData = event.target.value;
    const checkbox = event.target.checked;
    const key = event.target.dataset.target;

    if (key === 'check') {
        information[key] = checkbox;
    } else {
        information[key] = inputData;
    }
};

const showData = (event) => {
    console.log(information);
    event.preventDefault();
};



//a 2 a varianta


