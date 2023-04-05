// Create a trash icon and attach it to each list item 

/* var nodeList = document.getElementsByTagName('li');
var i;
for (i = 0; i < nodeList.length; i++) {
    var span = document.createElement('span');
    var txt = document.createTextNode('\1f5d1');
    span.className = 'remBtn';
    span.appendChild(txt);
    nodeList[i].appendChild(span);
} */


// Click on a trash icon too hide that list item

var remove = document.getElementsByClassName('remBtn');
var i;
for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


// Add a check when any list item is clicked on

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Create new to-do list anytime '+' is clicked

var newToDo = () => {
    var liVar = document.getElementsByTagName('li');
    var inputValue = document.getElementById('myInp').value;
    var t = document.createTextNode(inputValue);
    liVar.appendChild(t);
    if (inputValue === "") {
        alert("Input a new to-do!!!");
    }
    else {
        document.getElementById('myUl').appendChild(li);
    }
    document.getElementById('myInp').value = "";

    var span = document.createElement('span');
    var txt = document.createTextNode('\1f5d1');
    span.className = 'remBtn';
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < remBtn.length; i++) {
        remBtn[i].onclick = function (){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
