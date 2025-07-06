const cart = document.querySelector("#cart-item");
let total  = 0;
for(let i=0;i<localStorage.length;i++)
{
    const key = localStorage.key(i);
    let obj = JSON.parse(localStorage.getItem(key));
    total += obj.price;
    cart.innerHTML += `
    <div class="box">
                <div class="box-img">
                    <img id="service-img" src=${obj.url} alt="">
                </div>
                <p id="service-name">${obj.name}</p>
                <p id="service-price">${obj.price}RS</p> 
                <button onclick='remove(${obj.id})'>Remove</button>
            </div>
    `;
}
cart.innerHTML += `<div class="box"><h1>Total Price : ${total} </h1></div>`;

function remove(id)
{
    localStorage.removeItem(id);
    location.reload();
}