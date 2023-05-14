var head = document.createElement("h1");
head.innerHTML = "COVID 19 TRACKER";
head.style.textAlign = "center";
head.style.marginTop = "15%";
document.body.append(head);

var div = document.createElement("div");
div.style.textAlign="center";
var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
input.setAttribute("placeholder","Enter the Country Name");
input.style.width="50%";
input.style.height="45px";
input.style.border="solid orange 3px";

var linebreak = document.createElement("br");

var button = document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-info");
button.style.width="100px";
button.style.height="40px";
button.style.margin="15px";
button.innerHTML="SEARCH";
button.addEventListener("click",display);
var linebreak1 = document.createElement("br");




div.append(input,linebreak,button,linebreak1);
document.body.append(div);

async function display(){
    let res=document.getElementById("country").value;
    let url=`https://api.covid19api.com/dayone/country/${res}`;
    let res1=await fetch(url);
    let res2=await res1.json();
    var index=res2.length-1;
    var result = res2[index].Active;
    div.innerHTML += result;

}