function myFunction(elmnt) {
    if (elmnt.style.color == "red") { elmnt.style.color = "white" }
    else { elmnt.style.color = "red" }
}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}
const btnPlusAray = document.getElementsByClassName("plus");
for (var i = 0; i < btnPlusAray.length; i++) {
    btnPlusAray[i].addEventListener("click", increment);
}
function increment(event) {
    const btnPlus = event.target
    const divElt = btnPlus.parentElement
    const quantityTag = divElt.querySelector("p")
    var quantityValue = parseInt(quantityTag.innerHTML)
    quantityValue++
    quantityTag.innerHTML = quantityValue
    const trElement = divElt.parentElement.parentElement
    //console.log(trElement)
    const UnitePriceValue = Number(trElement.querySelector(".UnitePrice").innerHTML)
    const priceTag = trElement.querySelector(".price")
    var priceValue = Number(priceTag.innerHTML)
    priceValue = quantityValue * UnitePriceValue
    priceTag.innerHTML = priceValue
}



const btnMinusAray = document.getElementsByClassName("minus");
for (var j = 0; j < btnMinusAray.length; j++) {
    btnMinusAray[j].addEventListener("click", decrement);
}
function decrement(event) {
    const btnMinus = event.target
    const divElt = btnMinus.parentElement
    const quantityTag = divElt.querySelector("p")
    var quantityValue = parseInt(quantityTag.innerHTML)
    quantityValue--
    quantityTag.innerHTML = quantityValue
    const trElement = divElt.parentElement.parentElement
    //console.log(trElement)
    const UnitePriceValue = Number(trElement.querySelector(".UnitePrice").innerHTML)
    const priceTag = trElement.querySelector(".price")
    var priceValue = Number(priceTag.innerHTML)
    priceValue = quantityValue * UnitePriceValue
    priceTag.innerHTML = priceValue
}

/*var totalTag = document.getElementById('total')
var total = Number(totalTag.innerHTML)
total += Price
totalTag.innerHTML = total
var btsPlus = trElt.querySelector('.plus')
var btsMin = trElt.querySelector('.minus')
if (btscheck.checked) {
    btsPlus.setAttribute('disabled', true)
    btsMin.setAttribute('disabled', true)
}
else {
    btsPlus.removeAttribute('disabled')
    btsMin.removeAttribute('disabled')
}*/
