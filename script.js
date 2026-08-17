const inputBox = document.getElementById("input-box");
const nameList = document.getElementById("namelist");

function addTask(){
    if(inputBox.value === ''){
        alert("write something!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        nameList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

namelist.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("paid");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", namelist.innerHTML);
}

function showList(){
    namelist.innerHTML = localStorage.getItem("data")
}
showList();