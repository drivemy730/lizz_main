
let shopingCartBtn = document.querySelector(".floating-cart");


window.addEventListener('DOMContentLoaded',onload)
{
    let getHuesosCartFromLocalStorage = JSON.parse(localStorage.getItem("HuesitosDeColores"));
   
}

// function to add product to cart 
document.querySelectorAll('.product-item').forEach((item, index) => 
{
        let btnCounter = 1; 
        let = cartQuantityCounter  = 0; 
        const quantityOfProduct = item.querySelector('.quantity-value');
        const decreaseCartBtn = item.querySelector('.quantity-btn.decrease');
        const increaseCartBtn = item.querySelector('.quantity-btn.increase');
        const addToCartBtn = item.querySelector('.add-to-cart');
        const cartCount = document.querySelector('.cart-count');

        
        // Initialize counter display if you have a span or div for quantity
        if (quantityOfProduct) 
        {
            quantityOfProduct.innerHTML = btnCounter;
        }

        function updateProductQuantity(type) 
        {
            if (type === "increase") 
            {
                btnCounter++;

            } else if (type === "decrease" && btnCounter > 1) 

            {
                btnCounter--;
            }
            if (quantityOfProduct) 
            {
                quantityOfProduct.innerHTML = btnCounter;
            }
        }

        increaseCartBtn.addEventListener('click', () => updateProductQuantity("increase"));
        decreaseCartBtn.addEventListener('click', () => updateProductQuantity("decrease"));

        // Add to cart button logic
        addToCartBtn.addEventListener('click', () => 
        {
            let selectedProductsLocalStorage = JSON.parse(localStorage.getItem('selectedProductsCart')) || [];

                cartQuantityCounter++

                const productDetails = 
                {
                    index: index, 
                    quantity: btnCounter, 
                    productName: item.querySelector('img').alt, 
                    productPrice: item.querySelector('h3').textContent, 
                    productImage: item.querySelector('img').getAttribute('src')
                };
                
                // Add product to the selectedProducts array
                selectedProductsLocalStorage.push(productDetails);
            
                // store in localStorage
                localStorage.setItem('selectedProductsCart', JSON.stringify(selectedProductsLocalStorage));  
                cartCount.innerHTML = cartQuantityCounter;
        });
});

// function to show cart products


shopingCartBtn.addEventListener('click',(event)=>
{
    event.preventDefault();
    let getCartFromLocalStorage = JSON.parse(localStorage.getItem("selectedProductsCart"));
    let virtualCart = document.querySelector(".virtualListCart");

    virtualCart.innerHTML = '';


    getCartFromLocalStorage.forEach((product,position) =>
    {   
        let li = document.createElement('li');
        li.innerHTML = `
        <div class="d-flex">
            <img src="${product.productImage}" alt="${product.productName}" class="product-image" style="width: 50px; height: 50px;">
            <span class="product-name">${product.productName}</span> 
            <span class="product-quantity"> Cantidad: ${product.quantity}</span>
            <button onclick ="deleteProductFromVirtualCart(${position})" "type="button" class=" btn-delete material-symbols-outlined "> delete </button>
        </div>`;
        virtualCart.appendChild(li);

    });
    virtualCart.classList.toggle('show');

})
    


function  deleteProductFromVirtualCart (productToDeletePosition)
{
    let getCartFromLocalStorage = JSON.parse(localStorage.getItem("selectedProductsCart"));
    let btnEliminarProduct = document.querySelectorAll(".btn-delete");
    

    btnEliminarProduct[(productToDeletePosition)].parentElement.remove
}