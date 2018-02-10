// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
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
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
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

//Create a function called when you select a color
function changeBgColor() {
  var e = document.getElementById("drop");
  val = e.options[e.selectedIndex].value;
  if (val == "red") {
    document.getElementById('myDIV').style.backgroundColor='red';
  } else if (val == "green") {
    document.getElementById('myDIV').style.backgroundColor='green';
  } else if (val == "orange") {
    document.getElementById('myDIV').style.backgroundColor='orange';
  } else if (val == "yellow") {
    document.getElementById('myDIV').style.backgroundColor='yellow';
  }  else if (val == "blue") {
    document.getElementById('myDIV').style.backgroundColor='blue';
  }  else if (val == "indigo") {
    document.getElementById('myDIV').style.backgroundColor='indigo';
  }  else if (val == "violet") {
    document.getElementById('myDIV').style.backgroundColor='violet';
  }  else if (val == "black") {
    document.getElementById('myDIV').style.backgroundColor='black';
  }
}
