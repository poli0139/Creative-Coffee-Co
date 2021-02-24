const url = "https://keammds2-e80b.restdb.io/rest/coffeeshops";
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
/*<li class="place">
              <a href="product.html"
                ><div class="preview">
                  <img class="image" src="assets/images/image.jpeg" />
                  <h1 class="name">Name of the place</h1>
                </div></a
              >
            </li> */
function showProduct(product) {
  console.log(product);
  //grab the template
  const template = document.querySelector("#place-template").content;
  //clone
  const copy = template.cloneNode(true);
  //content
  copy.querySelector(
    ".image"
  ).src = `https://keammds2-e80b.restdb.io/media/${product.images[1]}?s=w`;
  copy.querySelector(".image").alt = product.name;
  copy.querySelector(".name").textContent = product.name;
  //parent
  const parent = document.querySelector(".list ul");
  //append
  parent.appendChild(copy);
}
