const itemlist = document.querySelector('.itemlist');
const form = document.querySelector('.form');
const placeName = document.querySelector('.footer__itemPlace');
const price = document.querySelector('.footer__itemPrice');
const itemName = document.querySelector('.footer__itemName');

function onAdd() {
  //1. 사용자의 text input을 받아온다.
  const placeValue = placeName.value;
  const priceValue = price.value;
  const itemNameValue = itemName.value;
  //text node로 변환
  const placeNode = document.createTextNode(placeValue);
  const priceNode = document.createTextNode(priceValue);
  const itemNameNode = document.createTextNode(itemNameValue);

  //input이 빈 문자열이면 alert창 띄움.
  if (!placeValue) {
    alert('please enter the place.');
    return;
  } else if (!price) {
    alert('please enter the price.');
    return;
  } else if (!itemName) {
    alert('please enter the item.');
    return;
  }

  //2. 받아온 text를 이용해서 새로운 item을 만든다.(텍스트+삭제버튼)
  const item = createNode(placeNode, priceNode, itemNameNode);

  //3. itemlist라는 컨테이너 안에 새로 만든 item을 추가한다.
  itemlist.appendChild(item);

  //입력된 아이템 바로 화면에 보여주기
  requestAnimationFrame(() => {
    item.scrollIntoView({ block: 'center' });
  });
  //4. input을 초기화 한다. focus
  placeName.value = '';
  price.value = '';
  itemName.value = '';
  placeName.focus();
}

function createNode(placeName, price, itemName) {
  const item = makeElement('li', 'item');
  const checkbox = makeElement('input', 'checkbox');
  checkbox.setAttribute('type', 'checkbox');
  const main__left = makeElement('div', 'main__left');
  const place = makeElement('div', 'place');
  const locationIcon = makeElement('i', 'fa-solid fa-location-dot');
  const item__desc = makeElement('div', 'item__desc');
  const desc__name = makeElement('div', 'desc__name');
  const desc__price = makeElement('div', 'desc__price');
  const wonIcon = makeElement('i', 'fa-solid fa-won-sign');
  const price__number = makeElement('div', 'price__number');
  const trashIcon = makeElement('i', 'fa-solid fa-trash-can');
  //5. delete 기능
  trashIcon.addEventListener('click', () => {
    itemlist.removeChild(item);
  });

  item.appendChild(checkbox);
  item.appendChild(main__left);
  item.appendChild(trashIcon);
  main__left.appendChild(place);
  place.appendChild(locationIcon);
  place.appendChild(placeName);
  main__left.appendChild(item__desc);
  item__desc.appendChild(desc__name);
  desc__name.appendChild(itemName);
  item__desc.appendChild(desc__price);
  desc__price.appendChild(wonIcon);
  desc__price.appendChild(price__number);
  price__number.appendChild(price);

  return item;
}

form.addEventListener('submit', (e) => {
  onAdd();
  e.preventDefault();
});

function makeElement(tag, className) {
  const newElement = document.createElement(tag);
  newElement.setAttribute('class', className);
  return newElement;
}
