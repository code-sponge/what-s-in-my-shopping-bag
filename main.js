const addBtn = document.querySelector('.fa-square-plus');
const list = document.querySelector('.itemlist');
const place = document.querySelector('.footer__itemPlace');
const price = document.querySelector('.footer__itemPrice');
const itemName = document.querySelector('.footer__itemName');

function createElement(tag, classname) {
  const newNode = document.createElement(tag);
  newNode.setAttribute('class', classname);
  return newNode;
}

function makeNode() {
  const placeValue = place.value;
  const priceValue = price.value;
  const itemNameValue = itemName.value;

  const item = createElement('li', 'item');
  const checkbox = createElement('input', 'checkbox');
  checkbox.setAttribute('type', 'checkbox');
  const main__left = createElement('div', 'main__left');
  const placeName = createElement('div', 'place');
  const locationIcon = createElement('i', 'fa-solid fa-location-dot');
  const item__desc = createElement('div', 'item__desc');
  const desc__name = createElement('div', 'desc__name');
  const desc__price = createElement('div', 'desc__price');
  const wonSignIcon = createElement('i', 'fa-solid fa-won-sign');
  const price__number = createElement('div', 'price__number');
  const trashCanIcon = createElement('i', 'fa-solid fa-trash-can');

  desc__price.appendChild(wonSignIcon);
  desc__price.appendChild(price__number);
  item__desc.appendChild(desc__name);
  item__desc.appendChild(desc__price);
  placeName.appendChild(locationIcon);
  main__left.appendChild(placeName);
  main__left.appendChild(item__desc);
  item.appendChild(checkbox);
  item.appendChild(main__left);
  item.appendChild(trashCanIcon);
  const placeText = document.createTextNode(placeValue);
  const priceText = document.createTextNode(priceValue);
  const itemNameText = document.createTextNode(itemNameValue);
  placeName.appendChild(placeText);
  desc__name.appendChild(itemNameText);
  price__number.appendChild(priceText);

  trashCanIcon.onclick = () => {
    list.removeChild(item);
  };

  checkbox.onclick = () => {
    let itemToToggle = item;
    itemToToggle.classList.toggle('active');
  };

  item.scrollIntoView({ block: 'center' });

  place.value = '';
  price.value = '';
  itemName.value = '';
  place.focus();

  if (!placeValue) {
    alert('please input a place.');
  } else if (!priceValue) {
    alert('please input a price');
  } else if (!itemNameValue) {
    alert('please input a item');
  } else {
    list.appendChild(item);
  }
}

addBtn.addEventListener('click', () => {
  makeNode();
});

place.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    makeNode();
  }
});
price.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    makeNode();
  }
});
itemName.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    makeNode();
  }
});
