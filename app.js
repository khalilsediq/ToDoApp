const input = document.querySelector("#input");
const ol = document.querySelector("#ol")
const allArray = [];

function onResult() {
    // ol.innerHTML = input.value;
    ol.innerHTML = "";
    for (let i = 0; i < allArray.length; i++) {
        ol.innerHTML += `<li>${allArray[i]}
         <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>`;
    }
}
function addTodo() {
if(input.value === ""){
       console.log("zoy khali choor kai gand render karo ");
        
    }else{
         allArray.push(input.value);

    onResult();
    input.value = "";
    }

   
}

function deleteTodo(index) {
  console.log("todo deleted", index);
  allArray.splice(index, 1);
  onResult();
}
function editTodo(index) {
  console.log("todo edited", index);
  const updatedVal = prompt("enter updated value", allArray[index]);
  //   allTodos.splice(index , 1 , updatedVal)
  allArray[index] = updatedVal

  onResult()
}

function emptyInput(){
    
}