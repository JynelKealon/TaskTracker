// close button 
var list = document.getElementsByTagName("li");
var i;
for (i = 0; i < list.length; i++) {
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "exit";
    span.appendChild(text);
    list[i].appendChild(span);
}

// click on close button to hide list items 
var exit = document.getElementsByClassName("exit");
var i;
for (i = 0; i < exit.length; i++) {
    exit[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//Adds a check when a task item is selected
var listItem = document.querySelector('ul');
listItem.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'li' ){
        ev.target.classList.toggle('checked');
    }
}, false);


// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
        console.log("I'm here");
      document.getElementById("taskList").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }