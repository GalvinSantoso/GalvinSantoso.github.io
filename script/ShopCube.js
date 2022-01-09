// add to cart
const cart = [];

const returnCartIsi = function (card) {
  return `          
  <li class="order-product-list">
  <div class="order-product-img"><img src="./imgShop/2x2/gan 251 m.jpg" alt="" /></div>
  <div class="order-product-desc">
    <h4>Gan 251 M</h4>
    <div class="size">
      <span>Size:</span>
      56mm
    </div>
    <div class="price">$29.2</div>
  </div>
  <div class="order-delete">
    <i class="fas fa-trash"></i>
  </div>
</li>`;
};

const addToCart = function () {
  const cubeCardsButton = Array.from(document.querySelectorAll('.cube-card .addCard'));
  cubeCardsButton.forEach((btn) => {
    btn.addEventListener('click', function () {
      const card = this.parentElement.parentElement;
      cart.push(card);
    });
  });
};

const orderProduct = document.querySelector('.order-product');

cart.forEach((value) => {
  let cartIsi = '';
});

// Cube Card
const returnCard = (cube) => {
  return `            
  <div class="cube-card">
    <div class="cube-card-img">
      <img src="${cube.img}" alt="" />
    </div>
    <div class="cube-card-desc">
      <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <h5>${cube.name}</h5>
      <div class="cube-price">$${cube.price}</div>
      <div class="cube-model">
        <img src="./img/sticker.png" alt="Model Sticker" />
        <img src="./img/stickerless.png" alt="Model Stickerless" />
      </div>
      <button class="addCard">Add To Cart</button>
    </div>
  </div>`;
};

function changeType() {
  let cubeType = document.getElementById('CubeType');
  fetch('http://localhost:3000/' + cubeType.value)
    .then((response) => response.json())
    .then((data) => {
      let cubeCard = '';
      data.forEach((cube) => {
        cubeCard += returnCard(cube);
      });
      shopCubeIsi.innerHTML = cubeCard;
    });
}

const shopCubeIsi = document.querySelector('.shop-cube-isi');

let cubeType = document.getElementById('CubeType');

fetch('http://localhost:3000/' + cubeType.value)
  .then((response) => response.json())
  .then((data) => {
    let cubeCard = '';
    data.forEach((cube) => {
      cubeCard += returnCard(cube);
    });
    shopCubeIsi.innerHTML = cubeCard;
    addToCart();
  });

// cart open and close
const cartButton = document.querySelector('.shopping-cart');
console.log(cartButton);
const orderClose = document.querySelector('.order-close');
const order = document.querySelector('.order');

cartButton.addEventListener('click', function () {
  order.style.display = 'block';
});

orderClose.addEventListener('click', function () {
  order.style.animation = 'slideOut 1s ease-in forwards';
  setTimeout(() => {
    order.style.display = 'none';
    order.style.animation = 'slideIn 1s ease-out forwards';
  }, 1000);
});
