const spinner = document.querySelector("#spinner");
//Declare loading element

spinner.removeAttribute('hidden');
//loading element attribute 


//fecth method are giving data us
fetch('https://randomuser.me/api/?results=25')
    .then(response => response.json()) //response is response
    .then(data => showFunction(data.results)) //data is the last results
    .catch(error => showErrorFunction(error)) //if we see error this method is running

let showingUl = document.querySelector('#dataList')
//Declare the data showing on html side element

function showFunction(data) {
    //the method are showing data to html
    console.log(data) //a little bit control
    data.forEach(element => { //this block every time write to data on html tags
        if (element.dob.age >= 55) { //we see greater than 55 years old people
            showingUl.innerHTML += `
            <td></td>
            <td>${element.name.first}</td> 
            <td>${element.name.last}</td>   
            <td>${element.dob.age}</td> 
            <td>${element.nat}</td>`
            spinner.setAttribute('hidden', ' ');
        } else
            console.log("yok")

    });
}


function showErrorFunction(error) { //if we see error this function are running
    console.log(error + " hata oldu")
    showingUl.innerHTML += `
            <td></td>
            <td>not found</td> 
            <td>not found</td>  
            <td>not found</td>
            <td>not found</td> `
}