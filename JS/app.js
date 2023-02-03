
console.log(localStorage.getItem("token"));
if(!localStorage.getItem("token")) {
    window.location.replace("./login.html")
}

const alohida = document.querySelector(".alohida");
const atoadd = document.querySelector("#atoadd");
const addcart = document.querySelector(".addcart");
const brtfy = document.querySelector(".brtfy")
const nh = document.querySelector("#nh"); 
const modalxds = document.querySelector("#modalxds");
const dark = document.querySelector("#dark");
const novkrhf = document.querySelector(".novkrhf");
const body = document.querySelector("body");
const modaljrf = document.querySelector(".modaljrf")
const kopro = document.querySelector(".kopro");
function createcard(id,rasmf, price) {
    const card = document.createElement("div");
    card.className ="card";
    const imgBx  = document.createElement("div");
    imgBx.className = "imgBx"
    const img = document.createElement("img");
    img.setAttribute("src", rasmf);
    const ul = document.createElement("ul");
    ul.className = "action";
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const heart = document.createElement("i");
    heart.className = "fa fa-heart";
    const span1 = document.createElement("span");
    span1.textContent = "Add to Wishlist";
    const shopping = document.createElement("i");
    shopping.setAttribute("data-id", id)
    shopping.className = "fa fa-shopping-cart  jrt";
    const span2 = document.createElement("span");
    span2.textContent = "Add to Cart";
    const eye = document.createElement("i");
    eye.className = "fa fa-eye  frt";
    eye.setAttribute("data-name", id)
    const span3 = document.createElement("span");
    span3.textContent = "View Details";
    const pPrice  = document.createElement("p");
    pPrice.textContent = price;
    card.append(imgBx);
    imgBx.append(img);
    imgBx.append(ul);
    ul.append(li1);
    ul.append(li2);
    ul.append(li3)
    li1.append(heart);
    li1.append(span1);
    li2.append(shopping);
    li2.append(span2);
    li3.append(eye);
    li3.append(span3);
    imgBx.append(pPrice);
    return card;
}

const res = JSON.parse(localStorage.getItem("add"))


dark.addEventListener("click", function() {
    body.classList.toggle("dark-mode")
})

function datacard(rasm,title, price,desk) {
    const card = document.createElement("div");
    card.className ="card2";
    const imgBx  = document.createElement("div");
    imgBx.className = "imgBx"
    const img = document.createElement("img");
    img.setAttribute("src", rasm);
    const titlei = document.createElement('h4');
    titlei.className = "title";
    titlei.textContent = title;
    const pPricee = document.createElement("p");
    pPricee.textContent =` Price:${price}`;
    Pdesk = document.createElement("p");
    Pdesk.textContent = desk;
    Pdesk.className = 'desk';
    card.append(imgBx);
    imgBx.append(img);
    imgBx.append(titlei)
    imgBx.append(Pdesk)
    imgBx.append(pPricee)
    return card;
}
atoadd.addEventListener("click", function() {
    addcart.classList.add("tras");
})
nh.addEventListener("click", function() {
    addcart.classList.remove("tras");
})
modalxds.addEventListener("click", function() {
    modaljrf.classList.remove("flex");
    modaljrf.classList.add("d-none");
})

let kor = JSON.parse(localStorage.getItem('add'));
const modal = [];
const korzina = [];
async function createdata() {
    let response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    data.map((item) => {
        alohida.append(createcard(item.id,item.image))
    });
    alohida.addEventListener("click", function(e) {
        if(e.target.classList.contains("jrt"))  {
            const id = e.target.dataset.id
            const targetdt = data.find((item) => item.id == id) ;
            korzina.push(targetdt);
            brtfy.innerHTML = ""
            korzina.forEach((item) => {
                brtfy.append(datacard(item.image,item.title,item.price))
            })
            localStorage.setItem("add", JSON.stringify(korzina))
        } else if(e.target.classList.contains("frt")) {
            const di = e.target.dataset.name;
            console.log(di);
            const eyetarget = data.find((item) => item.id == di);
            modal.push(eyetarget);
            console.log(modal);
            modaljrf.classList.add("flex");
            modaljrf.classList.remove("d-none")
            for(let i = 0;i<modal.length; i++) {
                novkrhf.innerHTML = "";
                novkrhf.append(datacard(modal[i].image,modal[i].title,modal[i].price,data[i].description))
            }
            
        }
    });
    for(let i = 0 ; i <res.length;i++) {
        console.log(res);
        brtfy.append(datacard(res[i].image,res[i].title,res[i].price))
    } 
}

createdata();