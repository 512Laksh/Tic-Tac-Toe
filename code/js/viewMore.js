let id=localStorage.getItem('id')
console.log(id)
let prod=localStorage.getItem('all_product')
let allProduct=JSON.parse(prod)
let finalProduct=[]
allProduct.forEach((product,idx) => {
    if(id==product.id){
        finalProduct.push(allProduct[idx])
    } 
});
let price=Math.round(finalProduct[0].price*83.56)-Math.round(finalProduct[0].price*83.56)*finalProduct[0].
discountPercentage/100

let cnt=document.getElementById('container')
let html=`
        <div class="prod">
            <a href='Home.html'><div id='prod-img'>       
                <img id="img" src="${finalProduct[0].images[0]}" alt="">          
            </div></a>
            <div id='detail'>
                <div class="details">
                    <h1>Title: ${finalProduct[0].title}</h1>
                    <h1>Brand: ${finalProduct[0].brand}</h1>
                    <p><b>Description:</b> ${finalProduct[0].description}</p>                  
                    <b>Quantity: ${finalProduct[0].minimumOrderQuantity}</b><br><br>
                    <b>Stock: ${finalProduct[0].stock}</b><br><br>
                    <b>Warranty: ${finalProduct[0].warrantyInformation}</b><br><br>
                    <b>Delivery Information: ${finalProduct[0].shippingInformation}</b><br><br>
                    <div class='rating'>${finalProduct[0].rating} ★</div>
                    
                    <div class='price'>
                    <b style='margin-right:20px; font-size:xx-large''>Price:${Math.round(price)}  ₹</b>
                    <p style='margin-right:20px;'><strike>${Math.round(finalProduct[0].price*83.56)}₹</strike></p>
                    <p style='color:#41f41ddb;font-size:x-large'>${finalProduct[0].discountPercentage} % discount<p/><br><br>
                    </div>
                    <button id="cart-btn">Add to Cart</button><br><br>
                    <hr>
                </div>
                <div style='margin-left:20px; '><h1>Top reviews</h1></div>
                <div id='review'></div>
            </div>
        </div>

        
`

cnt.innerHTML=html;
let review=finalProduct[0].reviews



let rcnt=document.getElementById('review')
let reviewDiv=''
review.forEach((v,i)=>{
    reviewDiv+=`
    <div class="rdiv">
    <div class="rname">
            <img id="rimg" src="https://tse2.mm.bing.net/th?id=OIP._0nj-VCGpTVBUPZYf0UHYAHaHa&pid=Api&P=0&h=180" alt="" >
            <span id='span'><b>${v.reviewerName}</b></span>
        </div>
        <p><b>Email:</b> ${v.reviewerEmail}</p>
        <div class='r-rating'>${v.rating} ★</div>
        <p><b>Comment:</b> ${v.comment}</p>
        <p><b>Reviewd on:</b> ${v.date}</p>
    </div>
    `
    
})
rcnt.innerHTML=reviewDiv

document.getElementById('cart-btn').addEventListener('click',()=>{
    addcart(finalProduct[0])
})
function addcart(obj){
    let cartProd = JSON.parse(localStorage.getItem('cart')) || [];
    
    if(cartProd.find((v)=>v.id==obj.id)){
        alert('the product is already added in the cart')
    }
    else{
        cartProd.push(obj);
        localStorage.setItem('cart', JSON.stringify(cartProd));
        alert('product has been added to the cart');
        window.location.href='cart.html'        
    }
 }
    






