const cardCalculate = document.querySelectorAll(".card__calculate");

const dropdownList = document.querySelector(".dropdown__list");
const dropdownToggler = document.querySelector(".dropdown__toggler");
const dropdownSearch = document.querySelector(".dropdown__search");
const dropdownTogglerArrow = document.querySelector(".dropdown__toggler-arrow");

const decrease = (count) => {
  count = Number(count);
  if (count > 1) {
    return --count;
  }

  return count;
};

const increase = (count) => {
  count = Number(count);
  return ++count;
};

cardCalculate.forEach((element) => {
  const cardDecrease = element.querySelector(".card__decrease");
  const cardIncrease = element.querySelector(".card__increase");
  const cardCount = element.querySelector(".card__count");

  cardDecrease.addEventListener("click", () => {
    cardCount.innerHTML = decrease(cardCount.innerHTML);
  });

  cardIncrease.addEventListener("click", () => {
    cardCount.innerHTML = increase(cardCount.innerHTML);
  });
});

// dropdown menu

const countries = [
  "Uzbekistan",
  "Russian",
  "France",
  "Spain",
  "Croatia",
  "Germany",
  "UAE",
  "Qatar",
  "Turkey",
  "Polish",
  "Marocco",
  "Senegal",
];

const allCountries = countries
  .map((item) => {
    return `<li>${item}</li>`;
  })
  .join("");

dropdownList.innerHTML = allCountries;

dropdownToggler.addEventListener("click", () => {
  dropdownList.classList.toggle("show");
  dropdownTogglerArrow.classList.toggle("rotate");
});

const renderResults = (results) => {
  if (!results.length) {
    return dropdownList.classList.remove("show")
  }

  let content = results
    .map((item) => {
      return `<li>${item}</li>`;
    })
    .join("");

  dropdownList.classList.add("show");
  dropdownTogglerArrow.classList.add("rotate");
  dropdownList.innerHTML = content;
};

dropdownSearch.addEventListener("keyup", (e) => {
  let results = [];
  let input = dropdownSearch.value;

  if (input.length) {
    results = countries.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  } else {
    results = countries;
  }

  renderResults(results);
});
