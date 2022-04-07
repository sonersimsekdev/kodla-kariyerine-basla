const spinner = document.querySelector("#spinner");


spinner.removeAttribute('hidden');
fetch('https://randomuser.me/api/?results=25')
    .then(response => response.json())
    .then(data => showFunction(data.results))
    .catch(error => showErrorFunction(error))

    let showingUl = document.querySelector('#dataList')
function showFunction(data) {
    console.log(data)
    data.forEach(element => {
        
        if (element.dob.age >= 55) {
            showingUl.innerHTML += `
            <td></td>
            <td>${element.name.first}</td> 
            <td>${element.name.last}</td>   
            <td>${element.dob.age}</td> 
            <td>${element.nat}</td>`
            spinner.setAttribute('hidden',' ');
        } else
            console.log("yok")

    });
}


function showErrorFunction(error) {
    console.log(error + " hata oldu")
    showingUl.innerHTML += `
            <td></td>
            <td>not found</td> 
            <td>not found</td>  
            <td>not found</td>
            <td>not found</td> `
}