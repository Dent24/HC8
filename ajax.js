var contant = document.getElementById("contant");

var xhr = new XMLHttpRequest();
xhr.open("GET","./data.txt",true);
xhr.send();

xhr.onload = () => {
    contant.innerText = xhr.responseText;
}