let hair = [
    {
        id : 0,
        url : "../assets/services/hair/haircut.jpg",
        name : "Haircut",
        price : 150
    },
    {
        id : 1,
        url : "../assets/services/hair/styling.jpg",
        name : "Styling",
        price : 70
    },
    {
        id : 2,
        url : "../assets/services/hair/colouring.jpg",
        name : "Coloring",
        price : 100
    },
    {
        id : 3,
        url : "../assets/services/hair/perms.jpg",
        name : "Perms",
        price : 80
    },
    {
        id : 4,
        url : "../assets/services/hair/treatment.jpg",
        name : "Treatments",
        price : 200
    },
    
];

let skincare = [
    {
        id : 5,
        url : "../assets/services/skincare/facials.jpg",
        name : "Facials",
        price : 250
    },
    {
        id : 6,
        url : "../assets/services/skincare/waxing.jpg",
        name : "Waxing",
        price : 150
    },
    {
        id : 7,
        url : "../assets/services/skincare/threading.jpg",
        name : "Threading",
        price : 50
    },
];

let nail = [
    {
        id : 8,
        url : "../assets/services/nail/manicures.jpg",
        name : "Manicures",
        price : 180
    },
    {
        id : 9,
        url : "../assets/services/nail/pedicure.jpg",
        name : "Pedicures",
        price : 220
    },
    {
        id : 10,
        url : "../assets/services/nail/gelpolish.jpg",
        name : "Gel polish",
        price : 100
    },
    {
        id : 11,
        url : "../assets/services/nail/acrylicnails.jpg",
        name : "Acrylic nails",
        price : 100
    },
];

let spa = [
    {
        id : 12,
        url : "../assets/services/spa/massages.jpg",
        name : "Massages",
        price : 500
    },
    {
        id : 13,
        url : "../assets/services/spa/massages.jpg",
        name : "Body scrubs",
        price : 400
    },
    {
        id : 14,
        url : "../assets/services/spa/aromatherapy.jpg",
        name : "Aromatherapy",
        price : 300
    },
    {
        id : 15,
        url : "../assets/services/spa/hydrotherapy.png",
        name : "Hydrotherapy",
        price : 800
    },

];

const service_box = document.getElementById("service-boxes");

function showServices(arr)
{
    service_box.innerHTML = "";
    arr.map((obj)=>{
        service_box.innerHTML += `
            <div class="box">
                    <div class="box-img">
                        <img id="service-img" src=${obj.url} alt="">
                    </div>
                    <p id="service-name">${obj.name}</p>
                    <p id="service-price">${obj.price}RS</p> 
                    <button onclick='addtocart(${obj.id})'>Add To Cart</button>
                </div>
        `
    })
}
showServices(hair);


let index=0;
let arr = [...hair,...skincare,...nail,...spa];
function addtocart(obj)
{
    localStorage.setItem(obj,JSON.stringify(arr[obj]));
    console.log(JSON.parse( localStorage.getItem(obj)));
    alert("service added to the cart");
}
