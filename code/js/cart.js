
function displayCartProd(){
    
    let cart=JSON.parse(localStorage.getItem('cart')) || []
    let cnt=document.getElementById('cnt')
    let sum=1;
    
    // console.log(cart)
    let cartProd=''
    let totalPrice=0;
    
    console.log(cartProd.length)
    if(cart.length==0){
            cartProd=`
            <img id="empty-cart" src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png">
            `
            document.getElementById('price').innerHTML=''
    }
    else{
        cart.forEach((v,idx) => {
   
            // console.log(v.images[0])
            let price=Math.round(v.price*83.56)-Math.round(v.price*83.56)*v.discountPercentage/100
            totalPrice+=price
            // totalPrice+=v.price
            cartProd+=`
                <div class="cartlist">
                    <img src="${v.images[0]}" alt="${v.title}">    
                <p>Name: ${v.title}</p>
                <p>Price: ${price.toFixed(2)} ₹</p>
                <p>Stock: ${v.stock}</p>
                <div id="qty">Qty:
                    <button id="+">+</button>
                    <span id="num">${0}</span>
                    <button id="-">-</button>
                </div>
                <button onclick="removeProd(${idx})" id='x'>X</button>
                </div>
                `
                document.getElementById('price').innerHTML=`
                <h1 style='align:right;'>Total Price: ${totalPrice.toFixed(2)} ₹</h1>
               `
        });
    }
    cnt.innerHTML=cartProd   
    let num=document.getElementById('num')
    let add=document.getElementById('+')
    let sub=document.getElementById('-')
    add.addEventListener("click", ()=>{
        sum++
        num.textContent=sum
    })
    sub.addEventListener("click", ()=>{
        if(sum>1){
        sum--
        num.textContent=sum
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