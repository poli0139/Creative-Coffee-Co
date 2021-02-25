const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("cat");
const reg = urlParams.get("reg");
let url = "https://keammds2-e80b.restdb.io/rest/coffeeshops";
if (cat) {
  url += '?q={"category" : {"$in" : ["' + cat + '"]}}';
  console.log(url);
}
if (reg) {
  url += '?q={"region" : {"$in" : ["' + reg + '"]}}';
  console.log(url);
}
/*https://mydb-fafc.restdb.io/rest/people?q={​​"name" : {​​"$in" : ["Joe", "Jane", "Donald"]}​​}​​ */

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
    handleProductList(data);
  })
  .catch((e) => {
    //smth went wrong
    console.log("an error occured:", e.message);
  });
function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //grab the template
  const template = document.querySelector("#place-template").content;
  //clone
  const copy = template.cloneNode(true);
  //content
  copy.querySelector(
    ".image"
  ).src = `https://keammds2-e80b.restdb.io/media/${product.images[1]}?s=o`;
  copy.querySelector(".image").alt = product.name;
  copy.querySelector(".name").textContent = product.name;
  copy.querySelector("a").href = `product.html?id=${product._id}`;
  //parent
  const parent = document.querySelector(".list ul");
  //append
  parent.appendChild(copy);
}
