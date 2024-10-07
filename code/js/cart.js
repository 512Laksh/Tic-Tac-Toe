
let sum=1;

function displayCartProd(){
    
    let cart=JSON.parse(localStorage.getItem('cart')) || []
    let cnt=document.getElementById('cnt')
    
    let cartProd=''
    let totalPrice=0;
    
    
    if(cart.length==0){
            cartProd=`
            <img id="empty-cart" src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png">
            `
            document.getElementById('price').innerHTML=''
    }
    else{
        cart.forEach((v,idx) => {
            let qty=1;
            let price=Math.round(v.price*83.56)-Math.round(v.price*83.56)*v.discountPercentage/100
            totalPrice+=price
            cartProd+=`
                <div class="cartlist">
                    <img src="${v.images[0]}" alt="${v.title}">    
                <p>Name: ${v.title}</p>
                <p>Price: ${Math.round(price)} ₹</p>
                <p>Stock: ${v.stock}</p>
                <div id="qty">Qty:
                    <button id="+">+</button>
                    <span id="num">${qty}</span>
                    <button id="-">-</button>
                </div>
                <button onclick="removeProd(${idx})" id='x'>X</button>
                </div>
                `
                document.getElementById('price').innerHTML=`
                <h1 style='align:right;'>Total Price: ${Math.round(totalPrice*sum)} ₹</h1>
               `
               
        });
    }
    cnt.innerHTML=cartProd   
let num=document.getElementById('num')
let add=document.getElementById('+')
let sub=document.getElementById('-')
    add.addEventListener("click", ()=>{
        sum++
        qty++
        displayCartProd();
    })
    sub.addEventListener("click", ()=>{
        if(sum>1){
        sum--
        qty--
        displayCartProd();
        }
    })
    
}
    
displayCartProd();

function removeProd(idx){
    let array=JSON.parse(localStorage.getItem('cart'))
    array.splice(idx,1)
    localStorage.setItem('cart',JSON.stringify(array))
    displayCartProd();
}