const input=document.getElementById("inputfield");
const btn=document.querySelector(".btn");
const task=document.querySelector(".list-item")

btn.addEventListener("click",event =>{
     if(!input.value){
        alert("Please add your text!!");
     }
     else{
        let li=document.createElement("li");
        li.textContent=input.value;
        task.appendChild(li);

        let span=document.createElement("span");
        span.textContent="\u00d7";
        li.appendChild(span);

        input.value="";
        saveEle();
     }

}
)

task.addEventListener("click",(e)=>
{  
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveEle()
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveEle()
    }
    
})


function saveEle(){
    localStorage.setItem("task",task.innerHTML)
}

function getEle(){
    task.innerHTML=localStorage.getItem("task");
}

getEle();

