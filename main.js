const addBtn = document.querySelector('.fa-square-plus');
const list = document.querySelector('.itemlist');

function makeNode() {
  let place = document.querySelector('.footer__itemPlace').value;
  let price = document.querySelector('.footer__itemPrice').value;
  let itemName = document.querySelector('.footer__itemName').value;
  const item = document.createElement('li');
  item.setAttribute('class', 'item');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');

  const main__left = document.createElement('div');
  main__left.setAttribute('class', 'main__left');
  const placeName = document.createElement('div');
  placeName.setAttribute('class', 'place');
  const locationIcon = document.createElement('i');
  locationIcon.setAttribute('class', 'fa-solid fa-location-dot');
  const item__desc = document.createElement('div');
  item__desc.setAttribute('class', 'item__desc');
  const desc__name = document.createElement('div');
  desc__name.setAttribute('class', 'desc__name');
  const desc__price = document.createElement('div');
  desc__price.setAttribute('class', 'desc__price');
  const wonSignIcon = document.createElement('i');
  wonSignIcon.setAttribute('class', 'fa-solid fa-won-sign');
  const price__number = document.createElement('div');
  price__number.setAttribute('class', 'price__number');
  const trashCanIcon = document.createElement('i');
  trashCanIcon.setAttribute('class', 'fa-solid fa-trash-can');

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

  let placeText = document.createTextNode(place);
  let priceText = document.createTextNode(price);
  let itemNameText = document.createTextNode(itemName);

  placeName.appendChild(placeText);
  desc__name.appendChild(itemNameText);
  price__number.appendChild(priceText);

  trashCanIcon.onclick = (e) => {
    list.removeChild(e.currentTarget.parentNode);
  };

  desc__name.onclick = (e) => {
    let itemToToggle = e.currentTarget.parentNode.parentNode.parentNode;
    itemToToggle.classList.toggle('active');
  };

  if (!place) {
    alert('please input a place.');
  } else if (!price) {
    alert('please input a price');
  } else if (!itemName) {
    alert('please input a item');
  } else {
    list.appendChild(item);
  }
}

addBtn.addEventListener('click', () => {
  makeNode();
  document.querySelector('.footer__itemPlace').value = '';
  document.querySelector('.footer__itemPrice').value = '';
  document.querySelector('.footer__itemName').value = '';
});
