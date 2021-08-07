//mouseOver
document.querySelector(".parent").addEventListener("mouseover", function (event) {
    if (event.target.classList.contains('imgs')) {
        showSpecifications(event.target)
    }
})
function showSpecifications(e) {
    let marginLeft = Number(getComputedStyle(e).width.replace("px", "")) / 2;
    let marginTop = Number(getComputedStyle(e).height.replace("px", "")) / 2 + 100;
    let text = document.createElement("span");
    text.setAttribute("id", "specifications")
    text.innerHTML = "View Specifications"
    text.style = `position: absolute;font-size: 20px;color: white;left: ${marginLeft - 80};top: ${marginTop};`;

    e.parentElement.append(text);
};

//mouseOut
document.querySelector(".parent").addEventListener("mouseout", function (event) {
    if (event.target.classList.contains('imgs')) {
        removeSpecifications(event)
    }
})
function removeSpecifications(e) {
    for (let i = 0; i < e.target.parentElement.children.length; i++) {
        if (e.target.parentElement.children[i].id == "specifications") {
            e.target.parentElement.children[i].remove()
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////
// in stock
let borders = document.querySelectorAll(".border");
for (let i = 0; i < borders.length; i++) {
    if (borders[i].getAttribute("onsale")) {
        let borderYpos = borders[i].getBoundingClientRect().top; // metod polucheniya x/y/width/height koordinat dom elementa

        let inStock = document.createElement("div");
        inStock.innerHTML = "inStock"
        inStock.style = `position: absolute;z-index:2;top: ${borderYpos + 15}px;border: 1px solid black;width: 60px;height: 30px;background: #FFE4C4;line-height: 30px;text-align: center;`
        borders[i].prepend(inStock)
    }
}
//////////////////////////////////////////////////////////////////////////////////////
//discount
let motoPrices = document.querySelectorAll(".motoPrice");
for (let i = 0; i < motoPrices.length; i++) {

    if (motoPrices[i].getAttribute("discount")) {
        let motoPrice = motoPrices[i].innerHTML; //9500$
        motoPrice = motoPrice.substring(0, motoPrice.length - 1) //9500
       
        //  motoPrice / 100 * discount
        let discount = document.createElement("del");
        discount.innerHTML = `${Number(motoPrice) + Number(motoPrice) / 100 * Number(motoPrices[i].getAttribute("discount"))}$`;
        motoPrices[i].prepend(discount)
    }
}


