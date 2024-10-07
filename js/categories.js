const categories = [
    {name:"iPhone", image: "iphone.png"},
    {name:"iPad", image: "ipad.png"},
    {name:"Mac", image: "mac.png"},
    {name:"Watch", image: "watch.png"},
    {name:"AirPods", image: "airpods.png"},
    {name:"Accessories", image: "accessories.png"},
]

let listCategoriesHTML = ''

categories.forEach(item => {
    listCategoriesHTML += `
    <div class="box col-4 col-md-3 col-lg-2">
        <div class="image">
            <img src="imgs/Image/categories/${item.image}" alt="category-image">
        </div>
        <h4>${item.name}</h4>
    </div>
    `
})

$('#list-categories').html(listCategoriesHTML);
