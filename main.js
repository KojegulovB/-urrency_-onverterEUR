fetch(
  "http://api.exchangeratesapi.io/v1/latest?access_key=52455a8d6ad69008e1f0e07661d84b5d"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

const data = {
  date: "2022-06-05",
  rates: {
    AED: 3.8956,
    KGS: 85.968,
    USD: 1.07,
    RUB: 80.3493,
  },
};

const date = data.date.split("-").reverse().join(".") + " Error Server";

const rates = data.rates;

const title = document.querySelector(".title");

const inputEur = document.getElementById("input-eur");

const selectCur = document.getElementById("select-currencies");

const inputCur = document.getElementById("input-currencies");

title.innerHTML = `Currency Converter EUR (${date})`;

for (let key in rates) {
  selectCur.innerHTML += `<option value="${rates[key]}">${key}</option>`;
}

selectCur.addEventListener("change", function (e) {
  let selectVal = e.target.value;
  inputCur.value = inputEur.value * selectVal;
  inputEur.addEventListener("input", function (e) {
    inputCur.value = e.target.value * selectVal;
  });

  inputCur.addEventListener("input", function (e) {
    inputEur.value = e.target.value / selectVal;
  });
});

inputEur.addEventListener("input", function (e) {
  inputCur.value = e.target.value * rates["AED"];
});

inputCur.addEventListener("input", function (e) {
  inputEur.value = e.target.value / rates["AED"];
});
