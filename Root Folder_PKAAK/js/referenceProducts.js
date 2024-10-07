const products = [
    {name:"iPhone 15 Pro Max 1TB", price: 850, image: "1.png"},
    {name:"IPAD PRO 12.9", price: 750, image: "2.png"},
    {name:"MACBOOK PRO 14", price: 750, image: "3.png"},
    {name:"AIRPODS PRO", price: 90, image: "4.png"},
]

let listProductsHTML = ''

products.forEach(item => {
    listProductsHTML += `
    <div class="box col-6 col-md-4 col-lg-3">
        <div class="image">
            <img src="imgs/Image/references/${item.image}" alt="reference-image">
        </div>
        <h4>${item.name}</h4>
        <p>Reference price: ${item.price}</p>
    </div>
    `
})

$('#reference-products').html(listProductsHTML);

function openPopUp() {
    document.getElementById("popup").style.display = "block";
}
  
function closePopUp() {
    document.getElementById("popup").style.display = "none";
}