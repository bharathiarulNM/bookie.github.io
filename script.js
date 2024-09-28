var addbutton = document.getElementById("add-pop-button");
var popoverlay = document.querySelector(".overlay");
var ppopup = document.querySelector(".popup");

addbutton.addEventListener("click", function() {
   popoverlay.style.display = "block";
   ppopup.style.display = "block";
});

var cancelbutton = document.getElementById("can-btn");
cancelbutton.addEventListener("click", function(event) {
   event.preventDefault();
   popoverlay.style.display = "none";
   ppopup.style.display = "none";
});

var con = document.querySelector(".container");
var tit = document.getElementById("title-input");
var aut = document.getElementById("author-input");
var des = document.getElementById("des-input");

var addibutton = document.getElementById("add-btn");
addibutton.addEventListener("click", function(event) {
   event.preventDefault();

   var div = document.createElement("div");
   div.setAttribute("class", "book-container");

   // Use the .value property to get the input values
   div.innerHTML = `
      <h1>${tit.value}</h1>
      <h3>${aut.value}</h3>
      <p>${des.value}</p>
      <button id="del" onclick="deletebook(event)">delete</button>`;

   con.append(div);
   
   // Hide the popup after adding the content
   popoverlay.style.display = "none";
   ppopup.style.display = "none";
});
function deletebook(event)
{
    event.target.parentElement.remove()
}