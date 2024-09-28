fetch("https://dummyjson.com/products").then((e)=>e.json()).then((e)=>{
    
    let products=e.products;
    let products_json=JSON.stringify(products)
    localStorage.setItem('all_product',products_json)
    

    let main=document.getElementById('main')
    let container=''
    products.forEach(v => {
        container=container+`
        <div class="product-card">
            <div class="product_img">
                <img id="product_img" src="${v.images[0]}" alt="${v.title}">
            </div>
            <div class='details'>
                <h3 style="margin-top:10px; margin-bottom:10px">${v.title}</h3>
                <div class='btn'>
                    <button>Buy Now</button>
                    <button onclick="viewmore(${v.id})">View More</button>
                </div>
            </div>
        </div>
        `       
    });
main.innerHTML=container
// console.log(products)



document.getElementById('search').addEventListener('submit',(e)=>{
    e.preventDefault()
    let val = document.getElementById('search-bar').value
    let searchRes = products.filter((x)=>{
        return x.title.toLowerCase().includes(val.toLowerCase())
    })
    let searchCnt=''
    if(searchRes.length>0){
        searchRes.forEach(v=>{
            searchCnt+=`
            <div class="product-card">
            <div class="product_img">
                <img id="product_img" src="${v.images[0]}" alt="${v.title}">
            </div>
            <div class='details'>
                <h3 style="margin-top:10px; margin-bottom:10px">${v.title}</h3>
                <div class='btn'>
                    <button>Buy Now</button>
                    <button onclick="viewmore(${v.id})">View More</button>
                </div>
            </div>
        </div>
            `
        })
        main.innerHTML=searchCnt
    }
    else{
        alert('no results found')
    }
    // console.log(searchRes)
})

document.getElementById('search-bar').addEventListener('change',()=>{
    main.innerHTML=container
})
// main.innerHTML=container
// document.getElementById('search').addEventListener('submit',(e)=>{
//     e.preventDefault()
//     let val=document.getElementById('search-bar').value
//     let saerchRes=products.filter((x)=>{
//         let a=x.title
//         a.search(`${val}`)
//         // console.log(a)
//     })
//     console.log(saerchRes)
// })
})

function viewmore(id){
    localStorage.setItem('id',id)
    window.location.href='viewMore.html'
}

document.getElementById('loginBtn').addEventListener('click',()=>{
    window.location.href='login.html'
})




    

