let carts = document.querySelectorAll(".add-cart");
let products = [{
    course: "FREE DIVING/ INTRODUCTION",
    price: 90,
    inCart: 0
  },
  {
    course: "FREE DIVING/ LEVEL 1",
    price: 325,
    inCart: 0
  },
  {
    course: "FREE DIVING/ LEVEL 2",
    price: 480,
    inCart: 0
  },
  {
    course: "WIND SURFING/ BEGINNERS COURSE",
    price: 60,
    inCart: 0
  },
  {
    course: "WIND SURFING/ INTERMEDIATE COURSE",
    price: 100,
    inCart: 0
  },
  {
    course: "RENT A WIND SURF",
    price: 35,
    inCart: 0
  },
  {
    course: "KAYAKING/ BEGINNERS COURSE",
    price: 200,
    inCart: 0
  },
  {
    course: "KAYAKING/ EXLORE",
    price: 100,
    inCart: 0
  },
  {
    course: "RENT A KAYAK",
    price: 40,
    inCart: 0
  }
];

for (let i = 0; i < carts.length; i++) {
  // Check if the event listener is already attached
  if (!carts[i].hasAttribute('data-clicked')) {
    carts[i].setAttribute('data-clicked', true); // Mark the element as clicked
    carts[i].addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default behavior of the button click
      cartNumbers(products[i]);
      totalCost(products[i]);
    });
  }
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers) || 0;

  document.querySelector('.counter').textContent = productNumbers;
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.counter').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.counter').textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems !== null) {
    if (cartItems[product.course] === undefined) {
      cartItems[product.course] = product;
    }
    cartItems[product.course].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.course]: product
    };
  }

  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');

  if (cartCost !== null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost + product.price);
  } else {
    localStorage.setItem('totalCost', product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productsContainer = document.querySelector('.products');
  let cartCost = localStorage.getItem('totalCost');

  if (cartItems && productsContainer) {
    productsContainer.innerHTML = '';
    let subTotal = 0;

    Object.values(cartItems).map(item => {
      productsContainer.innerHTML += `
        <div class="product">
          <span>COURSE: ${item.course}</span>
          <img src="./images/close.png" class="close">
        </div>
        <div class="price">PRICE: ${item.price},00EUR</div>
        <div class="quantity">
          <span>QUANTITY: ${item.inCart}</span>
        </div>
        <div class="total">
          TOTAL: ${item.inCart * item.price},00EUR
        </div>
        <br>
      `;

      subTotal += item.inCart * item.price;
    });

    productsContainer.innerHTML += `
      <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
          BASKET TOTAL:
        </h4>
        <h4 class="basketTotal">
          ${subTotal},00EUR
        </h4>
      </div>
    `;

    let closeButtons = document.querySelectorAll('.close');

    for (let i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener('click', () => {
        removeItem(Object.values(cartItems)[i].course);
      });
    }
  }
}

function removeItem(productName) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  let product = cartItems[productName];

  let cartCost = localStorage.getItem('totalCost');
  cartCost = parseInt(cartCost);
  cartCost -= product.price;
  localStorage.setItem('totalCost', cartCost);

  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  productNumbers -= product.inCart;
  localStorage.setItem('cartNumbers', productNumbers);

  delete cartItems[productName];

  localStorage.setItem('productsInCart', JSON.stringify(cartItems));

  displayCart();
}

onLoadCartNumbers();
displayCart();
