const addBtn = document.querySelector('.fa-square-plus');
const list = document.querySelector('.itemlist');
const place = document.querySelector('.footer__itemPlace');
const price = document.querySelector('.footer__itemPrice');
const itemName = document.querySelector('.footer__itemName');
const footer__left = document.querySelector('.footer__left');

function makeNode() {
  const placeValue = place.value;
  const priceValue = price.value;
  const itemNameValue = itemName.value;
  const itemself = createNode(placeValue, priceValue, itemNameValue);
  if (!placeValue) {
    alert('please input a place.');
  } else if (!priceValue) {
    alert('please input a price');
  } else if (!itemNameValue) {
    alert('please input a item');
  } else {
    list.appendChild(itemself);
  }

  itemself.scrollIntoView({ block: 'center' });

  place.value = '';
  price.value = '';
  itemName.value = '';
  place.focus();
}
let id = 0;
function createNode(placeValue, priceValue, itemNameValue) {
  const item = document.createElement('li');
  item.classList.add('item');
  item.setAttribute('data-target-id', id);
  item.innerHTML = `
      <input class="checkbox" type="checkbox" />
      <div class="main__left">
        <div class="place"><i class="fa-solid fa-location-dot"></i>${placeValue}</div>
        <div class="item__desc">
          <div class="desc__name">${itemNameValue}</div>
          <div class="desc__price">
            <i class="fa-solid fa-won-sign"></i>
            <div class="price__number">${priceValue}</div>
          </div>
        </div>
      </div>
      <i class="fa-solid fa-trash-can" data-id="${id}"></i>`;
  id++;
  return item;
}

list.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (id) {
    const tobeDeleted = document.querySelector(`.item[data-target-id="${id}"]`);
    tobeDeleted.remove();
  }
});

addBtn.addEventListener('click', makeNode);
footer__left.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    makeNode();
  }
});
