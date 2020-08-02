var contant = document.getElementById("contant");

var xhr = new XMLHttpRequest();
xhr.open("GET","./data.txt",true);
xhr.send();

xhr.onload = () => {
    contant.innerText = xhr.responseText;
}

var product = document.getElementById("product");
var price = document.getElementById("price")

var xhrJson = new XMLHttpRequest();
xhrJson.open("GET","./data.json",true);
xhrJson.send();

xhrJson.onload = () => {
    var x = JSON.parse(xhrJson.responseText);
    product.innerText = "產品名稱:" + x["product"];
    price.innerText = "產品價格:" + x["price"];
}