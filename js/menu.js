const menuItems = [
    {
        imgSrc: '../images/pasta2.avif',
        title: 'Pasta Primavera',
        description: 'Pasta with Vegetables: A hearty pasta dish with fresh, crisp vegetables mixed in a savory sauce.',
        price: 4.3
    },
    {
        imgSrc: '../images/meal3.avif',
        title: 'Grilled Herb Chicken',
        description: 'Grilled Chicken: Juicy and tender chicken breast marinated and grilled to perfection.',
        price: 6.3
    },
    {
        imgSrc: '../images/meal8.avif',
        title: 'Margherita Pizza',
        description: 'A classic pizza made with fresh tomato sauce, mozzarella cheese, and your choice of toppings.',
        price: 7.9
    },
    {
        //complete according to code 
        imgSrc: '../images/vegetable-salad-with-boiled-eggs-white-dish_1150-21953.avif',
        title: 'Herb and Egg Salad',
        description: ' Egg Salad: Creamy egg salad made with fresh eggs, mayonnaise,and a blend of spices.',
        price: 4.7
    },{
        imgSrc: '../images/meal4.avif',
        title: 'Grilled Chicken Caesar Salad',
        description: 'Chicken Salad: A flavorful mix of chicken, mayonnaise, and celery served on a bed of lettuce.',
        price: 4.3
    },{
        imgSrc: '../images/meal2.avif',
        title: 'Tuna and Egg Salad Nicoise',
        description: 'Tuna Salad with Egg: Tuna salad blended with chopped boiled eggs, mayonnaise, and a touch of seasoning.',
        price: 6.2
    },{
        imgSrc: '../images/pasta3.avif',
        title: 'Zucchini Noodles with Tomato Sauce',
        description: 'Zucchini Pasta: A healthy and flavorful pasta dish made with zucchini noodles and a savory sauce.',
        price: 4.1
    },{
        imgSrc: '../images/new.avif',
        title: 'Creamy Chicken and Egg Fettuccine',
        description: 'Chicken-Egg Pasta: Tender chicken breast and boiled eggs mixed with pasta in a light tomato cream sauce.',
        price: 4.7
    },{
        imgSrc: '../images/burger.avif',
        title: 'Beyond Burger with Vegan Cheese',
        description: 'Burger: A juicy and burger patty made from plant-based ingredients and served with your choice of toppings.',
        price: 8.3
    }
  ];
  
  const menuItemsContainer = document.getElementById('menu-items');
  
  menuItems.forEach(item => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col-md-4', 'mb-3');
  
    const card = document.createElement('div');
    card.classList.add('card');
  
    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = item.imgSrc;
    img.alt = item.title;
  
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
  
    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.innerText = item.title;
  
    const description = document.createElement('p');
    description.classList.add('card-text');
    description.innerText = item.description;
  
    const price = document.createElement('h6');
    price.innerText = '$' + item.price;
  
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-outline-success');
    button.innerText = 'Add To Cart';
    button.addEventListener('click', () => {
        addToCart(item);
    })
  
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(price);
    cardBody.appendChild(button);
  
    card.appendChild(img);
    card.appendChild(cardBody);
  
    cardDiv.appendChild(card);
  
    menuItemsContainer.appendChild(cardDiv);
  });
  
  let cart = [];

  if (localStorage.getItem('cart') != null) {
    cart = JSON.parse(localStorage.getItem('cart'));
}

    const addToCart = (item) => {
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

