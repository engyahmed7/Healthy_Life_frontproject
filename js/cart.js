let cart=[];
if (localStorage.getItem('cart') != null) {
    document.getElementById('cart-container').classList.remove('d-none')
    document.getElementById('cart-empty').classList.add('d-none')
    cart = JSON.parse(localStorage.getItem('cart'));
    let body='';
    for (let i = 0; i < cart.length; i++) {
        body += `
        <div class='col-md-4'>
        <div class='card'>
            <img src='${cart[i].imgSrc}' class='card-img-top' alt='${cart[i].title}'>
            <div class='card-body'>
            <h5 class='card-title'>${cart[i].title}</h5>
            <p class='card-text'>${cart[i].description}</p>
            <h6>$${cart[i].price}</h6>
            <button onClick=removeFromCart(${i}) class='btn btn-outline-danger'>Remove</button>
            </div>
        </div>
        </div>`
        document.getElementById('cart-items').innerHTML = body;
        
    }
}else{
    document.getElementById('cart-container').classList.add('d-none')
    document.getElementById('cart-empty').classList.remove('d-none')
}


const removeFromCart=(index)=>{
    cart.splice(index,1);
    localStorage.setItem('cart',JSON.stringify(cart));
    location.reload();
}