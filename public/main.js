const modal = document.getElementById('colorModal');

const button = document.getElementById('colorListButton');
button.addEventListener('click', () => {
    modal.classList.add('open');
})

const closeButton = document.getElementById('colorListButtonClose');
closeButton.addEventListener('click', () => {
    modal.classList.remove('open');
})

const nomimalButton = document.getElementById('ue');
nomimalButton.addEventListener('click', () => {

  nomimalButton.style.backgroundColor = '#d68c67';
  nomimalButtonRus.style.backgroundColor = '#ffd6b6';

  const myElement = document.getElementById('newPrice');
  const content = myElement.textContent;
  const parsContent = content.replace(/\s+/g, '');
  const contentToNumber = parseInt(parsContent, 10);
  const inDoll = Math.floor(contentToNumber / 70);
  myElement.textContent = inDoll + " $";

  const myElementOld = document.getElementById('oldPrice');
  const contentOld = myElementOld.textContent;
  const parsContentOld = contentOld.replace(/\s+/g, '');
  const contentToNumberOld = parseInt(parsContentOld, 10);
  const inDollOld = Math.floor(contentToNumberOld / 70);
  myElementOld.textContent = inDollOld + " $";

  nomimalButton.style.pointerEvents = 'none';
  nomimalButtonRus.style.pointerEvents = 'cursor';
})

const nomimalButtonRus = document.getElementById('rus');
nomimalButtonRus.addEventListener('click', () => {

  nomimalButton.style.backgroundColor = '#ffd6b6';
  nomimalButtonRus.style.backgroundColor = '#d68c67';

  const myElement = document.getElementById('newPrice');
  const content = myElement.textContent;
  const parsContent = content.replace(/\s+/g, '');
  const contentToNumber = parseInt(parsContent, 10);
  const inDoll = Math.floor(contentToNumber * 70);
  myElement.textContent = inDoll + " ₽";

  const myElementOld = document.getElementById('oldPrice');
  const contentOld = myElementOld.textContent;
  const parsContentOld = contentOld.replace(/\s+/g, '');
  const contentToNumberOld = parseInt(parsContentOld, 10);
  const inDollOld = Math.floor(contentToNumberOld * 70);
  myElementOld.textContent = inDollOld + " ₽";

  nomimalButtonRus.style.pointerEvents = 'none';
  nomimalButton.style.pointerEvents = 'cursor';
})

const nomimalButton1 = document.getElementById('ue1');
nomimalButton1.addEventListener('click', () => {

  nomimalButton1.style.backgroundColor = '#d68c67';
  nomimalButtonRus1.style.backgroundColor = '#ffd6b6';

  const myElement = document.getElementById('newPrice1');
  const content = myElement.textContent;
  const parsContent = content.replace(/\s+/g, '');
  const contentToNumber = parseInt(parsContent, 10);
  const inDoll = Math.floor(contentToNumber / 70);
  myElement.textContent = inDoll + " $";

  const myElementOld = document.getElementById('oldPrice1');
  const contentOld = myElementOld.textContent;
  const parsContentOld = contentOld.replace(/\s+/g, '');
  const contentToNumberOld = parseInt(parsContentOld, 10);
  const inDollOld = Math.floor(contentToNumberOld / 70);
  myElementOld.textContent = inDollOld + " $";

  nomimalButton1.style.pointerEvents = 'none';
  nomimalButtonRus1.style.pointerEvents = 'cursor';
})

const nomimalButtonRus1 = document.getElementById('rus1');
nomimalButtonRus1.addEventListener('click', () => {

  nomimalButton1.style.backgroundColor = '#ffd6b6';
  nomimalButtonRus1.style.backgroundColor = '#d68c67';

  const myElement = document.getElementById('newPrice1');
  const content = myElement.textContent;
  const parsContent = content.replace(/\s+/g, '');
  const contentToNumber = parseInt(parsContent, 10);
  const inDoll = Math.floor(contentToNumber * 70);
  myElement.textContent = inDoll + " ₽";

  const myElementOld = document.getElementById('oldPrice1');
  const contentOld = myElementOld.textContent;
  const parsContentOld = contentOld.replace(/\s+/g, '');
  const contentToNumberOld = parseInt(parsContentOld, 10);
  const inDollOld = Math.floor(contentToNumberOld * 70);
  myElementOld.textContent = inDollOld + " ₽";

  nomimalButtonRus1.style.pointerEvents = 'none';
  nomimalButton1.style.pointerEvents = 'cursor';
})

const nomimalButton2 = document.getElementById('ue2');
nomimalButton2.addEventListener('click', () => {

  nomimalButton2.style.backgroundColor = '#d68c67';
  nomimalButtonRus2.style.backgroundColor = '#ffd6b6';

  const myElement = document.getElementById('newPrice2');
  const content = myElement.textContent;
  const parsContent = content.replace(/\s+/g, '');
  const contentToNumber = parseInt(parsContent, 10);
  const inDoll = Math.floor(contentToNumber / 70);
  myElement.textContent = inDoll + " $";

  const myElementOld = document.getElementById('oldPrice2');
  const contentOld = myElementOld.textContent;
  const parsContentOld = contentOld.replace(/\s+/g, '');
  const contentToNumberOld = parseInt(parsContentOld, 10);
  const inDollOld = Math.floor(contentToNumberOld / 70);
  myElementOld.textContent = inDollOld + " $";

  nomimalButton2.style.pointerEvents = 'none';
  nomimalButtonRus2.style.pointerEvents = 'cursor';
})

const nomimalButtonRus2 = document.getElementById('rus2');
nomimalButtonRus2.addEventListener('click', () => {

  nomimalButton2.style.backgroundColor = '#ffd6b6';
  nomimalButtonRus2.style.backgroundColor = '#d68c67';

  const myElement = document.getElementById('newPrice2');
  const content = myElement.textContent;
  const parsContent = content.replace(/\s+/g, '');
  const contentToNumber = parseInt(parsContent, 10);
  const inDoll = Math.floor(contentToNumber * 70);
  myElement.textContent = inDoll + " ₽";

  const myElementOld = document.getElementById('oldPrice2');
  const contentOld = myElementOld.textContent;
  const parsContentOld = contentOld.replace(/\s+/g, '');
  const contentToNumberOld = parseInt(parsContentOld, 10);
  const inDollOld = Math.floor(contentToNumberOld * 70);
  myElementOld.textContent = inDollOld + " ₽";

  nomimalButtonRus2.style.pointerEvents = 'none';
  nomimalButton2.style.pointerEvents = 'cursor';
})
