console.log("script running");

let totalInCents = 0;
let items = 0;
let appleCount = 0;
let bananaCount = 0;
let mangoCount = 0;
let leImposter = 0;

const appleButton = document.querySelector("#apple");
const bananaButton = document.querySelector("#banana");
const mangoButton = document.querySelector("#mango");
const imposterButton = document.querySelector("#imposter");
const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");
const itemize = document.querySelector("#item-counter");

const clearButton = document.querySelector("#clear-button");

console.log(appleButton, bananaButton, mangoButton, imposterButton, shoppingCart, totalSpan);

const updateTotal = () => {
  totalSpan.innerHTML = totalInCents/100;
};

const updateItems = () => {
     var items = appleCount + bananaCount + mangoCount + leImposter;
    //[];
    itemize.innerHTML = items;
    
     
    // console.log(appleCount);
};

const addApple = () => {
 
  shoppingCart.innerHTML = `<li>Apple</li>`;
  totalInCents += 75;
  appleCount += 1;
  // console.log("Apple",appleCount);
  updateTotal();
  updateItems();
};
appleButton.addEventListener("click", addApple);
function ApplePen() {
  let x = document.forms["appleForm"]["apple"].value;
};
const addBanana = () => {
  shoppingCart.innerHTML = `<li>Banana</li>`;
  totalInCents += 30;
  bananaCount += 1;
  updateTotal();
  updateItems();
};
bananaButton.addEventListener("click", addBanana);

const addMango = () => {
  shoppingCart.innerHTML = `<li>Mango</li>`;
  totalInCents += 125;
  mangoCount += 1;
  updateTotal();
  updateItems();
};
mangoButton.addEventListener("click", addMango);

//imposter
const addImposter = () => {
  shoppingCart.innerHTML += `<p>Imposter</p>`;
  totalInCents += 225;
  leImposter += 1;
  updateTotal();
  updateItems();
};
imposterButton.addEventListener("click", addImposter);

const emptyCart = () => {
  shoppingCart.innerHTML = '';
  totalInCents = 0;
  updateTotal();
}
clearButton.addEventListener("click", emptyCart);

console.log(appleCount);  
//p3
// total.addEventListener("click", updateTotal());



