console.log("SCRIPT IS RUNNING");
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-nav');
const navigationLinks = document.querySelectorAll('.main-nav a');
const quoteForm = document.querySelector('#quote-form');
const formMessage = document.querySelector('#form-message');
const currentYear = document.querySelector('#current-year');

currentYear.textContent = new Date().getFullYear();

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? 'Close' : 'Menu';
});

navigationLinks.forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = 'Menu';
  });
});

quoteForm.addEventListener('submit', event => {
  event.preventDefault();
  formMessage.textContent = 'The form layout works. We will connect it to real email later.';
});
// SHOP SEARCH + FILTERING

const shopSearch = document.querySelector("#shop-search");

const filterButtons =
  document.querySelectorAll(".filter-button");

const productCards =
  document.querySelectorAll(".luxury-product-card");


let activeFilter = "all";


function filterProducts() {

  if (!shopSearch) return;

  const searchText =
    shopSearch.value.toLowerCase().trim();


  productCards.forEach((card) => {

    const name =
      card.dataset.name.toLowerCase();

    const category =
      card.dataset.category.toLowerCase();


    const matchesSearch =
      name.includes(searchText);


    const matchesCategory =
      activeFilter === "all" ||
      category.includes(activeFilter);


    if (matchesSearch && matchesCategory) {

      card.classList.remove("hidden-product");

    } else {

      card.classList.add("hidden-product");

    }

  });

}


if (shopSearch) {

  shopSearch.addEventListener(
    "input",
    filterProducts
  );

}


filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });


    button.classList.add("active");

    activeFilter =
      button.dataset.filter;

    filterProducts();

  });

});

// =====================================
// BADGE DESIGN STUDIO
// =====================================

const badgeTextInput = document.querySelector("#badge-text");
const backgroundColourInput = document.querySelector("#background-colour");
const textColourInput = document.querySelector("#text-colour");
const metalColourSelect = document.querySelector("#metal-colour");

const badgePreview = document.querySelector("#badge-preview");
const badgePreviewText = document.querySelector("#badge-preview-text");
const badgeInner = document.querySelector(".badge-inner");

const shapeButtons = document.querySelectorAll(".shape-button");

// Live text
if (badgeTextInput) {
  badgeTextInput.addEventListener("input", () => {
    badgePreviewText.textContent =
      badgeTextInput.value || "YOUR CLUB";
  });
}

// Background colour
if (backgroundColourInput) {
  backgroundColourInput.addEventListener("input", () => {
    badgeInner.style.backgroundColor =
      backgroundColourInput.value;
  });
}

// Text colour
if (textColourInput) {
  textColourInput.addEventListener("input", () => {
    badgePreviewText.style.color =
      textColourInput.value;
  });
}

// Metal finish
if (metalColourSelect) {
  metalColourSelect.addEventListener("change", () => {
    badgePreview.style.backgroundColor =
      metalColourSelect.value;
  });
}

// Shape buttons
shapeButtons.forEach(button => {

  button.addEventListener("click", () => {

    shapeButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    badgePreview.classList.remove(
      "round",
      "oval",
      "rectangle"
    );

    badgePreview.classList.add(
      button.dataset.shape
    );

  });

});