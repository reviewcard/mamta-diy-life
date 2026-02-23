function getProducts(){

let products = localStorage.getItem("products");

return products ? JSON.parse(products) : [];

}


function saveProducts(products){

localStorage.setItem("products", JSON.stringify(products));

}



function addProduct(){

let name = document.getElementById("name").value;
let price = document.getElementById("price").value;
let image = document.getElementById("image").value;
let desc = document.getElementById("desc").value;

let products = getProducts();

products.push({
name,
price,
image,
desc
});

saveProducts(products);

alert("Product Added Successfully");

}



function loadProducts(){

let container = document.getElementById("product-list");

if(!container) return;

let products = getProducts();

container.innerHTML = "";

products.forEach(product=>{

container.innerHTML += `

<div class="product">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<p>${product.desc}</p>

<a href="https://wa.me/919927039737?text=I want ${product.name}"
class="btn">

Order on WhatsApp

</a>

</div>

`;

});

}


loadProducts();
