const resultList = document.querySelector("#resultList");
const firsturl = "https://swapi.dev/api/people/";
const pageList = document.querySelector("#pageNumbers");
let wayfinder = 1;
let nextURL = "";
let previousURL = "";

fetchSWAPI(firsturl);

function fetchSWAPI(url){
    resultList.innerHTML = '';
    fetch(url)
        .then(response => response.json())
        .then(people => {
            people.results.forEach(
                person => {
                let listItem = document.createElement('li');
                listItem.textContent = `${person.name}`;
                resultList.appendChild(listItem);
                //console.log(person.url)
                }
            );

            console.log(people);
            nextURL = people.next;
            previousURL = people.previous;

            let numPages = Math.ceil(people.count / 10);
            pageList.innerHTML = "";
    
            for (i = 1; i <= numPages; i++){
                let page = document.createElement('li');
                page.textContent = `${i}`;
                page.setAttribute("id", `page=${i}`);
                page.setAttribute("class", "pageLink");
                pageList.appendChild(page);
            }

            colorWayfinder();
            
            addPageListeners();

        });
}


function nextPage(){
    if(nextURL != null){
    fetchSWAPI(nextURL);
    wayfinder++;
    }
}

function previousPage(){
    if(previousURL != null){
    fetchSWAPI(previousURL);
    wayfinder--;
    }
}

function addPageListeners(){
    document.querySelectorAll(".pageLink").forEach(element =>{
        element.addEventListener("touchend", jumpToPage);
    });
}

function jumpToPage(event){
    // console.log("jump");
    let url = "https://swapi.dev/api/people/?" + event.target.id; 
    fetchSWAPI(url);
    wayfinder = event.target.id.substring(5);
    console.log(wayfinder);
}

function colorWayfinder(){
    document.getElementById(`page=${wayfinder}`).classList.add("wayfinder");
}