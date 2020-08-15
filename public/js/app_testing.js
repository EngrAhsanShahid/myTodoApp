var list = document.getElementById("list");
function addTodo(){
    var todo_item = document.getElementById("todo-item");
    
    //li
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value);

    //delbutton
    var delBtn = document.createElement("button");
    var delBtnText = document.createTextNode("Delete");
    delBtn.setAttribute("class", "delbtn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delBtnText)

    //editbutton
    var editBtn = document.createElement("button");
    var editBtnText = document.createTextNode("Edit");
    editBtn.setAttribute("class", "editBtn")
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.appendChild(editBtnText)

    li.appendChild(liText);
    li.appendChild(editBtn);
    li.appendChild(delBtn);

    console.log(li)
    list.appendChild(li);
    
    todo_item.value = "";
}

function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var value = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter  Edit Value", value);

    e.parentNode.firstChild.nodeValue = editValue;
    console.log(e.parentNode.firstChild);
}


function delAllTodo(){
    list.innerHTML = "";
}