/*const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);
//const id = "6033d7b46afd463c00005740";
const url = "https://keammds2-e80b.restdb.io/rest/coffeeshops/" + id;*/
//api key

const options = {
  headers: {
    "x-apikey": "6034067d5ad3610fb5bb6522",
  },
};
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    //we have the data
    console.log(data);
    showProduct(data);
  })
  .catch((e) => {
    //smth went wrong
    console.log("an error occured:", e.message);
  });
//populate the page
function showProduct(product) {
  console.log(product);
  document.querySelector(".name").textContent = product.name;
  document.querySelector(".city").textContent = `${product.city},
    ${product.country}`;
  document.querySelector(".about-place").textContent = product.description;
  document.querySelector(
    ".image"
  ).style.backgroundImage = ` url("https://keammds2-e80b.restdb.io/media/${product.images[0]}?s=w")`;
  document.querySelector(
    ".img-1"
  ).style.backgroundImage = ` url("https://keammds2-e80b.restdb.io/media/${product.images[0]}?s=w")`;
  document.querySelector(
    ".img-2"
  ).style.backgroundImage = ` url("https://keammds2-e80b.restdb.io/media/${product.images[1]}?s=w")`;
  document.querySelector(
    ".img-3"
  ).style.backgroundImage = ` url("https://keammds2-e80b.restdb.io/media/${product.images[2]}?s=w")`;
}
