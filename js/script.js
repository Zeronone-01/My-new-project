function formatMoney() {
    const elements = document.querySelectorAll('.call_money'); // Lấy tất cả các phần tử có class là "call_money"
    elements.forEach(element => {
        const text = element.textContent.trim(); // Lấy nội dung của phần tử và loại bỏ khoảng trắng
        const number = parseInt(text.replace(/\D/g, '')); // Lấy giá trị số từ chuỗi và loại bỏ ký tự không phải số
        if (!isNaN(number)) { // Kiểm tra xem có phải là số hay không
            const formattedMoney = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number); // Định dạng số tiền thành tiền tệ Việt Nam (VND)
            element.textContent = formattedMoney; // Thay đổi nội dung của phần tử thành số tiền đã được định dạng
        }
    });
}

function setCookie(name, value) {
    var date = new Date();
    // Đặt cookie tồn tại trong 20 năm
    date.setTime(date.getTime() + (20*365*24*60*60*1000));
    var expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function getCartItemCount() {
    var cartCookie = getCookie('cart');
    if (cartCookie) {
        var cart = JSON.parse(cartCookie);
        return cart.length;
    }
    return 0;
}

function resetCheckoutCookie() {
    var emptyArray = JSON.stringify([]);
    var date = new Date();
    date.setTime(date.getTime() + (20*365*24*60*60*1000)); // Thời gian sống của cookie (20 năm)
    var expires = "; expires=" + date.toUTCString();
    document.cookie = "checkout=" + emptyArray + expires + "; path=/;";
}

function renderCart() {
    const cart = JSON.parse(getCookie('cart') || '[]');
    let cartHtml = '';
    let xx = `<div class="d-flex align-content-center py-3">
    <div class="d-flex justify-content-center" style="width: 10%;">
        <p class="p-0 m-0"></p>
    </div>
    <div class="d-flex justify-content-center" style="width: 20%;">
        <p class="p-0 m-0" style="font-weight: 700; font-size:15px;">Image</p>
    </div>
    <div class="d-flex justify-content-center" style="width: 25%;">
        <p class="p-0 m-0" style="font-weight: 700; font-size:15px;">Product</p>
    </div>
    <div class="d-flex justify-content-center" style="width: 15%;">
        <p class="p-0 m-0" style="font-weight: 700; font-size:15px;">Price</p>
    </div>
    <div class="d-flex justify-content-center" style="width: 20%;">
        <p class="p-0 m-0" style="font-weight: 700; font-size:15px;">Qty</p>
    </div>
    <div class="d-flex justify-content-center" style="width: 10%;">
        <p class="p-0 m-0" style="font-weight: 700; font-size:15px;">Delete</p>
    </div>
</div>`

    cart.forEach(product => {
        cartHtml += `
        <div class="d-flex justify-content-lg-around" style=" margin-bottom:10px; ">
            <div class="d-flex justify-content-center align-items-center" style="width: 10%;">
                <input data-id="${product.id}" style="width: 15px; height:15px;" type="checkbox" />
            </div>
            <div class="d-flex justify-content-center" style="width: 20%;">
                <img src="${product.image}" width="128" >
            </div>
            <div class="d-flex justify-content-center" style="width: 25%;">
                <div class="container-fluid d-flex flex-column">
                    <p style="font-weight: 700; font-size:16px;">${product.name}
                    </p>
                    <p style="font-weight: 400; font-size:12px;">Color: ${product.color}</p>
                    <p style="font-weight: 400; font-size:12px;">Statement: ${product.statement}</p>
                </div>
            </div>
            <div class="d-flex justify-content-center" style="width: 15%;">
                <p  style="font-weight: 700; font-size:16px;">${product.price}₫ </p>
            </div>
            <div class="d-flex justify-content-center" style="width: 20%;">
                <div class="d-flex justify-content-between align-content-center p-2" style="border-radius:10px; background-color:#D9D9D9; width:140px; height:36px; ">
                    <p data-id="${product.id}" class="plus-button p-0 m-0" style="font-weight: 700; font-size:15px; cursor:pointer">+</p>
                    <p class="p-0 m-0" style="font-weight: 700; font-size:15px;">${product.number}</p>
                    <p data-id="${product.id}" class="minus-button p-0 m-0" style="font-weight: 700; font-size:15px; cursor:pointer;">-</p>
                </div>
            </div>
            <div class="d-flex justify-content-center" style="width: 10%;">
                <svg class="delete-button" data-id="${product.id}" style="cursor: pointer;" width="18"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="red" d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/>
                </svg>
            </div>
        </div>
        `;
    });
    cartHtml = xx + cartHtml;
    $('#cart').html(cartHtml);

    var itemCount = getCartItemCount();
    $('#len_cart').html(`<span id="len_cart" style="font-size: 10px;">${itemCount}</span>`);
}

function renderCheckout() {
    const cart = JSON.parse(getCookie('checkout') || '[]');
    let cartHtml = '';

    cart.forEach(product => {
        cartHtml += `
        <div class="container-fluid d-flex justify-content-between align-items-center px-4">
            <p style="font-weight: 700; font-size:16px;">${product.name}</p>
            <p style="font-weight: 600; font-size:16px;">Quantity: ${product.number}</p>
            <p style="font-weight: 600; font-size:16px;">Price: ${product.price}₫</p>
        </div>
        `;
    });
    $('#list_buy').html(cartHtml);
}

$(document).ready(function() {
    const products = [
        {   
            "id":1,
            "image": "http://127.0.0.1:5501/Image/image_prd_list/1.png",
            "name": "Screen protector for iphone 13",
            "price": "250.000",
            "color":"Pink",
            "statement":"New",
            "number":1
        },
        {
            "id":2,
            "image": "http://127.0.0.1:5501/Image/image_prd_list/2.png",
            "name": "AIRPODS PRO",
            "price": "4.590.000",
            "color":"Pink",
            "statement":"New",
            "number":1
        },
        {   
            "id":3,
            "image": "http://127.0.0.1:5501/Image/image_prd_list/3.png",
            "name": "Charge 20W",
            "price": "490.000",
            "color":"Pink",
            "statement":"New",
            "number":1
        },
        {
            "id":4,
            "image": "http://127.0.0.1:5501/Image/image_prd_list/4.png",
            "name": "Iphone 13 Case",
            "price": "1.300.000",
            "color":"Pink",
            "statement":"New",
            "number":1
        }
    ];

    let productListHtml = '';

    products.forEach(product => {
        productListHtml += `
        <div class="d-flex flex-column justify-content-center align-items-center px-2" style="width:25%;">
            <div class="d-flex justify-content-center align-content-center" style="min-height:255px; max-height:255px;">
                <img src="${product.image}" alt="${product.name}" style="width:100%;"/>
            </div>
            <div class="d-flex flex-column justify-content-between align-items-center mt-2">
                <p style="font-weight: 900; font-size:16px;">${product.name}</p>
                <p style="font-weight: 700; font-size:20px; color:#2D75C7;">${product.price}₫</p>
                <button class="buy-button" data-id="${product.id}" style="font-weight: 500; font-size:13px; color:white; background-color:#000000; width: 215px; height: 40px; border-radius:10px;">
                    Buy
                </button>
            </div>
        </div>
        `;
    });

    $('#list_product').html(productListHtml);

    // Khi bấm vào nút "Buy"
    $('.buy-button').click(function() {
        const productId = $(this).data('id');
        const product = products.find(p => p.id === productId);

        if (product) {
            let cart = JSON.parse(getCookie('cart') || '[]');
            // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
            if (!cart.find(p => p.id === productId)) {
                cart.push(product);
                setCookie('cart', JSON.stringify(cart));
                renderCart();
                resetCheckoutCookie();
                calculateCheckoutTotal();
            }
        }
    });

    // Xóa mặt hàng khỏi giỏ hàng khi bấm vào nút SVG có class delete-button
    $(document).on('click', '.delete-button', function() {
        const productId = $(this).data('id'); // Lấy id từ data-id của nút xóa
        let cart = JSON.parse(getCookie('cart') || '[]');
        cart = cart.filter(product => product.id !== productId);
        setCookie('cart', JSON.stringify(cart));
        renderCart(); // Cập nhật lại giỏ hàng
        resetCheckoutCookie();
        calculateCheckoutTotal();
    });

    // Xử lý sự kiện tăng số lượng sản phẩm
    $(document).on('click', '.plus-button', function() {
        const productId = $(this).data('id');
        let cart = JSON.parse(getCookie('cart') || '[]');
        const index = cart.findIndex(product => product.id === productId);
        if (index !== -1) {
            cart[index].number += 1;
            setCookie('cart', JSON.stringify(cart));
            renderCart();
        }
        resetCheckoutCookie();
        calculateCheckoutTotal();
    });

    // Xử lý sự kiện giảm số lượng sản phẩm
    $(document).on('click', '.minus-button', function() {
        const productId = $(this).data('id');
        let cart = JSON.parse(getCookie('cart') || '[]');
        const index = cart.findIndex(product => product.id === productId);
        if (index !== -1) {
            if (cart[index].number > 1) {
                cart[index].number -= 1;
                setCookie('cart', JSON.stringify(cart));
                renderCart();
            } else {
                alert("Số lượng sản phẩm không thể giảm thêm.");
                // hoặc bạn có thể thực hiện hành động khác ở đây, như không làm gì cả
            }
        }
        resetCheckoutCookie();
        calculateCheckoutTotal();
    });

    // Hàm tính tổng số lượng và tổng số tiền từ giỏ hàng "checkout"
    function calculateCheckoutTotal() {
        const checkoutCart = JSON.parse(getCookie('checkout') || '[]');
        let totalQuantity = 0;
        let totalPrice = 0;

        checkoutCart.forEach(product => {
            totalQuantity += product.number;
            totalPrice += parseFloat(product.price.replace('.', '').replace('₫', '')) * product.number;
        });

        $('#total_quantity').html(totalQuantity);
        $('#total_money').html(totalPrice);
        $('#list_total_money').html(totalPrice);
        return { totalQuantity, totalPrice };
    }

    // Xử lý sự kiện checkbox để thêm hoặc xóa sản phẩm khỏi giỏ hàng "checkout"
    $(document).on('change', 'input[type="checkbox"]', function() {
        const productId = $(this).data('id');
        let cartProducts = JSON.parse(getCookie('cart') || '[]');
        let checkoutCart = JSON.parse(getCookie('checkout') || '[]');
    
        const product = cartProducts.find(p => p.id === productId);
        
        if ($(this).is(':checked')) {
            // Nếu checkbox được chọn, thêm sản phẩm vào giỏ hàng "checkout"
            if (product) {
                checkoutCart.push(product);
            }
        } else {
            // Nếu checkbox không được chọn, loại bỏ sản phẩm khỏi giỏ hàng "checkout"
            checkoutCart = checkoutCart.filter(product => product.id !== productId);
        }
    
        // Lưu giỏ hàng "checkout" vào cookie
        setCookie('checkout', JSON.stringify(checkoutCart));
        calculateCheckoutTotal();
        formatMoney();
    });

    // // Xử lý sự kiện khi trang sắp được làm mới (refresh)
    // $(window).on('beforeunload', function() {
    //     // Xóa cookie "checkout"
    //     resetCookie('checkout');
    // });

    // // Hàm xóa cookie
    // function resetCookie(name) {
    //     var date = new Date();
    //     date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000)); // Set thời gian sống của cookie về quá khứ (một ngày trước đó)
    //     var expires = "; expires=" + date.toUTCString();
    //     document.cookie = name + '=' + expires + '; path=/;';
    // }

    // Hiển thị giỏ hàng khi trang được tải
    renderCart();
    renderCheckout();
    calculateCheckoutTotal();
    formatMoney();
});
