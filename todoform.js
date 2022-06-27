//window.onload = function() {

const body = document.querySelector("body");
const form = document.querySelector("form");
const textinput = document.querySelector("#fname");


let n=0;
let zadania =[];

//localStorage.clear();

form.addEventListener('submit', create);

//petla uaktywniająca wczytywanie ze Storage

if(localStorage.length > 0){
readFromStorage();
}


//funkcja tworząca nowy <p> wczytujaca ze storage

function readFromStorage(){
   
   
zadania = JSON.parse(localStorage.getItem("zadania"));
for(let i=0; i<zadania.length; i++){
let newp = document.createElement("li");
newp.innerHTML = `oto zadanie ${i}:${zadania[i]}
                                 <button class="skasuj">Skasuj</button>`;
body.appendChild(newp);
}
     
const buttonsDelete = document.querySelectorAll(".skasuj");
    
for(let i=0; i<buttonsDelete.length; i++){
buttonsDelete[i].addEventListener("click", deleteStoredItem);
}
    
}


//funkcja tworząca nowy <p> z formularza i dodajaca do Storage i suswająca przycisk
function create(event){
    event.preventDefault();
    let newp = document.createElement("p");
    newp.innerHTML = `oto zadanie ${n}:${textinput.value}
     <button class="skasuj">Skasuj</button>`;
    body.appendChild(newp);
    n++;
    
        let text =textinput.value;
    zadania.push(text);
    localStorage.setItem("zadania",JSON.stringify(zadania));
    
    
    const buttonsDelete = document.querySelectorAll(".skasuj");
    
    for(let i=0; i<buttonsDelete.length; i++){
    
    buttonsDelete[i].addEventListener("click", deleteNewItem);
         
    }
}
    
      
    
    //funkcja zczytująca tablicę
function readTaskList()
  {
    return JSON.parse(localStorage.getItem("zadania")) || [];
  }
  
  
 //funkcja usuwająca item (odtwarzany ze strorage) i usuwajaca go ze storage
function deleteStoredItem(event){
        const linkToBeRemoved = event.target.parentElement;
        linkToBeRemoved.remove();
        zadania = readTaskList();
        zadania.splice(n,1);
       localStorage.setItem("zadania",JSON.stringify(zadania));

     
};

  //funkcja usuwająca item (tworzony z formularza) i usuwajaca go ze storage
  
  function deleteNewItem(e){
      
       const linkToBeRemoved = e.target.parentElement;
        linkToBeRemoved.remove();
        zadania = readTaskList();
        zadania.splice(i,1);
         localStorage.setItem("zadania",JSON.stringify(zadania));
        }
  
  


//kontrolne przegladanie zawartosci Storage
console.log(localStorage.length);
for(var i=0; i < localStorage.length; i++){

const key = localStorage.key(i);

console.log(`${key}: ${localStorage.getItem(key)}`);  
}








