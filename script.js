let btn_add=document.getElementById('add');
let tasks=[];
btn_add.addEventListener("click",function add(){
    let inp=document.getElementById('inp').value;
    tasks.push(inp);
    document.getElementById('inp').value="";
    view();
})

function view(){
let items_list=document.getElementById('items_list');
let count=tasks.length ;
var task='';
for (i = 0; i <count; i++) {
 task +=`
 <div  style="margin-top: 20px;display: flex;flex-direction: row;justify-content: space-around;align-items: center;background-color:white; border-radius: 20px; width: 100%;">
    <li id="item" style="text-transform: capitalize;font-family: 'Pacifico', cursive;font-family: 'Playfair Display', serif;">${tasks[i]}</li>
    <div class="icons" >
       <i class="fa-regular fa-pen-to-square" id="edit" style=" cursor: pointer;" onclick='update(${i})'></i>
       <i class="fa-solid fa-trash-can" id="delete" onclick='destroy(${i})' style=" cursor: pointer;"></i>
    </div>
 </div>`
;
}
items_list.innerHTML=task;
}

function destroy(index){
tasks.splice(index,1);
view();
}

function update(index){
 document.getElementById('inp').value=tasks[index];
 document.getElementById('add').style.display="none";
 document.getElementById('update').style.display="block";
 document.getElementById('hidden').value=index;
}
function edit(){
let index=document.getElementById('hidden').value;
let task=document.getElementById('inp').value;
tasks[index]=task;
document.getElementById('inp').value="";
document.getElementById('add').style.display="block";
document.getElementById('update').style.display="none";
view();
}