const task = document.getElementById('task');
const create = document.getElementById('Create');
const Todo = document.getElementById('Todolist');
/*

.........Structure of Elements........
            Todo
                full
                    list
                    del
                    Comp 
                Date       

                    */

create.addEventListener('click', function(event){
event.preventDefault();
if( task.value != ""){
    
    const full = document.createElement('div');   
    full.innerHTML =('');
    Todo.appendChild(full);


    const list = document.createElement('div');
    
    list.innerHTML =task.value;
    list.style.textDecoration = 'none';
    list.style.margin = '4px';
    full.appendChild(list);

   

    const del = document.createElement('button');
    del.id = 'del'
    del.innerHTML = "Delete";
    list.appendChild(del);

    const Comp = document.createElement('button');
    Comp.innerHTML = "Comp";
    list.appendChild(Comp);
    const date = document.createElement('div'); 
    task.value = ""

    applylistener(del, Comp ,list ,date ,full); // parameters 
    }
    else{
        alert("Enter some task");
    }

    
})

function applylistener(del, Comp ,list ,date , full){

    del.addEventListener('click', function(){
full.removeChild(list);
full.removeChild(date);
console.log("del clicked");
    })

    Comp.addEventListener('click', function(){

        const d = new Date();

        const check = d.toISOString().split('T')[1];
        console.log(check);

date.innerHTML = "Task Completed on :"+ d.toLocaleDateString() + " " + d.toLocaleTimeString() ;

if(list.style.textDecoration == 'none'){
list.style.textDecoration = 'line-through';
    full.appendChild(date)

}else{
    const Confirmed = confirm("Are you sure! you not completed this task")
if(Confirmed){
    full.removeChild(date);
    list.style.textDecoration = 'none';
    
    }
    
}


    })
}



