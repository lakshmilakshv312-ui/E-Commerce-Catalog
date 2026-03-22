const products = [
{ id:1, name:"Laptop", price:50000, category:"electronics"},
{ id:2, name:"Headphones", price:2000, category:"electronics"},
{ id:3, name:"T-Shirt", price:500, category:"clothes"},
{ id:4, name:"Jeans", price:1200, category:"clothes"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts(filter="all"){

const productList = document.getElementById("productList");
productList.innerHTML="";

products
.filter(p => filter==="all" || p.category===filter)
.forEach(product =>{

const div=document.createElement("div");
div.className="product";

div.innerHTML=`
<h3>${product.name}</h3>
<p>Price: ₹${product.price}</p>
<button onclick="addToCart(${product.id})">Add to Cart</button>
`;

productList.appendChild(div);

});
}

function addToCart(id){

const product = products.find(p=>p.id===id);
cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();
}

function displayCart(){

const cartDiv=document.getElementById("cart");
cartDiv.innerHTML="";

let total=0;

cart.forEach(item=>{
cartDiv.innerHTML+=`<p>${item.name} - ₹${item.price}</p>`;
total+=item.price;
});

document.getElementById("total").innerText=total;

}

document.getElementById("categoryFilter")
.addEventListener("change",(e)=>{
displayProducts(e.target.value);
});

displayProducts();
displayCart();